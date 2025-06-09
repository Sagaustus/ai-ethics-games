"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const RoundOutcome: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const outcome = searchParams.get("outcome") || "unknown";
  const scenario = searchParams.get("scenario") || "Unknown Scenario";
  const character = searchParams.get("character") || "Unknown Character";

  const handleNavigation = (path: string) => {
    router.push(path);
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
        {outcome === "win" ? "🎉 Victory!" : "❌ Defeat!"}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        {outcome === "win"
          ? `Congratulations! You successfully argued as ${character} in the scenario "${scenario}".`
          : `Unfortunately, your arguments in the scenario "${scenario}" did not convince your opponent.`}
      </p>
      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <button
          onClick={() =>
            handleNavigation(
              `/argument-phase?scenario=${encodeURIComponent(
                scenario
              )}&character=${encodeURIComponent(character)}`
            )
          }
          style={buttonStyle}
        >
          Retry
        </button>
        <button
          onClick={() =>
            handleNavigation(
              `/opponent-selection?character=${encodeURIComponent(character)}`
            )
          }
          style={buttonStyle}
        >
          Next Round
        </button>
        <button onClick={() => handleNavigation("/")} style={buttonStyle}>
          Exit Game
        </button>
      </div>
    </div>
  );
};

// Button styling
const buttonStyle: React.CSSProperties = {
  padding: "15px",
  backgroundColor: "#333",
  color: "#ffcc00",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textTransform: "uppercase",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.2s ease",
};

const RoundOutcomeWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ color: "#fff", textAlign: "center" }}>Loading...</div>}>
      <RoundOutcome />
    </Suspense>
  );
};

export default RoundOutcomeWrapper;
