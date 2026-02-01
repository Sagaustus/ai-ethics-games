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
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-400">Invalid scenario</h1>
        <p className="mt-2 text-mindscape-fg/80">Please return to the scenario selection page.</p>
        <a
          href="/exploration"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-portal-gold px-4 py-2 font-semibold text-black hover:opacity-90 transition"
        >
          Back to Scenarios
        </a>
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
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <p className="text-sm text-mindscape-fg/70">Exploration</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-portal-gold">{scenarioData[scenario].title}</h1>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-5 sm:p-8 text-left">
        <div className="text-mindscape-fg/90 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {currentStep.text}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentStep.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="w-full rounded-xl border border-portal-gold/25 bg-black/30 px-4 py-3 text-left text-portal-gold hover:border-portal-gold/60 hover:bg-black/40 transition"
            >
              {choice.text}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-mindscape-fg/70">
          <span>
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <a href="/exploration" className="hover:text-portal-gold transition-colors">
            Back to scenarios
          </a>
        </div>
      </div>
    </div>
  );
}
