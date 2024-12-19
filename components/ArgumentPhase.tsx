"use client";

import React, { useState, useEffect } from "react";
import argumentData from "@/data/argumentData"; // Correct default import
import { useRouter } from "next/navigation";

export type ScenarioKeys = keyof typeof argumentData;

interface ArgumentPhaseProps {
  scenario: ScenarioKeys;
  initialPoints: {
    utilitarianPoints: number;
    deontologicalPoints: number;
    virtuePoints: number;
  };
  opponentPoints: number;
}

const gameOverSoundUrl =
  "https://res.cloudinary.com/dirhzlg1c/video/upload/v1734498288/game-over-31-179699_ix2m1b.mp3";
const victorySoundUrl =
  "https://res.cloudinary.com/dirhzlg1c/video/upload/v1734498291/a-victory-225962_pmcnzy.mp3";
const victoryImageUrl =
  "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734498549/victory_hcv8sz.jpg";

const playAudio = (url: string) => {
  const audio = new Audio(url);
  audio.play().catch((err) => {
    console.error("Audio playback failed:", err);
  });
};

export default function ArgumentPhase({
  scenario,
  initialPoints,
  opponentPoints,
}: ArgumentPhaseProps) {
  const [points, setPoints] = useState(initialPoints);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const router = useRouter();

  const npcArgument = argumentData[scenario]?.npcArgument || "";
  const rebuttals = argumentData[scenario]?.rebuttals || [];
  const playerArguments = argumentData[scenario]?.playerArguments || [];

  useEffect(() => {
    if (points.utilitarianPoints <= -2) {
      setGameOver(true);
      playAudio(gameOverSoundUrl);
      setTimeout(() => router.push("/"), 5000);
    }

    if (
      points.utilitarianPoints >= opponentPoints + 2 ||
      points.deontologicalPoints >= opponentPoints + 2 ||
      points.virtuePoints >= opponentPoints + 2
    ) {
      setGameWon(true);
      playAudio(victorySoundUrl);
      setTimeout(() => router.push("/"), 60000);
    }
  }, [points, opponentPoints, router]);

  const handlePlayerChoice = (isCorrect: boolean) => {
    if (!gameOver && !gameWon) {
      setPoints((prev) => ({
        ...prev,
        virtuePoints: isCorrect ? prev.virtuePoints + 1 : prev.virtuePoints,
        utilitarianPoints: !isCorrect ? prev.utilitarianPoints - 1 : prev.utilitarianPoints,
      }));
    }
  };

  if (gameOver) {
    return (
      <div
        style={{
          background:
            "url('https://res.cloudinary.com/dirhzlg1c/image/upload/v1734498548/mindscrape_tnnwe7.png') no-repeat center center fixed",
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#f44336", marginBottom: "20px" }}>
          Game Over
        </h1>
        <p style={{ fontSize: "20px", color: "#ddd", marginBottom: "30px" }}>
          You've lost the game. Better luck next time!
        </p>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div
        style={{
          background: `url(${victoryImageUrl}) no-repeat center center fixed`,
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#4caf50", marginBottom: "20px" }}>
          Congratulations! You Won!
        </h1>
        <p style={{ fontSize: "20px", color: "#ddd", marginBottom: "30px" }}>
          Your argument outshined the opponent's school of thought.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", color: "#ffcc00" }}>Argument Phase: {scenario}</h1>
      <h2 style={{ fontSize: "24px", color: "#ddd" }}>{npcArgument}</h2>

      <div style={{ width: "100%", maxWidth: "600px" }}>
        <h3 style={{ fontSize: "20px", color: "#ffcc00", marginBottom: "10px" }}>Rebuttal:</h3>
        <p style={{ color: "#ccc" }}>{rebuttals.join(", ")}</p>
      </div>

      <div style={{ width: "100%", maxWidth: "600px" }}>
        <h3 style={{ fontSize: "20px", color: "#ffcc00", marginBottom: "10px" }}>Your Choices:</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {playerArguments.map((arg, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                color: arg.isCorrect ? "#4caf50" : "#f44336",
                cursor: "pointer",
                padding: "10px",
                border: "1px solid #555",
                borderRadius: "5px",
                backgroundColor: "#333",
              }}
              onClick={() => handlePlayerChoice(arg.isCorrect)}
            >
              {arg.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
