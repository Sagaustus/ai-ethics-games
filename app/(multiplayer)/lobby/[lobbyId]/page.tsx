'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type Lobby = {
  id: string;
  name: string;
  players: string[];
  status: 'waiting' | 'in-game' | 'finished';
  scenarioSlug?: string;
  createdAt: string;
};

export default function LobbyDetailPage() {
  const params = useParams();
  const lobbyId = useMemo(() => {
    const raw = (params as any)?.lobbyId;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [lobby, setLobby] = useState<Lobby | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setError(null);
      try {
        const res = await fetch('/api/multiplayer/lobbies');
        if (!res.ok) throw new Error('Failed to load lobbies');
        const all: Lobby[] = await res.json();
        const found = all.find((l) => l.id === lobbyId) ?? null;
        if (!cancelled) setLobby(found);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load lobby');
      }
    }

    if (lobbyId) load();
    return () => {
      cancelled = true;
    };
  }, [lobbyId]);

  if (!lobbyId) {
    return <div className="text-center text-mindscape-fg/80">Missing lobby id.</div>;
  }

  if (error) {
    return <div className="text-center text-red-300">{error}</div>;
  }

  if (!lobby) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
        <h1 className="text-3xl font-extrabold text-portal-gold">Lobby</h1>
        <p className="mt-4 text-mindscape-fg/80">Lobby not found (or expired).</p>
        <div className="mt-8">
          <Link href="/lobby" className="hover:text-portal-gold transition-colors">
            Back to Lobby List
          </Link>
        </div>
      </div>
    );
  }

  const debateId = `debate-${lobby.id}`;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">{lobby.name}</h1>
        <p className="mt-3 text-mindscape-fg/80">Status: {lobby.status}</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6">
        <h2 className="text-lg font-semibold text-mindscape-fg">Players</h2>
        <ul className="mt-3 space-y-1 text-mindscape-fg/80">
          {lobby.players.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={`/live-debate/${debateId}`}
          className="inline-flex items-center justify-center rounded-md bg-portal-gold px-5 py-3 font-semibold text-black hover:opacity-90 transition"
        >
          Enter Live Debate
        </Link>
        <Link href="/lobby" className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 text-mindscape-fg hover:border-portal-gold/40 hover:text-portal-gold transition">
          Back to Lobby List
        </Link>
      </div>
    </div>
  );
}
