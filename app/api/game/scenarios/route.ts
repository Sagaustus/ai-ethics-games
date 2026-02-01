import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/utils/supabase/server';
import { scenarios as localScenarioList, scenarioDetailsBySlug } from '@/data/scenarios';

function normalizeLocalScenario(slug: string, raw: any) {
  const title = raw?.title ?? localScenarioList.find((s) => s.slug === slug)?.name ?? slug;
  const description = raw?.description ?? localScenarioList.find((s) => s.slug === slug)?.description ?? '';
  const image = raw?.image ?? localScenarioList.find((s) => s.slug === slug)?.icon ?? '';
  const tags = Array.isArray(raw?.tags) ? raw.tags : [];
  const introduction = raw?.introduction ?? description;
  const initialState = raw?.initialState ?? {};
  const exploration = Array.isArray(raw?.exploration) ? raw.exploration : [];
  const endMessage = raw?.endMessage ?? '';

  return {
    slug,
    title,
    description,
    image,
    tags,
    introduction,
    initialState,
    exploration,
    endMessage,
    ...raw,
  };
}

/**
 * Scenarios API (App Router route handler).
 * - GET /api/game/scenarios            -> list scenarios
 * - GET /api/game/scenarios?slug=...   -> scenario detail
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const scenarioSlug = searchParams.get('slug');

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    // Local fallback so the game can run without env configuration.
    if (scenarioSlug) {
      const local = scenarioDetailsBySlug[scenarioSlug];
      if (!local) return NextResponse.json({ error: 'Scenario not found' }, { status: 404 });
      return NextResponse.json(normalizeLocalScenario(scenarioSlug, local), { status: 200 });
    }

    const list = localScenarioList.map((s) => {
      const local = scenarioDetailsBySlug[s.slug];
      return {
        slug: s.slug,
        title: local?.title ?? s.name,
        description: local?.description ?? s.description ?? '',
        image: local?.image ?? s.icon,
        tags: Array.isArray(local?.tags) ? local.tags : [],
      };
    });
    return NextResponse.json(list, { status: 200 });
  }

  try {
    if (scenarioSlug) {
      const { data, error } = await supabase
        .from('scenarios')
        .select('*')
        .eq('slug', scenarioSlug)
        .single();

      if (error) {
        console.error('Error fetching scenario by slug:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      if (!data) {
        return NextResponse.json({ error: 'Scenario not found' }, { status: 404 });
      }

      return NextResponse.json(data, { status: 200 });
    }

    const { data, error } = await supabase.from('scenarios').select('*');

    if (error) {
      console.error('Error fetching scenarios:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Unexpected error in scenarios API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
