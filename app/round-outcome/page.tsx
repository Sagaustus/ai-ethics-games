"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const RoundOutcome: React.FC = () => {
  const searchParams = useSearchParams();
  const outcome = searchParams.get("outcome") || "unknown";
  const scenario = searchParams.get("scenario") || "Unknown Scenario";
  const character = searchParams.get("character") || "Unknown Character";

  const handleRetry = () => {
    window.location.href = `/argument-phase?scenario=${encodeURIComponent(
      scenario
    )}&character=${encodeURIComponent(character)}`;
  };

  const handleNextRound = () => {
    window.location.href = `/opponent-selection?character=${encodeURIComponent(
      character
    )}`;
  };

  const handleExit = () => {
    window.location.href = "/";
  };

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
      <h1
        style={{
          fontSize: "36px",
          color: outcome === "win" ? "#00ff00" : "#ff0000",
          marginBottom: "20px",
        }}
      >
        {outcome === "win" ? "Victory!" : "Defeat!"}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        {outcome === "win"
          ? `Congratulations! You successfully argued in favor of ${character} in the scenario "${scenario}".`
          : `Unfortunately, your arguments in the scenario "${scenario}" did not convince your opponent.`}
      </p>
      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <button
          onClick={handleRetry}
          style={{
            padding: "15px",
            backgroundColor: "#333",
            color: "#ffcc00",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Retry
        </button>
        <button
          onClick={handleNextRound}
          style={{
            padding: "15px",
            backgroundColor: "#333",
            color: "#ffcc00",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Next Round
        </button>
        <button
          onClick={handleExit}
          style={{
            padding: "15px",
            backgroundColor: "#333",
            color: "#ffcc00",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Exit Game
        </button>
      </div>
    </div>
  );
};

const RoundOutcomeWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoundOutcome />
    </Suspense>
  );
};

export default RoundOutcomeWrapper;
