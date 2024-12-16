"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ArgumentPhase from "./ArgumentPhase";

const ArgumentPhaseWrapper: React.FC = () => {
  const searchParams = useSearchParams();
  const scenario = searchParams.get("scenario");

  if (!scenario || !scenario.trim()) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
          textAlign: "center",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#ffcc00" }}>Error</h1>
        <p style={{ fontSize: "18px", color: "#ddd" }}>
          No scenario selected. Please go back and choose a scenario.
        </p>
      </div>
    );
  }

  return <ArgumentPhase scenario={scenario} />;
};

export default ArgumentPhaseWrapper;
