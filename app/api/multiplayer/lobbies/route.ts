import { NextResponse } from 'next/server';

type Lobby = {
  id: string;
  name: string;
  players: string[];
  status: 'waiting' | 'in-game' | 'finished';
  scenarioSlug?: string;
  createdAt: string;
};

// In-memory placeholder (resets on cold start). Good enough to stop UI fetch failures.
const LOBBIES: Lobby[] = [
  {
    id: 'lobby-1',
    name: 'Casual Room',
    players: ['Ada'],
    status: 'waiting',
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
  {
    id: 'lobby-2',
    name: 'Ranked Room',
    players: ['Turing', 'Hopper'],
    status: 'in-game',
    scenarioSlug: 'the-watchful-eye',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(LOBBIES, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';

  if (!name) {
    return NextResponse.json({ error: 'Missing lobby name' }, { status: 400 });
  }

  const lobby: Lobby = {
    id: `lobby-${Math.random().toString(36).slice(2, 10)}`,
    name,
    players: ['You'],
    status: 'waiting',
    createdAt: new Date().toISOString(),
  };

  LOBBIES.unshift(lobby);
  return NextResponse.json(lobby, { status: 201 });
}
