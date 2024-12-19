"use client";

import React, { useState } from "react";

interface StoryStep {
  title: string;
  description: string;
  choices?: { text: string; nextStep: string }[];
  updates?: Partial<PointsState>; // For tracking score updates
}

interface PointsState {
  utilitarianPoints: number;
  deontologicalPoints: number;
  virtuePoints: number;
  transparencyFlag: boolean;
}

const storyData: Record<string, StoryStep> = {
  "Discovery of Bias": {
    title: "Discovery of Bias",
    description:
      "You sit at your desk, staring at the screen displaying the results of your company's AI-powered hiring tool. Something feels off. The AI has processed thousands of applications, but minority groups are underrepresented in the interview pool.\n\nAfter reviewing the data, you confirm the AI is biased. What do you do?",
    choices: [
      { text: "Ignore the problem and focus on AI’s efficiency.", nextStep: "Ignore Problem" },
      { text: "Report the issue and suggest retraining the AI.", nextStep: "Report Issue" },
      { text: "Quietly fix the bias on your own.", nextStep: "Quiet Fix" },
      { text: "Consider ethical frameworks to guide your decision.", nextStep: "Ethical Framework" },
    ],
  },
  "Ignore Problem": {
    title: "Ignore the Problem",
    description:
      "You decide to ignore the bias for now. The AI has been highly efficient, saving time and resources. Fixing it would require retraining, which could be costly and time-consuming.\n\nWeeks later, the AI’s hiring results are questioned as the underrepresentation becomes obvious. Soon, the media catches wind of the biased AI.",
    updates: { utilitarianPoints: 1 },
    choices: [
      { text: "Admit your role and suggest scrapping the AI.", nextStep: "Scrap AI" },
      { text: "Defend the AI’s efficiency despite the bias.", nextStep: "Defend AI" },
      { text: "Quietly work to fix the bias before it escalates.", nextStep: "Quiet Fix Late" },
    ],
  },
  "Report Issue": {
    title: "Report the Issue",
    description:
      "You approach your manager with the problem, explaining the bias. Your manager is concerned but acknowledges the need to fix it.",
    updates: { deontologicalPoints: 1 },
    choices: [
      { text: "Fix the AI quietly to avoid scandal.", nextStep: "Quiet Fix" },
      { text: "Advocate for full transparency and go public.", nextStep: "Go Public" },
      { text: "Propose halting the AI project entirely.", nextStep: "Scrap AI" },
    ],
  },
  // Define other steps similarly...
  End: {
    title: "End",
    description:
      "Thank you for playing the AI Ethics Game. Your decisions have shaped the story's outcome, and the AI system's future has been determined based on your ethical choices.\n\nWould you like to play again?",
    choices: [{ text: "Restart the Game", nextStep: "Discovery of Bias" }],
  },
};

const ExplorationStage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<string>("Discovery of Bias");
  const [points, setPoints] = useState<PointsState>({
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    transparencyFlag: false,
  });

  const handleChoice = (nextStep: string, updates?: Partial<PointsState>) => {
    if (updates) {
      setPoints((prev) => ({
        ...prev,
        ...updates,
        utilitarianPoints: prev.utilitarianPoints + (updates.utilitarianPoints || 0),
        deontologicalPoints: prev.deontologicalPoints + (updates.deontologicalPoints || 0),
        virtuePoints: prev.virtuePoints + (updates.virtuePoints || 0),
      }));
    }
    setCurrentStep(nextStep);
  };

  const step = storyData[currentStep];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00" }}>{step.title}</h1>
      <p style={{ whiteSpace: "pre-line", marginBottom: "20px", maxWidth: "800px", textAlign: "center" }}>
        {step.description}
      </p>

      {step.choices && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {step.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice.nextStep, step.updates)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#ffcc00",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#ccc" }}>
        <strong>Scores:</strong> Utilitarian: {points.utilitarianPoints} | Deontological:{" "}
        {points.deontologicalPoints} | Virtue: {points.virtuePoints}
      </div>
    </div>
  );
};

export default ExplorationStage;
