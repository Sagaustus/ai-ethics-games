"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const OpponentSelection: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const school = searchParams.get("school");

  // Define opponent options dynamically
  const opponents = [
    { name: "Utilitarianism", path: "/argument-phase?opponent=Utilitarianism" },
    { name: "Deontology", path: "/argument-phase?opponent=Deontology" },
    { name: "Virtue Ethics", path: "/argument-phase?opponent=Virtue-Ethics" },
    // Add more opponents as needed
  ];

  // Dynamic styling for buttons
  const buttonStyle: React.CSSProperties = {
    padding: "15px 30px",
    backgroundColor: "#ffcc00",
    color: "#1a1a1a",
    fontSize: "20px",
    textTransform: "uppercase",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: "20px",
  };

  if (!school) {
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
        <h1 style={{ fontSize: "36px", color: "#ff0000" }}>Error</h1>
        <p style={{ fontSize: "18px", color: "#ddd" }}>
          Missing school information. Please return to the previous step.
        </p>
        <button
          onClick={() => router.push("/school-of-thought")}
          style={buttonStyle}
        >
          Back to Schools of Thought
        </button>
      </div>
    );
  }

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
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        Opponent Selection
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        You are representing <strong>{school}</strong>. Choose your opponent:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {opponents.map((opponent, index) => (
          <button
            key={index}
            onClick={() => router.push(opponent.path)}
            style={buttonStyle}
          >
            {`Choose ${opponent.name}`}
          </button>
        ))}
      </div>
    </div>
  );
};

const OpponentSelectionWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OpponentSelection />
    </Suspense>
  );
};

export default OpponentSelectionWrapper;
