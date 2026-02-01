import { NextResponse } from 'next/server';

/**
 * Public debates API.
 * - GET /api/multiplayer/public-debates
 */
export async function GET() {
  const debates = [
    {
      id: 'debate-1',
      scenarioSlug: 'the-watchful-eye',
      playerNames: ['Ada', 'Turing'],
      outcome: 'Ada wins',
      status: 'completed',
      viewers: 0,
    },
    {
      id: 'debate-2',
      scenarioSlug: 'self-driving-dilemma',
      playerNames: ['Hopper', 'Linus'],
      status: 'ongoing',
      viewers: 12,
    },
  ];

  return NextResponse.json(debates, { status: 200 });
}
