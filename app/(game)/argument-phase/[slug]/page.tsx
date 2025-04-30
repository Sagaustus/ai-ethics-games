// app/(game)/argument-phase/[slug]/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { useScenario } from '@/hooks/useScenario'; // To get scenario context
import { evaluateArgument, generateNpcRebuttal, ArgumentEvaluationOutcome } from '@/game/utils/argumentEvaluator'; // Import evaluation logic
import { Argument, DebateData } from '@/game/types'; // Import types

/**
 * Page for the main argument/debate phase of a scenario.
 * Manages the debate flow, displays arguments, and handles player choices.
 */
const ArgumentPhasePage: React.FC = () => {
  // Get the scenario slug from the URL parameters
  const params = useParams();
  const scenarioSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const router = useRouter();

  // Fetch scenario data (needed for debate data structure and context)
  const { scenarioData, isLoading, error } = useScenario(scenarioSlug);

  // Access and update game state
  const { player, updateScore, setGameStatus } = useGameState();

  // State for the argument phase UI and logic
  const [currentArgumentTurn, setCurrentArgumentTurn] = useState<number>(0);
  const [debateFeedback, setDebateFeedback] = useState<string | null>(null);
  const [npcResponse, setNpcResponse] = useState<string | null>(null);
  const [availableArguments, setAvailableArguments] = useState<Argument[]>([]);

  // Assuming debate data is structured within scenarioData or fetched separately
  // For now, let's assume scenarioData includes a debateData property based on original files
  const debateData: DebateData | undefined = (scenarioData as any)?.argumentData; // Type assertion for now

  useEffect(() => {
      if (debateData) {
          // Initialize available arguments for the first turn
          setAvailableArguments(debateData.playerArguments);
          // Display the initial NPC argument or setup
           setDebateFeedback(debateData.npcArgument || "The debate begins!");
      }
  }, [debateData]);


  // Handle player choosing an argument
  const handleChooseArgument = (chosenArgument: Argument) => {
    if (!player.schoolOfThought || !scenarioData || !debateData) {
      console.error("Game state or data not fully loaded for argument phase.");
      return;
    }

    // Evaluate the chosen argument
    const evaluationOutcome: ArgumentEvaluationOutcome = evaluateArgument(
      player.schoolOfThought,
      'opponent-school-slug', // Replace with actual opponent school logic if needed
      chosenArgument,
      scenarioData,
      useGameState() // Pass the current game state for evaluation
    );

    // Update game state based on evaluation outcome
    if (evaluationOutcome.scoreChanges) {
      updateScore('utilitarian', evaluationOutcome.scoreChanges.utilitarian);
      updateScore('deontological', evaluationOutcome.scoreChanges.deontological);
      updateScore('virtue', evaluationOutcome.scoreChanges.virtue);
       // Handle other state changes from evaluationOutcome
    }

    // Display feedback and NPC response
    setDebateFeedback(evaluationOutcome.feedback);
    setNpcResponse(generateNpcRebuttal(chosenArgument, debateData, scenarioData)); // Generate NPC response

    // Proceed to the next turn or end the phase
    const nextTurn = currentArgumentTurn + 1;
    // Define how many turns are in the argument phase (e.g., fixed number or based on debateData)
    const totalTurns = 3; // Example: 3 turns per argument phase

    if (nextTurn >= totalTurns) {
      // End the argument phase
      setGameStatus('game-over'); // Or 'scenario-complete-evaluation'
      router.push('/end-game'); // Navigate to the end game summary page
    } else {
      // Move to the next turn
      setCurrentArgumentTurn(nextTurn);
       // You might need to update available arguments for the next turn here
       // setAvailableArguments(getNextTurnArguments(debateData, nextTurn)); // Placeholder
    }
  };


  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading debate...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading debate: {error}</div>;
  }

  if (!scenarioData || !debateData) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
              <p className="text-xl text-gray-700">Debate data not found for this scenario.</p>
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
      <h1 className="text-4xl font-bold mb-8">{scenarioData.title} - Argument Phase</h1>

      {/* Display Opponent's Argument/Debate State */}
      <div className="mb-6 p-4 bg-blue-100 rounded-md max-w-prose text-left">
           <h2 className="text-2xl font-semibold mb-2">Opponent</h2>
           <p className="text-gray-800">{debateFeedback}</p> {/* Using feedback to display current state */}
           {npcResponse && <p className="mt-2 text-gray-700 italic">Opponent responds: {npcResponse}</p>}
      </div>


      {/* Display Player's Available Arguments */}
      <div className="flex flex-col space-y-4 w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold mb-2">Your Arguments</h2>
        {availableArguments.map((argument, index) => (
          <button
            key={index}
            onClick={() => handleChooseArgument(argument)}
            className="px-6 py-3 bg-yellow-500 text-white text-lg rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            {argument.text}
          </button>
        ))}
      </div>

       {/* Optional: Display turn number or other debate progress */}
        <div className="mt-8 text-lg text-gray-700">
             Turn: {currentArgumentTurn + 1} / {3} {/* Example total turns */}
        </div>

       {/* Optional: Link back (might not be desired during a live debate) */}
       {/* <div className="mt-8">
            <Link href={`/scenario-selection/${scenarioSlug}/meter`} className="text-blue-500 hover:underline">
                Back to Meter
            </Link>
        </div> */}
    </div>
  );
};

export default ArgumentPhasePage;