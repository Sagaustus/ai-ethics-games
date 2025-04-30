// components/ScoreDashboard.tsx
import React from 'react';

interface ScoreDashboardProps {
  consistency: number;    // 0–100
  persuasion: number;     // 0–100
  clarity: number;        // 0–100
}

export default function ScoreDashboard({
  consistency,
  persuasion,
  clarity,
}: ScoreDashboardProps) {
  const bar = (label: string, value: number, colorClass: string) => (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className={`${colorClass} h-4 rounded-full transition-all duration-800`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-debate-panel p-6 rounded-2xl max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">Your Performance</h2>
      {bar('Ethical Consistency', consistency, 'bg-portal-gold')}
      {bar('Persuasive Impact', persuasion, 'bg-green-500')}
      {bar('Logical Clarity', clarity, 'bg-blue-400')}
    </div>
  );
}
