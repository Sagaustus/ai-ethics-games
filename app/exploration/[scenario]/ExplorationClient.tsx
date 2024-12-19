"use client";

import React, { useState } from "react";
import { scenarioData } from "@/data/scenarios";
import argumentData from "@/data/argumentData"; // Correct default import
import ArgumentPhase from "@/components/ArgumentPhase";

const scenarioKeyMapping = {
  watchfulEyeScenario: "watchfulEyeScenario",
  selfDrivingDilemmaScenario: "selfDrivingDilemmaScenario",
  censoredWorldScenario: "censoredWorldScenario",
  faceOfDeceptionScenario: "faceOfDeceptionScenario",
  ethicalSoldierScenario: "ethicalSoldierScenario",
  carbonFootprintScenario: "carbonFootprintScenario",
  perfectPartnerScenario: "perfectPartnerScenario",
  consciousMachineScenario: "consciousMachineScenario",
  rogueCoderScenario: "rogueCoderScenario",
  joblessFutureScenario: "joblessFutureScenario",
  learningMachineScenario: "learningMachineScenario",
  minorityReportScenario: "minorityReportScenario",
  biasedJudgeScenario: "biasedJudgeScenario",
  artificialArtistScenario: "artificialArtistScenario",
  algorithmicDoctorScenario: "algorithmicDoctorScenario",
} as const; // Explicitly mark as constant for better inference

interface Choice {
  text: string;
  outcome: string;
}

export default function ExplorationClient({ scenario }: { scenario: keyof typeof scenarioData }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isArgumentPhase, setIsArgumentPhase] = useState(false);

  if (!scenario || !scenarioData[scenario]) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
        <h1 style={{ color: "#ffcc00" }}>Error: Invalid Scenario</h1>
        <p style={{ marginBottom: "20px" }}>Please return to the scenario selection page.</p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffcc00",
            color: "#1a1a1a",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Back to Scenarios
        </button>
      </div>
    );
  }

  const steps = scenarioData[scenario].exploration;
  const currentStep = steps[currentStepIndex];

  const handleChoice = (choice: Choice) => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsArgumentPhase(true); // Transition to the argument phase
    }
  };

  if (isArgumentPhase) {
    const argumentScenario = scenarioKeyMapping[scenario] as keyof typeof argumentData;
    return (
      <ArgumentPhase
        scenario={argumentScenario}
        initialPoints={{ utilitarianPoints: 0, deontologicalPoints: 0, virtuePoints: 0 }}
        opponentPoints={1} // Example opponent score
      />
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "28px", color: "#ffcc00", marginBottom: "20px" }}>
        Exploration: {scenarioData[scenario].title}
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>{currentStep.text}</p>
      <div>
        {currentStep.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "#ffcc00",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          >
            {choice.text}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "20px", fontSize: "16px", color: "#ccc" }}>
        Step {currentStepIndex + 1} of {steps.length}
      </p>
    </div>
  );
}
