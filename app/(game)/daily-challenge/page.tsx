// app/(game)/daily-challenge/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState'; // Use to access/update player state or score
import { Scenario, ScenarioChoice, ExplorationStep } from '@/game/types'; // Reuse scenario types

// Define a type for the daily challenge data if it's different from a regular scenario,
// or just reuse the Scenario type if the daily challenge is structured like one.
// For now, we'll assume the API returns an ExplorationStep or similar structure.
interface DailyChallengeData extends ExplorationStep {
    challengeId: string; // Unique ID for the daily challenge
    title: string; // Title of the daily challenge
    // Add other daily challenge specific data
}


/**
 * Page for the daily ethical challenge.
 * Fetches a challenge for the current day and allows player interaction.
 */
const DailyChallengePage: React.FC = () => {
  const [dailyChallenge, setDailyChallenge] = useState<DailyChallengeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false); // State to track if the challenge is completed

  const { player, updateScore } = useGameState(); // Access state and actions

  useEffect(() => {
    const fetchDailyChallenge = async () => {
      setIsLoading(true);
      setError(null);
      setIsCompleted(false); // Reset completion status

      try {
        // Assuming an API endpoint that provides the daily challenge based on the current date and user (optional)
        // We will need to create this API route later (e.g., /api/game/daily-challenge)
        const response = await fetch('/api/game/daily-challenge');

        if (!response.ok) {
          throw new Error(`Failed to fetch daily challenge: ${response.statusText}`);
        }

        const data: DailyChallengeData = await response.json();
        setDailyChallenge(data);
         // Optional: Check if the user has already completed this challenge today
        // const userProgress = await checkDailyChallengeCompletion(player.id, data.challengeId); // Placeholder
        // setIsCompleted(userProgress.completed);
      } catch (err: any) {
        console.error("Error fetching daily challenge:", err);
        setError(err.message || "An error occurred while fetching the daily challenge.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDailyChallenge();
  }, []); // Effect runs once on mount to fetch the daily challenge

  const handleChoice = (choice: ScenarioChoice) => {
      if (isCompleted) {
          console.log("Daily challenge already completed today.");
          return; // Prevent multiple submissions
      }

      // Process the choice outcome - this is specific to the daily challenge logic
      console.log("Daily challenge choice made:", choice.text, "Outcome:", choice.outcome);

      // Example: Update score based on the choice's effects (if daily challenge affects main score)
      if (choice.effects) {
           if(choice.effects.utilitarianPoints) updateScore('utilitarian', choice.effects.utilitarianPoints);
           if(choice.effects.deontologicalPoints) updateScore('deontological', choice.effects.deontologicalPoints);
           if(choice.effects.virtuePoints) updateScore('virtue', choice.effects.virtuePoints);
           // Handle other daily challenge specific effects
      }

      // Mark the daily challenge as completed for the user
      // await markDailyChallengeCompleted(player.id, dailyChallenge.challengeId, choice.outcome, scoreChanges); // Placeholder for API call
      setIsCompleted(true);

      // Provide feedback to the user based on the choice
      setDebateFeedback(`You chose: "${choice.text}". Outcome: ${choice.outcome}.`); // Using debateFeedback state for simplicity

      // Optional: Transition to a results summary or just stay on the page
      // router.push('/daily-challenge/results'); // Example navigation
  };

   // Using debateFeedback state for displaying challenge text and choice feedback for simplicity
  const [debateFeedback, setDebateFeedback] = useState<string | null>(null);


  useEffect(() => {
      if(dailyChallenge && !debateFeedback) {
          // Display the daily challenge text when loaded
          setDebateFeedback(dailyChallenge.text);
      }
  }, [dailyChallenge, debateFeedback]);


  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading daily challenge...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading daily challenge: {error}</div>;
  }

  if (!dailyChallenge) {
       return (
           <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
               <p className="text-xl text-gray-700">No daily challenge available today.</p>
                <div className="mt-8">
                   <Link href="/" className="text-blue-500 hover:underline">
                       Back to Home
                   </Link>
               </div>
           </div>
       );
   }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Daily Ethical Challenge</h1>
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">{dailyChallenge.title}</h2>

      {/* Display the daily challenge text or current feedback */}
      <div className="mb-6 text-lg text-gray-800 max-w-prose">
        {debateFeedback}
         {isCompleted && <p className="mt-4 text-green-600 font-semibold">Challenge Completed for Today!</p>}
      </div>


      {/* Display choices if not completed */}
      {!isCompleted && dailyChallenge.choices && (
        <div className="flex flex-col space-y-4 w-full max-w-md">
          {dailyChallenge.choices.map((choice, index) => (
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

       {/* Back to home link */}
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>

         {/* Optional: Display user's daily challenge score/result */}
         {/* {isCompleted && (
             <div className="mt-8 text-lg text-gray-700">
                 Your score for today's challenge: [Daily Score Here]
             </div>
         )} */}
    </div>
  );
};

export default DailyChallengePage;