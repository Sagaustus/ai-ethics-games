"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { scenarios } from "@/data/scenarios"; // Import all scenarios

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
  endMessage: string;
}

const ExplorationPhase: React.FC = () => {
  const params = useParams<{ scenario: string }>(); // Extract scenario from URL
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawScenario = params.scenario || "";
  const character = searchParams.get("character") || "Unknown Character";

  const [scenarioData, setScenarioData] = useState<Scenario | null>(null);
  const [currentStage, setCurrentStage] = useState<number>(0);

  console.log("Raw Scenario Param:", rawScenario);

  // Safely format the scenario name to camelCase for file lookup
  const formattedScenario = rawScenario
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  console.log("Formatted Scenario:", formattedScenario);

  useEffect(() => {
    const loadScenario = () => {
      // Ensure the key matches valid scenario names
      const scenarioKey = Object.keys(scenarios).find(
        (key) => key.replace("Scenario", "") === formattedScenario
      ) as keyof typeof scenarios;

      if (scenarioKey && scenarios[scenarioKey]) {
        const selectedScenario = scenarios[scenarioKey] as Scenario; // Type-safe access
        setScenarioData(selectedScenario);
      } else {
        console.error("Scenario not found.");
        setScenarioData(null);
      }
    };

    if (formattedScenario) {
      loadScenario();
    }
  }, [formattedScenario]);

  if (!scenarioData) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
        Scenario not found. Please return to the selection page.
      </div>
    );
  }

  const explorationSteps = scenarioData.exploration || [];
  const currentStep = explorationSteps[currentStage];

  const handleNext = () => {
    if (currentStage < explorationSteps.length - 1) {
      setCurrentStage((prev) => prev + 1);
    } else {
      router.push(
        `/argument-phase?scenario=${encodeURIComponent(
          scenarioData.title
        )}&character=${encodeURIComponent(character)}`
      );
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#ffcc00",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {scenarioData.title} - Exploration Phase
      </h1>
      <h2
        style={{
          color: "#ddd",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Character: {character}
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        {/* Display Exploration Step Text */}
        <p
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            textAlign: "justify",
          }}
        >
          {currentStep?.text || "No content available for this step."}
        </p>

        {/* Display Choices */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {currentStep?.choices?.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleNext()}
              style={{
                padding: "12px 20px",
                backgroundColor: "#333",
                color: "#ffcc00",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#555")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#333")
              }
            >
              {choice.text}
            </button>
          ))}
        </div>

        {/* Navigation Indicator */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ color: "#aaa" }}>
            Step {currentStage + 1} of {explorationSteps.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplorationPhase;
