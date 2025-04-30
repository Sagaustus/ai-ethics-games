// app/(game)/scenario-selection/[slug]/page.tsx

'use client'; // This page requires client-side interactivity

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { useScenario } from '@/hooks/useScenario';
import { ScenarioChoice } from '@/game/types'; // Import ScenarioChoice type

/**
 * Main page for scenario exploration.
 * Loads scenario data, displays steps and choices, and updates game state.
 */
const ScenarioExplorationPage: React.FC = () => {
  // Get the scenario slug from the URL parameters
  const params = useParams();
  const scenarioSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const router = useRouter();

  // Fetch scenario data using our hook
  const { scenarioData, isLoading, error } = useScenario(scenarioSlug);

  // Access and update game state using our hook
  const {
    scenario: gameStateScenario, // Alias to avoid naming conflict
    nextScenarioStep,
    setGameStatus,
    updateScore // Assuming you'll update score based on exploration choices
  } = useGameState();

  // Effect to set the current scenario in global state when data is loaded
  useEffect(() => {
    if (scenarioData && gameStateScenario.currentScenarioSlug !== scenarioData.slug) {
       // We only set the current scenario here if it's different,
       // to avoid resetting step index if the user navigates back/forth
       // A more robust state management of navigation history could improve this
       // setCurrentScenario(scenarioData.slug); // This action would reset currentStepIndex
    }
  }, [scenarioData, gameStateScenario.currentScenarioSlug]); // Depend on fetched data and global state

  // Logic to determine the current step to display
  const currentStep = scenarioData?.exploration[gameStateScenario.currentStepIndex];

  // Handle choice selection
  const handleChoice = (choice: ScenarioChoice) => {
    // Optional: Update score based on the choice's effects
    if (choice.effects) {
        // Example: updateScore('utilitarian', choice.effects.utilitarianPoints || 0);
        // updateScore('deontological', choice.effects.deontologicalPoints || 0);
        // updateScore('virtue', choice.effects.virtuePoints || 0);
        // You'll need to implement the actual score update logic based on choice effects
         console.log("Applying choice effects:", choice.effects); // Placeholder
         // Call updateScore from useGameState as needed
         if(choice.effects.utilitarianPoints) updateScore('utilitarian', choice.effects.utilitarianPoints);
         if(choice.effects.deontologicalPoints) updateScore('deontological', choice.effects.deontologicalPoints);
         if(choice.effects.virtuePoints) updateScore('virtue', choice.effects.virtuePoints);
         // Handle other effects (e.g., flags) by dispatching actions to the game store
    }

    // Proceed to the next step in the scenario
    nextScenarioStep(choice.outcome); // Pass the outcome to record the decision

    // Optional: Check if this choice leads to a specific outcome or phase transition
    // This logic would depend on how your scenario data structures indicate transitions
     if (choice.outcome === 'end_exploration' || !scenarioData?.exploration[gameStateScenario.currentStepIndex + 1]) {
         // Example transition: if the outcome is 'end_exploration' or there are no more steps
         setGameStatus('in-game-argument'); // Update game status to argument phase
         router.push(`/argument-phase/${scenarioSlug}`); // Navigate to the argument phase for this scenario
     }
     // Add other transition logic here (e.g., to a specific outcome page if needed)
  };

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading scenario...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading scenario: {error}</div>;
  }

  if (!scenarioData) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
              <p className="text-xl text-gray-700">Scenario not found.</p>
               <div className="mt-8">
                  <Link href="/scenario-selection" className="text-blue-500 hover:underline">
                      Back to Scenario Selection
                  </Link>
              </div>
          </div>
      );
  }

  // Render the current step of the exploration
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">{scenarioData.title}</h1>

      {/* Display scenario introduction or current step text */}
      <div className="mb-6 text-lg text-gray-800 max-w-prose">
        {/* Display introduction on the first step, otherwise display current step text */}
        {gameStateScenario.currentStepIndex === 0 && scenarioData.introduction}
        {gameStateScenario.currentStepIndex > 0 && currentStep?.text}
         {/* Handle case where currentStep is undefined if scenarioProgress is out of sync */}
         {!currentStep && gameStateScenario.currentStepIndex > 0 && (
             <p className="text-red-500">Error: Could not find scenario step {gameStateScenario.currentStepIndex}</p>
         )}
      </div>

      {/* Display choices for the current step */}
      {currentStep?.choices && (
        <div className="flex flex-col space-y-4 w-full max-w-md">
          {currentStep.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="px-6 py-3 bg-green-500 text-white text-lg rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

       {/* Optional: Back button */}
       <div className="mt-8">
            <Link href="/scenario-selection" className="text-blue-500 hover:underline">
                Back to Scenario Selection
            </Link>
        </div>

        {/* Optional: Display current score or other game state relevant to exploration */}
        {/* <div className="mt-8 text-lg">
             Current Utilitarian Score: {useGameState().player.scores.utilitarian}
        </div> */}
    </div>
  );
};

export default ScenarioExplorationPage;