"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ArgumentPhase from "./ArgumentPhase";

const ArgumentPhaseWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArgumentPhaseWithParams />
    </Suspense>
  );
};

const ArgumentPhaseWithParams: React.FC = () => {
  const searchParams = useSearchParams();
  const scenario = searchParams.get("scenario");

  if (!scenario) {
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
          No scenario selected. Please return to the scenario selection page.
        </p>
        <button
          onClick={() => (window.location.href = "/scenario-selection")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffcc00",
            color: "#1a1a1a",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Back to Scenarios
        </button>
      </div>
    );
  }

  return <ArgumentPhase scenario={scenario} />;
};

export default ArgumentPhaseWrapper;
