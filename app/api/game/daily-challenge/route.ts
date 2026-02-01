import { NextResponse } from 'next/server';
import { dailyDilemma } from '@/data/daily';
import type { ScenarioChoice } from '@/game/types';

/**
 * Daily challenge API.
 * - GET /api/game/daily-challenge
 */
export async function GET() {
  const choices: ScenarioChoice[] = dailyDilemma.options.map((opt, idx) => ({
    text: opt,
    outcome: `daily:${dailyDilemma.id}:choice:${idx + 1}`,
    effects: {
      // Lightweight, illustrative scoring nudges.
      utilitarianPoints: opt.toLowerCase().includes('well-being') ? 2 : 0,
      deontologicalPoints: opt.toLowerCase().includes('rights') ? 2 : 0,
      virtuePoints: opt.toLowerCase().includes('vulnerable') ? 2 : 0,
    },
  }));

  return NextResponse.json(
    {
      challengeId: dailyDilemma.id,
      title: 'Daily Ethical Challenge',
      text: dailyDilemma.question,
      choices,
      duration: dailyDilemma.duration,
    },
    { status: 200 },
  );
}
