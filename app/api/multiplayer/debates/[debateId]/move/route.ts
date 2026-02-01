import { NextResponse } from 'next/server';

export async function POST(request: Request, context: { params: { debateId: string } }) {
  const { debateId } = context.params;
  const body = await request.json().catch(() => null);

  if (!body?.playerId || !body?.argumentSlug) {
    return NextResponse.json({ error: 'Missing playerId or argumentSlug' }, { status: 400 });
  }

  // Placeholder: accept move.
  return NextResponse.json(
    {
      ok: true,
      debateId,
      received: body,
    },
    { status: 200 },
  );
}
