"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

const ArgumentPhaseWelcome: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const scenario = searchParams.get("scenario");

  if (!scenario) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        <h1>Error: Scenario Not Found</h1>
        <p>Please return to the exploration phase.</p>
      </div>
    );
  }

  const startArgumentPhase = () => {
    router.push(`/argument/run?scenario=${scenario}`);
  };

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>Welcome to the Argument Phase</h1>
      <p>
        In this phase, you'll debate ethical principles and defend your decisions from the
        exploration phase.
      </p>
      <button
        onClick={startArgumentPhase}
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
        }}
      >
        Start Debate
      </button>
    </div>
  );
};

export default ArgumentPhaseWelcome;
