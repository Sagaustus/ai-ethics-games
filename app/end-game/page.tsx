// app/end-game/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import ScoreDashboard from '@/components/ScoreDashboard';
import AchievementModal from '@/components/AchievementModal';
import ReplayList from '@/components/ReplayList';
import LevelUpOverlay from '@/components/LevelUpOverlay';

export const metadata = {
  title: 'Game Over • Mindscape',
  description: 'Your final results and rewards.',
};

export default function EndGamePage() {
  const { avatar, school, scenario } = useGame();

  // Example final scores—replace with your real scoring logic
  const [scores] = useState({ consistency: 85, persuasion: 72, clarity: 90 });

  // Control modals
  const [achOpen, setAchOpen] = useState(true);
  const [levelUpOpen, setLevelUpOpen] = useState(false);

  // Sample replay list
  const sampleReplays = [
    {
      id: 'r1',
      title: `${scenario} – ${school} vs. AI`,
      duration: '2m 30s',
      players: `You (${school}) vs. AI`,
    },
  ];

  // After closing achievement, open level-up
  useEffect(() => {
    if (!achOpen) {
      const timer = setTimeout(() => setLevelUpOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, [achOpen]);

  return (
    <div className="min-h-screen bg-mindscape-bg flex flex-col items-center py-12 px-4 space-y-12">
      {/* Show player avatar and role */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src={avatar}
          alt="Your Avatar"
          className="w-24 h-24 rounded-full border-4 border-portal-gold"
        />
        <h2 className="text-xl text-mindscape-fg">
          School of Thought: <span className="font-semibold">{school}</span>
        </h2>
        <h3 className="text-lg text-mindscape-fg/80">
          Scenario: <span className="font-medium">{scenario}</span>
        </h3>
      </div>

      {/* Score bars */}
      <ScoreDashboard
        consistency={scores.consistency}
        persuasion={scores.persuasion}
        clarity={scores.clarity}
      />

      {/* Achievement unlocked */}
      <AchievementModal
        open={achOpen}
        title="Virtue Vanguard – 5 Wins as Aristotle"
        description="You’ve reached Philosopher Rank IV!"
        onClose={() => setAchOpen(false)}
      />

      {/* Replays */}
      <ReplayList replays={sampleReplays} />

      {/* Return to portal */}
      <button
        onClick={() => (window.location.href = '/')}
        className="px-8 py-4 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
      >
        Return to Portal
      </button>

      {/* Level-Up moment */}
      <LevelUpOverlay
        open={levelUpOpen}
        newRank="Philosopher Rank IV"
        avatarSrc={avatar}
        onClose={() => setLevelUpOpen(false)}
      />
    </div>
  );
}
