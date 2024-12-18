"use client"; // Mark this file as a Client Component

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { scenarios, Scenario } from "@/data/scenarios";
import ScenarioExplorer from "@/components/ScenarioExplorer";

const ExplorationPage: React.FC = () => {
  const { scenario } = useParams<{ scenario: string }>();
  const [scenarioData, setScenarioData] = useState<Scenario | null>(null);

  useEffect(() => {
    const key = `${scenario}Scenario`;

    if (key in scenarios) {
      setScenarioData(scenarios[key]); // Safely fetch scenario data
    } else {
      console.error(`Scenario ${key} not found.`);
      setScenarioData(null);
    }
  }, [scenario]);

  const searchParams = useSearchParams();
  const character = searchParams.get("character") || "Default Character";

  if (!scenarioData) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
        Scenario not found. Please return to the scenario selection page.
      </div>
    );
  }

  return <ScenarioExplorer scenario={scenarioData} character={character} />;
};

export default ExplorationPage;
