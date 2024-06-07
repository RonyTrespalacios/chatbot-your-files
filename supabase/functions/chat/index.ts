import { createClient } from '@supabase/supabase-js';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { codeBlock } from 'common-tags';
import OpenAI from 'openai';
import { Database } from '../_lib/database.ts';

const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
});

// These are automatically injected
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response(
      JSON.stringify({
        error: 'Missing environment variables.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const authorization = req.headers.get('Authorization');

  if (!authorization) {
    return new Response(
      JSON.stringify({ error: `No authorization header passed` }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        authorization,
      },
    },
    auth: {
      persistSession: false,
    },
  });

  const { messages, embedding } = await req.json();

  const { data: documents, error: matchError } = await supabase
    .rpc('match_document_sections', {
      embedding,
      match_threshold: 0.8,
    })
    .select('content')
    .limit(5);

  if (matchError) {
    console.error(matchError);

    return new Response(
      JSON.stringify({
        error: 'There was an error reading your documents, please try again.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const injectedDocs =
    documents && documents.length > 0
      ? documents.map(({ content }) => content).join('\n\n')
      : 'No documents found';

  console.log(injectedDocs);

  const completionMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
    [
      {
        role: 'user',
        content: codeBlock`
        Tu nombre es Max, eres un asesor de ventas experto en marketing y ventas.

        Eres un chatbot, asi que manten tus respuestas con respeto y confianza.
        Se amigable y responde saludos incitando al cliente a   preguntar cosas.

        Solo tienes permitido responder con base a los documentos de abajo, ademas de saludar amigablemente.

        Si la pregunta no esta relacionada con los documentos de abajo, responde:
        "Lo siento, no tengo informacion al respecto, pero te puedo hablar de ..."
        Complementar con infromacion que tenga que ver con los documentos. 

        Si la pregunta no esta relacionada con los documentos de abajo, responde:
        "Lo siento, no tengo informacion al respecto, pero te puedo hablar de ..."
        Complementar con infromacion que tenga que ver con los documentos. 

        no te salgas de los temas.

        Se preciso, consistente y ve al grano cuando te pregunten cosas especificas.

        Resume la informacion cuando sea muy extensa.

        Responde con maximo 4096 tokens
        Documentos:
        ${injectedDocs}
      `,
      },
      ...messages,
    ];

  const completionStream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: completionMessages,
    max_tokens: 3500,
    temperature: 0,
    stream: true,
  });

  const stream = OpenAIStream(completionStream);
  return new StreamingTextResponse(stream, { headers: corsHeaders });
});