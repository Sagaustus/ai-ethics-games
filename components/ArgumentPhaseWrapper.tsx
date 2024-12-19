"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ArgumentPhase from "./ArgumentPhase";
import { argumentData } from "@/data/argumentData";

const loadingStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};

export default function ArgumentPhaseWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const scenario = searchParams.get("scenario");

  // Type guard to validate the scenario
  const isValidScenario = (value: string | null): value is keyof typeof argumentData =>
    value !== null && value in argumentData;

  // Handle invalid scenario
  if (!isValidScenario(scenario)) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h1>Error</h1>
        <p>Invalid scenario. Please return to the scenario selection page.</p>
        <button
          onClick={() => router.push("/exploration")}
          style={{
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
          }}
        >
          Back to Scenarios
        </button>
      </div>
    );
  }

  const initialPoints = {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
  };

  return (
    <Suspense fallback={<div style={loadingStyle}>Loading Argument Phase...</div>}>
      <ArgumentPhase scenario={scenario} initialPoints={initialPoints} />
    </Suspense>
  );
}
