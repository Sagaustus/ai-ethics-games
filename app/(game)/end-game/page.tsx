// app/(game)/end-game/page.tsx

'use client'; // This page requires client-side interactivity

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { calculateTotalScore, determineDominantAlignment, generateScoreDebrief } from '@/game/utils/scoringLogic'; // Import scoring utilities
// import { useScenario } from '@/hooks/useScenario'; // Optional: to display scenario-specific results

/**
 * Page to display the end game or scenario results summary.
 * Shows player scores and options to continue or restart.
 */
const EndGamePage: React.FC = () => {
  const { player, scenario, resetGame } = useGameState(); // Access player scores and reset action
  const router = useRouter();

  // Calculate total score and determine dominant alignment
  const totalScore = calculateTotalScore(player.scores);
  const dominantAlignment = determineDominantAlignment(player.scores);
  const debrief = generateScoreDebrief(player.scores);

   // You could fetch the completed scenario data here if needed for a detailed summary
   // const { scenarioData } = useScenario(scenario.currentScenarioSlug);

  const handlePlayAgain = () => {
    resetGame(); // Reset game state
    router.push('/'); // Navigate back to the start page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Scenario Complete!</h1>
      {/* Optional: Display scenario title if fetched */}
      {/* {scenarioData && <h2 className="text-2xl font-semibold mb-4">{scenarioData.title} Results</h2>} */}

      <div className="mb-8 text-lg text-gray-800">
        <p>Here is a summary of your performance:</p>
      </div>

      {/* Display final scores */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Final Scores</h2>
        <div className="text-left text-gray-700 space-y-2">
          <p><strong>Utilitarian:</strong> {player.scores.utilitarian}</p>
          <p><strong>Deontological:</strong> {player.scores.deontological}</p>
          <p><strong>Virtue:</strong> {player.scores.virtue}</p>
          <p className="text-xl font-bold mt-4">Total Score: {totalScore}</p>
          <p className="text-xl font-bold">Dominant Alignment: {dominantAlignment.charAt(0).toUpperCase() + dominantAlignment.slice(1)}</p>
          {/* Add other relevant scores or metrics */}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mb-8 text-left">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">{debrief.headline}</h2>
        <p className="text-gray-700 mb-4">{debrief.summary}</p>
        {debrief.suggestions.length > 0 && (
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {debrief.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Optional: Display feedback based on dominant alignment or total score */}
      {/* <div className="mb-8 text-lg text-gray-800">
          {dominantAlignment === 'utilitarian' && <p>Your choices strongly aligned with Utilitarian principles.</p>}
          {dominantAlignment === 'deontological' && <p>You consistently adhered to Deontological duties.</p>}
          {dominantAlignment === 'virtue' && <p>Your actions reflected a focus on Virtue Ethics.</p>}
          {dominantAlignment === 'neutral' && <p>Your choices showed a balance across different ethical frameworks.</p>}
      </div> */}

       {/* Options to continue */}
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <button
          onClick={handlePlayAgain}
          className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          Play Again
        </button>
        {/* Optional links to other pages */}
        <Link href="/scenario-selection" passHref>
          <button className="px-8 py-4 bg-blue-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 w-full">
            Try Another Scenario
          </button>
        </Link>
        <Link href="/ranking" passHref>
           <button className="px-8 py-4 bg-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300 w-full">
             View Rankings
           </button>
        </Link>
         {/* Add links to Codex, Achievements, etc. */}
      </div>
    </div>
  );
};

export default EndGamePage;