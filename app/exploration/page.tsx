"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ScenarioExplorer from "@/components/ScenarioExplorer";

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

const ExplorationPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve 'scenario' and 'character' parameters from the query string
  const rawScenario = searchParams.get("scenario") || "";
  const character = searchParams.get("character") || "Unknown Character";

  const [scenarioData, setScenarioData] = useState<Scenario | null>(null);

  console.log("Raw Scenario:", rawScenario);

  // Convert raw scenario name to camelCase for dynamic file imports
  const formatScenarioName = (name: string): string =>
    name
      .split("-")
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

  const formattedScenario = formatScenarioName(rawScenario);
  console.log("Formatted Scenario:", formattedScenario);

  useEffect(() => {
    const loadScenario = async () => {
      try {
        if (!formattedScenario) throw new Error("Invalid scenario name");

        // Dynamically import the corresponding scenario file
        const scenarioModule = await import(
          `@/data/scenarios/${formattedScenario}Scenario`
        );

        setScenarioData(scenarioModule[`${formattedScenario}Scenario`]);
      } catch (error) {
        console.error("Failed to load scenario:", error);
        setScenarioData(null);
      }
    };

    loadScenario();
  }, [formattedScenario]);

  if (!scenarioData) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "red",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        Scenario not found. Please return to the{" "}
        <a
          href="/scenario-selection"
          style={{ color: "#ffcc00", textDecoration: "underline" }}
        >
          scenario selection page
        </a>
        .
      </div>
    );
  }

  return (
    <ScenarioExplorer scenario={scenarioData} character={character} />
  );
};

export default ExplorationPage;
