// app/(game)/scenario-selection/[slug]/meter/page.tsx

'use client'; // This page requires client-side interactivity

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { useScenario } from '@/hooks/useScenario'; // To get scenario title/context

/**
 * Page to display the player's alignment or meters within a scenario.
 * Shows current ethical scores and provides navigation to the next phase.
 */
const ScenarioMeterPage: React.FC = () => {
  // Get the scenario slug from the URL parameters
  const params = useParams();
  const scenarioSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const router = useRouter();

  // Fetch scenario data (mostly for context like the title)
  const { scenarioData, isLoading, error } = useScenario(scenarioSlug);

  // Access player scores from game state
  const { player, setGameStatus } = useGameState();

  const handleContinue = () => {
    // Assuming that after the meter page, the player moves to the argument phase
    setGameStatus('in-game-argument'); // Update game status
    router.push(`/argument-phase/${scenarioSlug}`); // Navigate to the argument phase
  };

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading meter data...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading scenario context: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">
        {scenarioData?.title ? `${scenarioData.title} - Your Ethical Alignment` : 'Your Ethical Alignment'}
      </h1>

      <div className="mb-8 text-lg text-gray-800">
        <p>Review how your choices have influenced your ethical standing in this scenario.</p>
      </div>

      {/* Display player scores as a simple meter representation */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Current Scores</h2>
        <div className="text-left text-gray-700 space-y-2">
          <p><strong>Utilitarian:</strong> {player.scores.utilitarian}</p>
          <p><strong>Deontological:</strong> {player.scores.deontological}</p>
          <p><strong>Virtue:</strong> {player.scores.virtue}</p>
          {/* Add other relevant meters/scores here */}
        </div>
      </div>

      {/* Button to continue to the next phase */}
      <button
        onClick={handleContinue}
        className="mt-8 px-8 py-4 bg-purple-600 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
      >
        Proceed to Argument Phase
      </button>

       {/* Optional: Back button */}
       <div className="mt-8">
            <Link href={`/scenario-selection/${scenarioSlug}`} className="text-blue-500 hover:underline">
                Back to Scenario
            </Link>
        </div>
    </div>
  );
};

export default ScenarioMeterPage;