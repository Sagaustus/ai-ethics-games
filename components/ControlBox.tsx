"use client";

import React, { useState, useEffect } from "react";

interface ControlBoxProps {
  onStartGame: () => void;
  onRestartGame: () => void;
  onEndGame: () => void;
  onPauseGame: () => void;
  onResumeGame: () => void;
  onChangeScenario?: () => void; // Added onChangeScenario as optional
  onChangeCharacter?: () => void; // Added onChangeCharacter as optional
  score: {
    utilitarianPoints: number;
    deontologicalPoints: number;
    virtuePoints: number;
  };
  isGameActive: boolean;
  currentStage: "school" | "exploration" | "argument" | "end";
}

const ControlBox: React.FC<ControlBoxProps> = ({
  onStartGame,
  onRestartGame,
  onEndGame,
  onPauseGame,
  onResumeGame,
  onChangeScenario,
  onChangeCharacter,
  score,
  isGameActive,
  currentStage,
}) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!isPaused && isGameActive) {
      const timer = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isGameActive]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#003366",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "4px solid #ffcc00",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      {/* Timer */}
      <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
        Time Elapsed: {formatTime(elapsedTime)}
      </div>

      {/* Control Buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        {!isGameActive && (
          <button
            onClick={onStartGame}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
          >
            Timer
          </button>
        )}
        {isGameActive && (
          <>
            <button
              onClick={() => {
                setIsPaused(!isPaused);
                isPaused ? onResumeGame() : onPauseGame();
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: isPaused ? "#4caf50" : "#e53935",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={onRestartGame}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff9800",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              Restart Game
            </button>
            <button
              onClick={onEndGame}
              style={{
                padding: "10px 20px",
                backgroundColor: "#c62828",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              End Game
            </button>
            {currentStage !== "end" && onChangeScenario && (
              <button
                onClick={onChangeScenario}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
              >
                Change Scenario
              </button>
            )}
            {currentStage === "argument" && onChangeCharacter && (
              <button
                onClick={onChangeCharacter}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#9c27b0",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
              >
                Change Character
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ControlBox;
