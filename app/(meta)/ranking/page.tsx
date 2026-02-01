// app/(meta)/ranking/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useGameState } from '@/hooks/useGameState'; // Optional: to highlight current player's rank

// Define a type for a ranking entry (adjust based on your backend data structure)
interface RankingEntry {
  playerId: string; // Or username
  totalScore: number;
  utilitarianScore: number;
  deontologicalScore: number;
  virtueScore: number;
  // Add other relevant ranking metrics
}

/**
 * Page to display player rankings/leaderboard.
 * Fetches ranking data from the API.
 */
const RankingPage: React.FC = () => {
  const [rankingData, setRankingData] = useState<RankingEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Assuming an API endpoint that returns ranking data (e.g., sorted by total score)
        // This API route will query your Supabase database
        const response = await fetch('/api/game/ranking'); // We will create this API route later

        if (!response.ok) {
          throw new Error(`Failed to fetch ranking data: ${response.statusText}`);
        }

        const data: RankingEntry[] = await response.json();
        setRankingData(data);
      } catch (err: any) {
        console.error("Error fetching ranking data:", err);
        setError(err.message || "An error occurred while fetching ranking data.");
        setRankingData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, []); // Effect runs once on mount to fetch ranking data


  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading rankings...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading rankings: {error}</div>;
  }

   if (rankingData.length === 0 && !isLoading) {
        return (
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
              <p className="text-xl text-mindscape-fg/80">No ranking data available yet. Play some scenarios to get ranked!</p>
              <div className="mt-8">
                <Link href="/" className="hover:text-portal-gold transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
        );
    }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Player Rankings</h1>
        <p className="mt-3 text-mindscape-fg/80">See how you compare across ethical alignments.</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-5 text-left text-mindscape-fg/90">
        <p>See how you compare to other players based on your ethical scores.</p>
      </div>

      {/* Display Ranking Data (using a simple list for now, can use a table component) */}
      <div className="mt-8 w-full">
        {/* Optional: Table Header */}
        {/* <div className="grid grid-cols-4 gap-4 font-bold border-b-2 pb-2 mb-4">
            <div>Rank</div>
            <div>Player</div>
            <div>Total Score</div>
            <div>Dominant Alignment</div> // If you calculate/store this on backend
        </div> */}
        <ul className="space-y-3 text-left">
          {rankingData.map((entry, index) => (
          <li key={entry.playerId} className="rounded-xl bg-debate-panel/60 border border-white/10 p-4 flex justify-between items-center">
               {/* Basic list item, replace with more detailed table row */}
                <div>
              <span className="font-bold text-lg mr-3 text-portal-gold">#{index + 1}</span>
              <span className="text-mindscape-fg text-lg">{entry.playerId}</span> {/* Use Player ID/Username */}
                </div>
                <div className="text-right">
              <span className="font-semibold text-mindscape-fg">Score: {entry.totalScore}</span>
                    {/* Optional: Display dominant alignment if available */}
                    {/* <p className="text-sm text-gray-600">Alignment: {entry.dominantAlignment}</p> */}
                </div>
              {/* More detailed display could show breakdown of scores */}
              {/* <div className="grid grid-cols-4 gap-4 items-center">
                  <div>{index + 1}</div>
                  <div>{entry.playerId}</div>
                  <div>{entry.totalScore}</div>
                  <div>{entry.dominantAlignment}</div>
              </div> */}
            </li>
          ))}
        </ul>
      </div>


       {/* Back to home link */}
      <div className="mt-10 text-center">
        <Link href="/" className="hover:text-portal-gold transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RankingPage;
