// app/ranking/page.tsx
import RankingTable, { RankingRecord } from '@/components/RankingTable';

export const metadata = {
  title: 'Rankings • Mindscape',
};

export default function RankingPage() {
  // Sample data; replace with real API or state
  const sampleRankings: RankingRecord[] = [
    { name: 'Alice',   philosopher: 'Aristotle', score: 950, wins: 12, alignment: 'Virtue-Seeker' },
    { name: 'Bob',     philosopher: 'Mill',      score: 890, wins: 10, alignment: 'Outcome-Focused' },
    { name: 'Carol',   philosopher: 'Kant',      score: 860, wins: 9,  alignment: 'Deontic Neutral' },
    { name: 'Dave',    philosopher: 'Random',    score: 820, wins: 8,  alignment: 'Pragmatist' },
    { name: 'Evelyn',  philosopher: 'Kant',      score: 780, wins: 7,  alignment: 'Absolutist' },
  ];

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <RankingTable rankings={sampleRankings} />
    </div>
  );
}
