// app/(meta)/rewind/page.tsx

'use client'; // This page requires client-side interactivity

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState'; // Access player's scenario progress
import { ScenarioProgress, Scenario } from '@/game/types'; // Import types
// import { useScenario } from '@/hooks/useScenario'; // Optional: to fetch scenario details for context

/**
 * Page to review past scenario playthroughs and decisions.
 * Displays a list of played scenarios and the choices made in each.
 */
const RewindPage: React.FC = () => {
  // Access player's scenario progress from game state
  const { player } = useGameState();
  const scenarioProgress = player.scenarioProgress || {};

  const [selectedScenarioSlug, setSelectedScenarioSlug] = useState<string | null>(null);
  const [selectedScenarioData, setSelectedScenarioData] = useState<Scenario | null>(null); // To show step context
  const [isLoadingScenario, setIsLoadingScenario] = useState<boolean>(false);
  const [errorLoadingScenario, setErrorLoadingScenario] = useState<string | null>(null);


   // Effect to fetch selected scenario data for displaying decision context
   useEffect(() => {
       const fetchScenarioDetails = async () => {
            if (!selectedScenarioSlug) {
                setSelectedScenarioData(null);
                return;
            }
            setIsLoadingScenario(true);
            setErrorLoadingScenario(null);
            try {
                // Reuse the useScenario hook's fetching logic or call the API directly
                 const response = await fetch(`/api/game/scenarios?slug=${selectedScenarioSlug}`);
                 if (!response.ok) throw new Error('Failed to fetch scenario details');
                 const data: Scenario = await response.json();
                 setSelectedScenarioData(data);
            } catch (err: any) {
                 console.error("Error fetching scenario details:", err);
                 setErrorLoadingScenario(err.message || "Failed to load scenario details.");
                 setSelectedScenarioData(null);
            } finally {
                 setIsLoadingScenario(false);
            }
       };

       fetchScenarioDetails();

   }, [selectedScenarioSlug]); // Refetch details if selected scenario changes


  const handleSelectScenarioToReview = (slug: string) => {
    setSelectedScenarioSlug(slug);
  };

  // Get the decisions for the selected scenario
  const decisionsToDisplay = selectedScenarioSlug ? scenarioProgress[selectedScenarioSlug]?.decisions : [];

  return (
    <div className="flex flex-col items-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Rewind Your Choices</h1>

      <div className="mb-8 text-lg text-gray-800">
        <p>Review the scenarios you've played and the decisions you made.</p>
      </div>

      {/* List of played scenarios */}
      <div className="w-full max-w-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Played Scenarios</h2>
        {Object.keys(scenarioProgress).length === 0 ? (
          <p className="text-gray-600">No scenarios played yet.</p>
        ) : (
          <ul className="space-y-4">
            {Object.keys(scenarioProgress).map((slug) => (
              <li key={slug} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectScenarioToReview(slug)}>
                <span className="text-xl font-semibold text-gray-800">{slug}</span> {/* Display slug for now, fetch title if needed */}
                 {scenarioProgress[slug]?.completed && <span className="text-sm text-green-600">Completed</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display decisions for the selected scenario */}
      {selectedScenarioSlug && (
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Decisions in {selectedScenarioSlug}</h2>
           {isLoadingScenario ? (
               <div className="text-center text-gray-700">Loading scenario details...</div>
           ) : errorLoadingScenario ? (
                <div className="text-center text-red-500">Error: {errorLoadingScenario}</div>
           ) : decisionsToDisplay && decisionsToDisplay.length > 0 ? (
            <ul className="space-y-4 text-left">
              {decisionsToDisplay.map((decision, index) => (
                <li key={index} className="bg-white rounded-lg shadow-md p-4 text-gray-800">
                  <p className="font-semibold">Step {decision.stepIndex + 1}:</p>
                   {/* Display context for the step and choice if scenario data is loaded */}
                    {selectedScenarioData && selectedScenarioData.exploration[decision.stepIndex] && (
                        <p className="text-sm italic text-gray-600">
                             Dilemma: {selectedScenarioData.exploration[decision.stepIndex]?.text.substring(0, 100)}... {/* Show snippet */}
                        </p>
                    )}
                  <p>Chose Outcome: <span className="font-mono text-blue-700">{decision.choiceOutcome}</span></p>
                   {/* You could try to find the choice text based on outcome and stepIndex from selectedScenarioData */}
                   {/* {selectedScenarioData && selectedScenarioData.exploration[decision.stepIndex]?.choices.find(c => c.outcome === decision.choiceOutcome)?.text && (
                       <p className="text-sm">Choice: "{selectedScenarioData.exploration[decision.stepIndex]?.choices.find(c => c.outcome === decision.choiceOutcome)?.text}"</p>
                   )} */}
                </li>
              ))}
            </ul>
          ) : (
              <p className="text-gray-600">No decisions recorded for this scenario.</p>
          )}
        </div>
      )}


       {/* Back to home link */}
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default RewindPage;