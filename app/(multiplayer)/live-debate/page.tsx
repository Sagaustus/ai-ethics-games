// app/(multiplayer)/live-debate/page.tsx

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type PublicDebateSummary = {
  id: string;
  scenarioSlug: string;
  playerNames: string[];
  outcome?: string;
  status: 'completed' | 'ongoing';
  viewers?: number;
};

export default function LiveDebateIndexPage() {
  const [debates, setDebates] = useState<PublicDebateSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/multiplayer/public-debates');
        if (!res.ok) throw new Error('Failed to load debates');
        const data: PublicDebateSummary[] = await res.json();
        if (!cancelled) setDebates(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load debates');
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
    return <div className="text-center text-xl text-mindscape-fg/80">Loading debates...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading debates: {error}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Live Debates</h1>
        <p className="mt-3 text-mindscape-fg/80">Pick a debate to watch or participate.</p>
      </div>

      <div className="mt-10 space-y-3">
        {debates.length === 0 ? (
          <div className="text-center text-mindscape-fg/70">No debates available right now.</div>
        ) : (
          debates.map((d) => (
            <Link
              key={d.id}
              href={`/live-debate/${d.id}`}
              className="block rounded-xl bg-debate-panel/60 border border-white/10 p-4 hover:border-portal-gold/40 hover:bg-debate-panel/70 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-mindscape-fg">{d.scenarioSlug}</div>
                  <div className="mt-1 text-sm text-mindscape-fg/70">{d.playerNames.join(' vs ')}</div>
                  {d.outcome && <div className="text-sm text-mindscape-fg/70">Outcome: {d.outcome}</div>}
                </div>
                <div className="text-sm">
                  <span className={`px-2 py-1 rounded ${d.status === 'completed' ? 'bg-white/10 text-mindscape-fg' : 'bg-emerald-500/80 text-white'}`}>
                    {d.status === 'completed' ? 'Completed' : `Live (${d.viewers ?? 0})`}
                  </span>
                </div>
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
