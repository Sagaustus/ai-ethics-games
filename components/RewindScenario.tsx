// components/RewindScenario.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RewindScenarioProps {
  onSelect: (philosopher: string) => void;
}

export default function RewindScenario({ onSelect }: RewindScenarioProps) {
  const [time, setTime] = useState(0);

  const philosophers = ['Mill', 'Kant', 'Random'];

  return (
    <div className="bg-debate-panel p-8 rounded-2xl max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">Rewind Scenario</h2>

      {/* Timeline slider */}
      <div className="flex flex-col items-center space-y-2">
        <input
          type="range"
          min={0}
          max={100}
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-mindscape-fg">
          {time}% through the scenario
        </span>
      </div>

      {/* Replay buttons */}
      <div className="grid grid-cols-3 gap-4">
        {philosophers.map((name) => (
          <motion.button
            key={name}
            onClick={() => onSelect(name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 bg-portal-gold text-mindscape-bg rounded-lg font-semibold"
          >
            Replay as {name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
