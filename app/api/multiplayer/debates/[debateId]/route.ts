import { NextResponse } from 'next/server';

export async function GET(_request: Request, context: { params: { debateId: string } }) {
  const { debateId } = context.params;

  // Minimal placeholder debate state to unblock the UI.
  return NextResponse.json(
    {
      id: debateId,
      scenarioSlug: 'the-watchful-eye',
      players: [
        { id: 'p1', username: 'Ada', school: 'Deontology', character: 'The Scholar', currentScore: 3 },
        { id: 'p2', username: 'Turing', school: 'Utilitarianism', character: 'The Advocate', currentScore: 2 },
      ],
      currentTurn: 0,
      activePlayerId: 'p1',
      debateLog: [],
      availableArguments: [
        { text: 'Protect rights even when inconvenient.', isCorrect: true, points: 2 },
        { text: 'Optimize the outcome regardless of means.', isCorrect: false, points: 1 },
      ],
      timer: 30,
      status: 'in-progress',
    },
    { status: 200 },
  );
}
