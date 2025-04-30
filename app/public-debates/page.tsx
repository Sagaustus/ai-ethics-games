// app/public-debates/page.tsx
import PublicDebateList, { PublicDebate } from '@/components/PublicDebateList';

export const metadata = {
  title: 'Public Debates • Mindscape',
};

export default function PublicDebatesPage() {
  const debates: PublicDebate[] = [
    {
      id: '1',
      title: 'AI in Policing – Mill vs. Kant (2 min replay)',
      avatar: '/img/ai-policing-avatar.png',
      replayTime: '2 min replay',
    },
    {
      id: '2',
      title: 'Orbital Research Lab – Aristotle vs. Mill (3 min)',
      avatar: '/img/orbital-lab-avatar.png',
      replayTime: '3 min replay',
    },
    // …add more entries
  ];

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <PublicDebateList debates={debates} />
    </div>
  );
}
