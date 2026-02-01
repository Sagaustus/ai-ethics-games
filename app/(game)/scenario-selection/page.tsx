// app/(game)/scenario-selection/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
// The API can return either DB-backed scenarios or local-fallback scenarios.
type ScenarioListItem = {
  slug: string;
  title?: string;
  name?: string;
  description?: string;
  image?: string;
  icon?: string;
};
// import ScenarioCard from '@/components/game/ScenarioCard'; // Assuming you'll create this component

/**
 * Page for selecting a scenario to play.
 * Fetches available scenarios from the API and displays them.
 */
const ScenarioSelectionPage: React.FC = () => {
  const [scenarios, setScenarios] = useState<ScenarioListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setCurrentScenario } = useGameState(); // Action to set the chosen scenario in state

  useEffect(() => {
    const fetchScenarios = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch data from our planned API endpoint for scenarios
        // We will create this API route later (e.g., /api/game/scenarios)
        const response = await fetch('/api/game/scenarios');

        if (!response.ok) {
          throw new Error(`Failed to fetch scenarios: ${response.statusText}`);
        }

        const data: ScenarioListItem[] = await response.json();
        setScenarios(data);
      } catch (err: any) {
        console.error("Error fetching scenarios:", err);
        setError(err.message || "An error occurred while fetching scenarios.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchScenarios();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSelectScenario = (scenarioSlug: string) => {
    setCurrentScenario(scenarioSlug); // Update game state with the chosen scenario slug
    router.push(`/scenario-selection/${scenarioSlug}`); // Navigate to the specific scenario's page
  };

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading scenarios...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

    if (scenarios.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <p className="text-xl text-gray-700">No scenarios available yet.</p>
                {/* Optional: Link back */}
                 <div className="mt-8">
                     <Link href="/character-selection" className="text-blue-500 hover:underline">
                         Back to Character Selection
                     </Link>
                 </div>
            </div>
        );
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Select a Scenario</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
           <div
            key={scenario.slug}
            className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleSelectScenario(scenario.slug)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{scenario.title ?? scenario.name ?? scenario.slug}</h2>
            {scenario.description && <p className="text-gray-700">{scenario.description}</p>}
             {/* Optional: Display scenario image using ScenarioCard component */}
            {/* <ScenarioCard scenario={scenario} /> */}
          </div>
        ))}
      </div>

      {/* Optional: Back button or link */}
       <div className="mt-8">
            <Link href="/character-selection" className="text-blue-500 hover:underline">
                Back to Character Selection
            </Link>
        </div>
    </div>
  );
};

export default ScenarioSelectionPage;