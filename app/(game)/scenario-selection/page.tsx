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
    return <div className="text-center text-xl text-mindscape-fg/80">Loading scenarios...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error: {error}</div>;
  }

    if (scenarios.length === 0) {
        return (
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
              <p className="text-xl text-mindscape-fg/80">No scenarios available yet.</p>
              <div className="mt-8">
                <Link href="/school-of-thought" className="hover:text-portal-gold transition-colors">
                  Back to Schools of Thought
                </Link>
              </div>
            </div>
        );
    }


  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Select a Scenario</h1>
        <p className="mt-3 text-mindscape-fg/80">Pick a dilemma to explore and debate.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
           <div
            key={scenario.slug}
            className="cursor-pointer rounded-xl bg-debate-panel/60 border border-white/10 p-6 hover:border-portal-gold/40 hover:bg-debate-panel/70 transition"
            onClick={() => handleSelectScenario(scenario.slug)}
          >
            <h2 className="text-xl font-bold text-portal-gold">{scenario.title ?? scenario.name ?? scenario.slug}</h2>
            {scenario.description && <p className="mt-2 text-sm text-mindscape-fg/80">{scenario.description}</p>}
             {/* Optional: Display scenario image using ScenarioCard component */}
            {/* <ScenarioCard scenario={scenario} /> */}
          </div>
        ))}
      </div>

      {/* Optional: Back button or link */}
      <div className="mt-10 text-center">
        <Link href="/school-of-thought" className="hover:text-portal-gold transition-colors">
          Back to Schools of Thought
        </Link>
      </div>
    </div>
  );
};

export default ScenarioSelectionPage;