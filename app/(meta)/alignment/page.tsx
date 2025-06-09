// app/(meta)/alignment/page.tsx

'use client'; // This page requires client-side interactivity

import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState'; // Access player scores
import { determineDominantAlignment } from '@/game/utils/scoringLogic'; // Import utility

/**
 * Page to explain the ethical alignments and show the player's current alignment scores.
 */
const AlignmentPage: React.FC = () => {
  // Access player scores from game state
  const { player } = useGameState();

  // Determine dominant alignment
  const dominantAlignment = determineDominantAlignment(player.scores);

  // Hardcoded explanations for now. Could fetch from API or data files.
  const alignmentExplanations = {
    utilitarian: {
      name: 'Utilitarianism',
      description: 'Focuses on the outcome or consequences of an action. The most ethical choice is the one that maximizes overall happiness or minimizes suffering for the greatest number of people.',
    },
    deontological: {
      name: 'Deontology',
      description: 'Based on duties, rules, and obligations. The morality of an action is determined by whether it adheres to a set of rules, regardless of the outcome.',
    },
    virtue: {
      name: 'Virtue Ethics',
      description: 'Emphasizes the character of the moral agent rather than rules or consequences. It focuses on cultivating good habits and character traits.',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Your Ethical Alignment</h1>

      <div className="mb-8 text-lg text-gray-800 max-w-prose">
        <p>Your choices throughout the game influence your alignment with different ethical schools of thought.</p>
      </div>

       {/* Display current scores */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Current Alignment Scores</h2>
        <div className="text-left text-gray-700 space-y-2">
          <p><strong>Utilitarian:</strong> {player.scores.utilitarian}</p>
          <p><strong>Deontological:</strong> {player.scores.deontological}</p>
          <p><strong>Virtue:</strong> {player.scores.virtue}</p>
           <p className="text-xl font-bold mt-4">Dominant Alignment: {dominantAlignment.charAt(0).toUpperCase() + dominantAlignment.slice(1)}</p>
        </div>
      </div>

      {/* Display explanations of alignments */}
      <div className="w-full max-w-2xl space-y-6 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-center">Understanding the Alignments</h2>
        {Object.entries(alignmentExplanations).map(([key, alignment]) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{alignment.name}</h3>
            <p className="text-gray-700">{alignment.description}</p>
          </div>
        ))}
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

export default AlignmentPage;
