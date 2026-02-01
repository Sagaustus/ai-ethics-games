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
    return <div className="text-center text-xl text-mindscape-fg/80">Loading scenario...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading scenario: {error}</div>;
  }

  if (!scenarioData) {
      return (
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
          <p className="text-xl text-mindscape-fg/80">Scenario not found.</p>
          <div className="mt-8">
            <Link href="/scenario-selection" className="hover:text-portal-gold transition-colors">
              Back to Scenario Selection
            </Link>
          </div>
        </div>
      );
  }

  // Render the current step of the exploration
  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">{scenarioData.title}</h1>
        <p className="mt-3 text-mindscape-fg/80">Explore the dilemma, then move into debate.</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6 text-left">
        <div className="text-mindscape-fg/90 leading-relaxed">
          {gameStateScenario.currentStepIndex === 0 ? scenarioData.introduction : currentStep?.text}
        </div>
        {!currentStep && gameStateScenario.currentStepIndex > 0 && (
          <p className="mt-4 text-red-300">Error: Could not find scenario step {gameStateScenario.currentStepIndex}</p>
        )}
      </div>

      {currentStep?.choices && (
        <div className="mt-6 flex flex-col space-y-3 w-full">
          {currentStep.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="w-full rounded-xl border border-portal-gold/25 bg-black/30 px-4 py-3 text-left text-portal-gold hover:border-portal-gold/60 hover:bg-black/40 transition"
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link href="/scenario-selection" className="hover:text-portal-gold transition-colors">
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