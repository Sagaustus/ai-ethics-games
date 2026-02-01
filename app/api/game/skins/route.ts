import { NextResponse } from 'next/server';

/**
 * Skins API.
 * - GET /api/game/skins
 */
export async function GET() {
  const skins = Array.from({ length: 8 }).map((_, idx) => {
    const n = idx + 1;
    return {
      slug: `skin-${n}`,
      name: `Skin ${n}`,
      description: 'A cosmetic unlock for your character.',
      imageUrl: `/img/${n}.png`,
      unlockedCriteria: n === 1 ? 'Available by default' : 'Win a debate or complete a daily challenge',
    };
  });

  return NextResponse.json(skins, { status: 200 });
}
