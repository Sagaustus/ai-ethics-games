"use client";

import React, { useState } from "react";
import ControlBox from "./ControlBox";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [currentStage, setCurrentStage] = useState<"exploration" | "argument" | "end">(
    "exploration"
  );
  const [score, setScore] = useState({
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
  });

  const handleStartGame = () => {
    setIsGameActive(true);
    setCurrentStage("exploration");
    setScore({ utilitarianPoints: 0, deontologicalPoints: 0, virtuePoints: 0 });
  };

  const handleRestartGame = () => {
    window.location.href = "/";
  };

  const handleEndGame = () => {
    setIsGameActive(false);
    setCurrentStage("end");
    alert("The game has ended! Thank you for playing.");
  };

  const handlePauseGame = () => {
    console.log("Game paused");
  };

  const handleResumeGame = () => {
    console.log("Game resumed");
  };

  const handleChangeScenario = () => {
    alert("Scenario changed!");
  };

  const handleChangeCharacter = () => {
    alert("Character changed!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main content area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <main style={{ width: "100%", maxWidth: "1200px" }}>{children}</main>
      </div>

      {/* Control Box */}
      <ControlBox
        onStartGame={handleStartGame}
        onRestartGame={handleRestartGame}
        onEndGame={handleEndGame}
        onPauseGame={handlePauseGame}
        onResumeGame={handleResumeGame}
        onChangeScenario={handleChangeScenario}
        onChangeCharacter={handleChangeCharacter}
        score={score}
        isGameActive={isGameActive}
        currentStage={currentStage}
      />
    </div>
  );
};

export default Layout;
