"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ArgumentPhase from "./ArgumentPhase";
import argumentData from "@/data/argumentData"; // Correct default import


const ArgumentPhaseWrapper: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve scenario and initial points from URL
  const scenario = searchParams.get("scenario");
  const utilitarianPoints = parseInt(searchParams.get("utilitarianPoints") || "0", 10);
  const deontologicalPoints = parseInt(searchParams.get("deontologicalPoints") || "0", 10);
  const virtuePoints = parseInt(searchParams.get("virtuePoints") || "0", 10);

  const initialPoints = { utilitarianPoints, deontologicalPoints, virtuePoints };

  // Type guard to validate the scenario
  const isValidScenario = (value: string | null): value is keyof typeof argumentData => {
    return typeof value === "string" && Object.keys(argumentData).includes(value);
  };

  // Handle invalid scenario
  if (!isValidScenario(scenario)) {
    return (
      <div style={containerStyle}>
        <h1 style={errorHeadingStyle}>Error</h1>
        <p>Invalid scenario. Please return to the scenario selection page.</p>
        <button
          onClick={() => router.push("/scenario-selection")}
          style={buttonStyle}
        >
          Back to Scenarios
        </button>
      </div>
    );
  }

  return (
    <Suspense fallback={<div style={loadingStyle}>Loading Argument Phase...</div>}>
      <ArgumentPhase scenario={scenario} initialPoints={initialPoints} opponentPoints={1} />
    </Suspense>
  );
};

// Reusable styles
const containerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "white",
  padding: "20px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1a1a1a",
};

const errorHeadingStyle: React.CSSProperties = {
  color: "#ffcc00",
  marginBottom: "10px",
  fontSize: "36px",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#ffcc00",
  color: "#1a1a1a",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  textTransform: "uppercase",
  border: "none",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
};

const loadingStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};

export default ArgumentPhaseWrapper;
