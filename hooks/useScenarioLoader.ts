"use client";

import { useEffect, useState } from "react";

interface Choice {
  text: string;
  outcome: string;
}

interface ExplorationStep {
  text: string;
  choices: Choice[];
}

interface Scenario {
  title: string;
  description: string;
  exploration: ExplorationStep[];
}

const formatScenarioName = (rawScenario: string): string => {
  return rawScenario
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

export const useScenarioLoader = (rawScenario: string) => {
  const [scenarioData, setScenarioData] = useState<Scenario | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadScenario = async () => {
      const formattedScenario = formatScenarioName(rawScenario);
      try {
        const scenarioModule = await import(
          `@/data/scenarios/${formattedScenario}Scenario`
        );
        setScenarioData(scenarioModule[`${formattedScenario}Scenario`]);
      } catch (err) {
        console.error("Failed to load scenario:", err);
        setError("Scenario not found. Please return to the selection page.");
      }
    };

    if (rawScenario) loadScenario();
  }, [rawScenario]);

  return { scenarioData, error };
};
