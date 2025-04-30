// hooks/useScenario.ts

import { useState, useEffect } from 'react';
import { Scenario } from '@/game/types'; // Import the Scenario type

interface UseScenarioResult {
  scenarioData: Scenario | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch scenario data from the API.
 * @param scenarioSlug The slug of the scenario to fetch.
 * @returns An object containing the scenario data, loading state, and error state.
 */
export const useScenario = (scenarioSlug?: string): UseScenarioResult => {
  const [scenarioData, setScenarioData] = useState<Scenario | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScenario = async () => {
      if (!scenarioSlug) {
        setScenarioData(null);
        setError(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Fetch data from our Next.js API route
        const response = await fetch(`/api/game/scenarios?slug=${scenarioSlug}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch scenario: ${response.statusText}`);
        }

        const data: Scenario = await response.json();
        setScenarioData(data);
      } catch (err: any) {
        console.error("Error fetching scenario:", err);
        setError(err.message || "An error occurred while fetching the scenario.");
        setScenarioData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScenario();

  }, [scenarioSlug]); // Re-run effect if scenarioSlug changes

  return { scenarioData, isLoading, error };
};