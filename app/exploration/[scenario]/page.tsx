"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type ScenarioType = {
  description: string;
  image: string;
  trivia: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

const scenarios: Record<string, ScenarioType> = {
  "the-watchful-eye": {
    description:
      "AI-driven surveillance systems promise enhanced security but challenge individual privacy. Should personal data be used for national security?",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.08_-_A_conceptual_image_representing_Surveillance_in_AI_ethics._The_image_features_a_futuristic_cityscape_with_a_large_all-seeing_digital_eye_hovering_a_ragbcq.webp",
    trivia: [
      {
        question: "What is a major risk of mass surveillance?",
        options: [
          "Enhanced public safety",
          "Increased privacy violations",
          "Lowered crime rates",
          "Reduced data storage costs",
        ],
        answer: "Increased privacy violations",
      },
    ],
  },
};

const Exploration: React.FC = () => {
  const searchParams = useSearchParams();
  const scenarioName = searchParams.get("scenario") || "unknown-scenario";
  const scenario = scenarios[scenarioName];

  const [triviaIndex, setTriviaIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!scenario) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#ff0000" }}>Scenario Not Found</h1>
      </div>
    );
  }

  const handleAnswer = (option: string) => {
    if (option === scenario.trivia[triviaIndex].answer) {
      setScore(score + 1);
    }
    if (triviaIndex < scenario.trivia.length - 1) {
      setTriviaIndex(triviaIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        {scenarioName}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        {scenario.description}
      </p>
      <Image
        src={scenario.image}
        alt={scenarioName}
        width={600}
        height={300}
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      />
      {!showResult ? (
        <div>
          <h2 style={{ fontSize: "24px", color: "#ffcc00", marginBottom: "10px" }}>
            Trivia Question {triviaIndex + 1}
          </h2>
          <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
            {scenario.trivia[triviaIndex].question}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {scenario.trivia[triviaIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#333",
                  color: "#ffcc00",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontSize: "16px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ fontSize: "24px", color: "#00ff00", marginBottom: "20px" }}>
            Trivia Completed!
          </h2>
          <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
            Your Score: {score} / {scenario.trivia.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Exploration;
