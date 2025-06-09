// app/api/game/scenarios.ts

import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/server';

// Assuming you have a utility to create a Supabase client instance.
// Example: create a file like `utils/supabase/server.ts` with:
// import { createClient as createServerClient } from '@supabase/ssr';
// import { cookies } from 'next/headers';
// export const createClient = () => createServerClient({ cookies });

// Define the handler for GET requests
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const scenarioSlug = searchParams.get('slug');


  try {
    if (scenarioSlug) {
      // If a slug is provided, fetch a specific scenario
      const { data, error } = await supabase
        .from('scenarios') // Assuming you have a 'scenarios' table in Supabase
        .select('*') // Select all columns for the scenario
        .eq('slug', scenarioSlug) // Filter by the provided slug
        .single(); // Expecting a single result

      if (error) {
        console.error('Error fetching scenario by slug:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      if (!data) {
        return NextResponse.json({ error: 'Scenario not found' }, { status: 404 });
      }

      // Return the fetched scenario data
      return NextResponse.json(data, { status: 200 });

    } else {
      // If no slug is provided, fetch a list of all scenarios (or a subset)
      const { data, error } = await supabase
        .from('scenarios') // Assuming you have a 'scenarios' table
        .select('*'); // Select all columns (adjust if you only need a subset for the list)

      if (error) {
        console.error('Error fetching scenarios:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      // Return the list of scenarios
      return NextResponse.json(data, { status: 200 });
    }

  } catch (error: any) {
    console.error('Unexpected error in scenarios API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// You can add handlers for other HTTP methods (POST, PUT, DELETE) if needed
// export async function POST(request: Request) { ... }