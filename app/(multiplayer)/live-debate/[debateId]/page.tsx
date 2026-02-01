'use client';

import { useMemo, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { Argument } from '@/game/types';

interface LiveDebateState {
  id: string;
  scenarioSlug: string;
  players: { id: string; username: string; school: string; character: string; currentScore: number }[];
  currentTurn: number;
  activePlayerId: string;
  debateLog: { playerId?: string; argumentText?: string; npcResponse?: string; feedback?: string }[];
  availableArguments: Argument[];
  timer: number;
  status: 'waiting' | 'in-progress' | 'finished';
}

export default function LiveDebatePage() {
  const params = useParams();
  const debateId = useMemo(() => {
    const raw = (params as any)?.debateId;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const { player } = useGameState();

  const [debateState, setDebateState] = useState<LiveDebateState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!debateId) {
      setError('Debate ID not specified.');
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/multiplayer/debates/${debateId}`);
        if (!response.ok) throw new Error('Failed to fetch initial debate state');
        const initial: LiveDebateState = await response.json();
        if (!cancelled) setDebateState(initial);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load debate.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [debateId]);

  const isMyTurn = debateState?.activePlayerId === player.id;

  const handleChooseArgument = async (chosenArgument: Argument) => {
    if (!debateState || !isMyTurn || debateState.status !== 'in-progress') return;

    try {
      const response = await fetch(`/api/multiplayer/debates/${debateId}/move`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId: player.id,
          argumentSlug: chosenArgument.text,
          turn: debateState.currentTurn,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit argument');

      // In a real implementation, realtime updates would update state.
      // For now, we just re-fetch to keep the demo loop moving.
      const refreshed = await fetch(`/api/multiplayer/debates/${debateId}`).then((r) => r.json());
      setDebateState(refreshed);
    } catch {
      setError('Failed to submit argument.');
    }
  };

  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading live debate...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading live debate: {error}</div>;
  }

  if (!debateState) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
        <p className="text-xl text-mindscape-fg/80">Live debate not found or has ended.</p>
        <div className="mt-8">
          <Link href="/lobby" className="hover:text-portal-gold transition-colors">
            Back to Lobby
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Live Debate</h1>
        <p className="mt-2 text-mindscape-fg/80">Scenario: {debateState.scenarioSlug} • Turn {debateState.currentTurn + 1}</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6 text-left">
        <h2 className="text-lg font-semibold text-mindscape-fg">Players</h2>
        <div className="mt-3 space-y-1 text-mindscape-fg/80">
          {debateState.players.map((p) => (
            <div key={p.id}>
              {p.username} ({p.school}) — Score: {p.currentScore}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-debate-panel/60 border border-white/10 p-6 text-left">
        <h2 className="text-lg font-semibold text-mindscape-fg">Debate Log</h2>
        <div className="mt-3 max-h-56 overflow-y-auto space-y-2 text-sm text-mindscape-fg/80">
          {debateState.debateLog.length === 0 ? (
            <div className="text-mindscape-fg/60">No arguments made yet.</div>
          ) : (
            debateState.debateLog.map((log, idx) => (
              <div key={idx}>
                {log.playerId && <span className="text-portal-gold">{log.playerId}: </span>}
                {log.argumentText && <span>“{log.argumentText}” </span>}
                {log.feedback && <span>({log.feedback}) </span>}
                {log.npcResponse && <span>NPC: {log.npcResponse}</span>}
              </div>
            ))
          )}
        </div>
      </div>

      <div className={`mt-6 text-center text-lg font-semibold ${isMyTurn ? 'text-emerald-300' : 'text-mindscape-fg/80'}`}>
        {isMyTurn ? 'Your Turn!' : `Waiting for ${debateState.players.find((p) => p.id === debateState.activePlayerId)?.username ?? 'opponent'}...`}
      </div>

      {isMyTurn && debateState.status === 'in-progress' && debateState.availableArguments && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-mindscape-fg">Choose Your Argument</h3>
          <div className="mt-3 grid grid-cols-1 gap-3">
            {debateState.availableArguments.map((argument, idx) => (
              <button
                key={idx}
                onClick={() => handleChooseArgument(argument)}
                className="w-full rounded-xl border border-portal-gold/25 bg-black/30 px-4 py-3 text-left text-portal-gold hover:border-portal-gold/60 hover:bg-black/40 transition"
              >
                {argument.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <Link href="/lobby" className="hover:text-portal-gold transition-colors">
          Back to Lobby
        </Link>
      </div>
    </div>
  );
}
