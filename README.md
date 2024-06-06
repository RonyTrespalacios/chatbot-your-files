<h1 align="center">Chatbot Your Files - Repo</h1>

1. **Clone repo:** Clone this repo at tag `step-1`:

   ```shell
   git clone https://github.com/RonyTrespalacios/chatbot-your-files.git
   ```

   This will automatically clone our starting point.

1. **Step-by-step guide:** These steps are written out line-by-line. Feel free to follow along using the [steps below](#step-by-step).

## 🧱 Pre-req’s

- Unix-based OS (if Windows, WSL2)
- Docker
- Node.js 18+
- Deno 

## 💿 Sample Data

This repository includes 3 sample markdown files that we'll use to test the app:

[`./sample-files/file1.md`](./sample-files/file1.md)

[`./sample-files/file2.md`](./sample-files/file2.md)

[`./sample-files/file3.md`](./sample-files/file3.md)




### `Step 1` - Install dependencies

#### Install dependencies

First install NPM dependencies.

```bash
npm i
```

#### Setup Supabase stack

When developing a project in Supabase, you can choose to develop locally or directly on the cloud.

1. Start a local version of Supabase _(runs in Docker)_.

   ```shell
   npx supabase start
   ```

1. Store the Supabase URL & public anon key in `.env.local` for Next.js.

   ```bash
   npx supabase status -o env \
     --override-name api.url=NEXT_PUBLIC_SUPABASE_URL \
     --override-name auth.anon_key=NEXT_PUBLIC_SUPABASE_ANON_KEY |
       grep NEXT_PUBLIC > .env.local
   ```

1.  First let's note how dependencies are resolved using an import map - `./supabase/functions/import_map.json`.

    Import maps aren't required in Deno, but they can simplify imports and keep dependency versions consistent. All of our dependencies come from NPM, but since we're using Deno we fetch them from a CDN like https://esm.sh or https://cdn.jsdelivr.net.

    ```json
    {
      "imports": {
        "@std/": "https://deno.land/std@0.168.0/",

        "@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@2.21.0",
        "openai": "https://esm.sh/openai@4.10.0",
        "common-tags": "https://esm.sh/common-tags@1.8.2",
        "ai": "https://esm.sh/ai@2.2.13",

        "mdast-util-from-markdown": "https://esm.sh/mdast-util-from-markdown@2.0.0",
        "mdast-util-to-markdown": "https://esm.sh/mdast-util-to-markdown@2.1.0",
        "mdast-util-to-string": "https://esm.sh/mdast-util-to-string@4.0.0",
        "unist-builder": "https://esm.sh/unist-builder@4.0.0",
        "mdast": "https://esm.sh/v132/@types/mdast@4.0.0/index.d.ts",

        "https://esm.sh/v132/decode-named-character-reference@1.0.2/esnext/decode-named-character-reference.mjs": "https://esm.sh/decode-named-character-reference@1.0.2?target=deno"
      }
    }
    ```

    _Note: URL based imports and import maps aren't a Deno invention. These are a [web standard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) that Deno follows as closely as possible._


1.  If developing locally, open a new terminal and serve the edge functions.

    ```bash
    npx supabase functions serve
    ```

    _Note: Local Edge Functions are automatically served as part of `npx supabase start`, but this command allows us to also monitor their logs._

    If you're developing directly on the cloud, deploy your edge function:

    ```shell
    npx supabase functions deploy
    ```

1.  How to apply the migration to our local database.

    ```bash
    npx supabase migration up
    ```

    or if you are developing directly on the cloud, push your migrations up:

    ```
    npx supabase db push
    ```

1.  Install frontend dependencies

    ```bash
    npm i @xenova/transformers ai
    ```

    We'll use [Transformers.js](https://github.com/xenova/transformers.js) to perform inference directly in the browser.

1.  Generate an API key from [OpenAI](https://platform.openai.com/account/api-keys) and save it in `supabase/functions/.env`.

    ```bash
    cat > supabase/functions/.env <<- EOF
    OPENAI_API_KEY=<your-api-key>
    EOF
    ```
## 🔗 Supabase Vector resources

- [Supabase AI & Vector](https://supabase.com/docs/guides/ai)
- [pgvector Columns](https://supabase.com/docs/guides/ai/vector-columns)
- [pgvector Indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Generate Embeddings using Edge Functions](https://supabase.com/docs/guides/ai/quickstarts/generate-text-embeddings)
- [Going to Production](https://supabase.com/docs/guides/ai/going-to-prod)
