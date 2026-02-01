import { NextResponse } from 'next/server';

/**
 * Characters API.
 * - GET /api/game/characters?schoolSlug=...
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const schoolSlug = searchParams.get('schoolSlug');

  if (!schoolSlug) {
    return NextResponse.json({ error: 'Missing schoolSlug' }, { status: 400 });
  }

  // Lightweight placeholder data until real character content exists.
  const characters = [
    {
      slug: `${schoolSlug}-scholar`,
      name: 'The Scholar',
      schoolOfThoughtSlug: schoolSlug,
      description: 'Calm, precise, and relentlessly principled in debate.',
      avatar: '/img/1.png',
    },
    {
      slug: `${schoolSlug}-advocate`,
      name: 'The Advocate',
      schoolOfThoughtSlug: schoolSlug,
      description: 'Persuasive and strategic; always pushing the strongest framing.',
      avatar: '/img/2.png',
    },
    {
      slug: `${schoolSlug}-empath`,
      name: 'The Empath',
      schoolOfThoughtSlug: schoolSlug,
      description: 'Reads the room and argues from lived experience and impact.',
      avatar: '/img/3.png',
    },
  ];

  return NextResponse.json(characters, { status: 200 });
}
