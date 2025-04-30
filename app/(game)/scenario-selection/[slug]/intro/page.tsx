// app/(game)/scenario-selection/[slug]/intro/page.tsx

'use client'; // This page requires client-side interactivity

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useScenario } from '@/hooks/useScenario';
import { useGameState } from '@/hooks/useGameState'; // Assuming we might set game status here

/**
 * Page to display the introduction for a specific scenario.
 */
const ScenarioIntroPage: React.FC = () => {
  // Get the scenario slug from the URL parameters
  const params = useParams();
  const scenarioSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const router = useRouter();

  // Fetch scenario data using our hook
  const { scenarioData, isLoading, error } = useScenario(scenarioSlug);
  const { setGameStatus } = useGameState(); // Action to set game status

   useEffect(() => {
        // Optional: Set game status when entering the intro page
        // setGameStatus('in-game-introduction');
   }, []);


  const handleStartExploration = () => {
    // Optional: Set game status when starting exploration
    // setGameStatus('in-game-exploration');
    router.push(`/scenario-selection/${scenarioSlug}`); // Navigate to the main scenario exploration page
  };

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading scenario introduction...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading introduction: {error}</div>;
  }

  if (!scenarioData) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
              <p className="text-xl text-gray-700">Scenario introduction not found.</p>
               <div className="mt-8">
                  <Link href="/scenario-selection" className="text-blue-500 hover:underline">
                      Back to Scenario Selection
                  </Link>
              </div>
          </div>
      );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">{scenarioData.title}</h1>

      {/* Display the scenario introduction text */}
      <div className="mb-6 text-lg text-gray-800 max-w-prose">
        {scenarioData.introduction}
      </div>

      {/* Button to start the exploration phase */}
      <button
        onClick={handleStartExploration}
        className="px-8 py-4 bg-green-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        Start Exploration
      </button>

       {/* Optional: Back button */}
       <div className="mt-8">
            <Link href="/scenario-selection" className="text-blue-500 hover:underline">
                Back to Scenario Selection
            </Link>
        </div>
    </div>
  );
};

export default ScenarioIntroPage;