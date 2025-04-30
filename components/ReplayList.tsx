// components/ReplayList.tsx
import React from 'react';

interface Replay {
  id: string;
  title: string;
  duration: string;
  players: string;
}

interface ReplayListProps {
  replays: Replay[];
}

export default function ReplayList({ replays }: ReplayListProps) {
  return (
    <div className="bg-debate-panel p-6 rounded-2xl max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-4">Saved Debates</h2>
      {replays.map((r) => (
        <div
          key={r.id}
          className="flex justify-between items-center p-3 bg-mindscape-bg/30 rounded-lg"
        >
          <div>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm text-mindscape-fg/70">{r.players} • {r.duration}</p>
          </div>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-portal-gold text-mindscape-bg rounded-md text-sm">
              Watch
            </button>
            <button className="px-3 py-1 bg-gray-600 text-mindscape-fg rounded-md text-sm">
              Upvote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
