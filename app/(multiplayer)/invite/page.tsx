// app/(multiplayer)/invite/page.tsx

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Lobby = {
  id: string;
  name: string;
  players: string[];
  status: 'waiting' | 'in-game' | 'finished';
  createdAt: string;
  scenarioSlug?: string;
};

export default function InviteIndexPage() {
  const [lobbies, setLobbies] = useState<Lobby[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/multiplayer/lobbies');
        if (!res.ok) throw new Error('Failed to load lobbies');
        const data: Lobby[] = await res.json();
        if (!cancelled) setLobbies(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load lobbies');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading invite options...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Invite Friends</h1>
        <p className="mt-3 text-mindscape-fg/80">Pick a lobby to generate an invite link.</p>
      </div>

      <div className="mt-10 space-y-3">
        {lobbies.length === 0 ? (
          <div className="text-center text-mindscape-fg/70">No lobbies found. Create one first.</div>
        ) : (
          lobbies.map((lobby) => (
            <Link
              key={lobby.id}
              href={`/invite/${lobby.id}`}
              className="block rounded-xl bg-debate-panel/60 border border-white/10 p-4 hover:border-portal-gold/40 hover:bg-debate-panel/70 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-mindscape-fg">{lobby.name}</div>
                  <div className="mt-1 text-sm text-mindscape-fg/70">{lobby.players.length} player(s) • {lobby.status}</div>
                </div>
                <div className="text-sm text-portal-gold">Invite →</div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="mt-10 text-center">
        <Link href="/lobby" className="hover:text-portal-gold transition-colors">
          Back to Lobby
        </Link>
      </div>
    </div>
  );
}
