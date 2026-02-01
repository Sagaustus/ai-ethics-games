import { NextResponse } from 'next/server';

/**
 * Ranking API.
 * - GET /api/game/ranking
 */
export async function GET() {
  // Placeholder leaderboard until persistence exists.
  const rows = [
    {
      playerId: 'Ada',
      totalScore: 42,
      utilitarianScore: 18,
      deontologicalScore: 14,
      virtueScore: 10,
    },
    {
      playerId: 'Turing',
      totalScore: 37,
      utilitarianScore: 12,
      deontologicalScore: 16,
      virtueScore: 9,
    },
    {
      playerId: 'Hopper',
      totalScore: 31,
      utilitarianScore: 10,
      deontologicalScore: 9,
      virtueScore: 12,
    },
  ];

  return NextResponse.json(rows, { status: 200 });
}
