// components/CodexBrowser.tsx
'use client';

import { useState } from 'react';
import { codexEntries, CodexEntry } from '@/data/codex';

export default function CodexBrowser() {
  const [filter, setFilter] = useState<'All' | 'Recent'>('All');

  const entriesToShow = codexEntries.filter((e) =>
    filter === 'Recent' ? e.lastUsed !== '' : true
  );

  return (
    <div className="bg-debate-panel p-8 rounded-2xl max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Ethical Codex</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="bg-mindscape-bg border border-gray-600 text-mindscape-fg rounded-lg px-3 py-1"
        >
          <option>All</option>
          <option>Recent</option>
        </select>
      </div>
      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
        {entriesToShow.map((entry: CodexEntry) => (
          <div
            key={entry.id}
            className="p-4 bg-mindscape-bg/50 rounded-lg border-l-4 border-portal-gold"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{entry.title}</h3>
              <span className="text-sm text-mindscape-fg/70">{entry.lastUsed}</span>
            </div>
            <p className="text-mindscape-fg/90">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
