// app/daily-challenge/page.tsx
'use client';

import DailyDilemma from '@/components/DailyDilemma';

export const metadata = {
  title: 'Daily Dilemma • Mindscape',
  description: 'Your daily mini ethical challenge.',
};

export default function DailyChallengePage() {
  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <DailyDilemma />
    </div>
  );
}
