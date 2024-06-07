import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const supabase = createRouteHandlerClient({ cookies });

  const origin = 'http://137.184.124.184:3000';

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${origin}/login?error=Could not authenticate user`,
      {
        status: 301,
      }
    );
  }

  return NextResponse.redirect(
    `${origin}/login?message=Check email to continue sign in process`,
    {
      status: 301,
    }
  );
}
