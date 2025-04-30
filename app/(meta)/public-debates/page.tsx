// app/(meta)/public-debates/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useGameState } from '@/hooks/useGameState'; // Optional: for user context

// Define a type for a public debate summary (adjust based on your backend data structure)
interface PublicDebateSummary {
  id: string; // Unique ID for the debate
  scenarioSlug: string; // The scenario debated
  playerNames: string[]; // Names or IDs of participants
  outcome?: string; // e.g., "Player A Wins", "Draw" (if applicable)
  status: 'completed' | 'ongoing'; // Debate status
  viewers?: number; // Optional: number of live viewers if ongoing
  // Add other relevant summary info (e.g., date, key schools involved)
}

/**
 * Page to view a list of public multiplayer debates.
 * Fetches public debate summaries from the API.
 */
const PublicDebatesPage: React.FC = () => {
  const [publicDebates, setPublicDebates] = useState<PublicDebateSummary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublicDebates = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Assuming an API endpoint that returns a list of public debates
        // This API route will query your Supabase database for public debates
        const response = await fetch('/api/multiplayer/public-debates'); // We will create this API route later

        if (!response.ok) {
          throw new Error(`Failed to fetch public debates: ${response.statusText}`);
        }

        const data: PublicDebateSummary[] = await response.json();
        setPublicDebates(data);
      } catch (err: any) {
        console.error("Error fetching public debates:", err);
        setError(err.message || "An error occurred while fetching public debates.");
        setPublicDebates([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublicDebates();
  }, []); // Effect runs once on mount to fetch data


  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading public debates...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading public debates: {error}</div>;
  }

   if (publicDebates.length === 0 && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <p className="text-xl text-gray-700">No public debates available to view yet.</p>
                 <div className="mt-8">
                    <Link href="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }


  return (
    <div className="flex flex-col items-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Public Debates</h1>

      <div className="mb-8 text-lg text-gray-800">
        <p>Watch or review debates from other players.</p>
      </div>

      {/* Display List of Public Debates */}
      <div className="w-full max-w-2xl">
        <ul className="space-y-4 text-left">
          {publicDebates.map((debate) => (
            <li key={debate.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
               <div>
                   <h3 className="text-xl font-semibold text-gray-800">Scenario: {debate.scenarioSlug}</h3> {/* Display slug for now */}
                   <p className="text-sm text-gray-600">Players: {debate.playerNames.join(' vs ')}</p>
                    {debate.outcome && <p className="text-sm text-gray-600">Outcome: {debate.outcome}</p>}
               </div>
                <div className="text-right">
                     <span className={`px-2 py-1 text-sm font-semibold rounded ${debate.status === 'completed' ? 'bg-gray-200 text-gray-800' : 'bg-green-500 text-white'}`}>
                        {debate.status === 'completed' ? 'Completed' : `Live (${debate.viewers || 0})`}
                    </span>
                    {/* Link to view the debate details or replay */}
                    <div className="mt-2">
                        <Link href={`/public-debates/${debate.id}`} className="text-blue-500 hover:underline text-sm">
                            View Debate
                        </Link>
                    </div>
                </div>
            </li>
          ))}
        </ul>
      </div>


       {/* Back to home link */}
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default PublicDebatesPage;