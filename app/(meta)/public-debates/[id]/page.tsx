'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type PublicDebateSummary = {
  id: string;
  scenarioSlug: string;
  playerNames: string[];
  outcome?: string;
  status: 'completed' | 'ongoing';
  viewers?: number;
};

export default function PublicDebateDetailPage() {
  const params = useParams();
  const id = useMemo(() => {
    const raw = (params as any)?.id;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [debate, setDebate] = useState<PublicDebateSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setError(null);
      try {
        const res = await fetch('/api/multiplayer/public-debates');
        if (!res.ok) throw new Error('Failed to load debates');
        const all: PublicDebateSummary[] = await res.json();
        const found = all.find((d) => d.id === id) ?? null;
        if (!cancelled) setDebate(found);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load debate');
      }
    }

    if (id) load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!id) {
    return <div className="text-center text-mindscape-fg/80">Missing debate id.</div>;
  }

  if (error) {
    return <div className="text-center text-red-300">{error}</div>;
  }

  if (!debate) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
        <h1 className="text-3xl font-extrabold text-portal-gold">Public Debate</h1>
        <p className="mt-4 text-mindscape-fg/80">Debate not found.</p>
        <div className="mt-8">
          <Link href="/public-debates" className="hover:text-portal-gold transition-colors">
            Back to Public Debates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Debate: {debate.scenarioSlug}</h1>
        <p className="mt-3 text-mindscape-fg/80">{debate.playerNames.join(' vs ')}</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6 text-left">
        <div className="text-mindscape-fg/90">
          <div>Status: {debate.status}</div>
          {typeof debate.viewers === 'number' && <div>Viewers: {debate.viewers}</div>}
          {debate.outcome && <div>Outcome: {debate.outcome}</div>}
        </div>
        <p className="mt-4 text-sm text-mindscape-fg/70">
          This is currently a placeholder detail view. When multiplayer persistence is added, this page can show the full replay log.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link href="/public-debates" className="hover:text-portal-gold transition-colors">
          Back to Public Debates
        </Link>
      </div>
    </div>
  );
}
