import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  await supabase.auth.signOut();

  // Fixed URL to redirect to after sign-out process completes
  const origin = 'http://137.184.124.184:3000';

  return NextResponse.redirect(`${origin}/login`, {
    status: 301,
  });
}
