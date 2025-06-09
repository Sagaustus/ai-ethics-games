import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client.
 * Uses service role credentials and should never run in the browser.
 */
export const supabase = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
);
