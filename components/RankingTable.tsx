// components/RankingTable.tsx
import React from 'react';

export interface RankingRecord {
  name: string;
  philosopher: string;
  score: number;
  wins: number;
  alignment: string;
}

interface RankingTableProps {
  rankings: RankingRecord[];
}

export default function RankingTable({ rankings }: RankingTableProps) {
  return (
    <div className="bg-debate-panel p-6 rounded-2xl overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Top Debaters</h2>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="px-4 py-2">Player</th>
            <th className="px-4 py-2">Philosopher</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Wins</th>
            <th className="px-4 py-2">Alignment</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((r, idx) => (
            <tr
              key={r.name}
              className={idx % 2 === 0 ? 'bg-mindscape-bg/50' : ''}
            >
              <td className="px-4 py-3">{r.name}</td>
              <td className="px-4 py-3">{r.philosopher}</td>
              <td className="px-4 py-3">{r.score}</td>
              <td className="px-4 py-3">{r.wins}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 bg-mindscape-fg/10 text-mindscape-fg rounded-full text-sm">
                  {r.alignment}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
