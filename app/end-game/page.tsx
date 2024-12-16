"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const EndGame: React.FC = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result"); // Example query parameter

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
        {result === "win" ? "Congratulations! You Win!" : "Game Over!"}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd" }}>
        {result === "win"
          ? "You have successfully completed the AI Ethics game."
          : "Better luck next time! Try again to improve your score."}
      </p>
      <button
        onClick={() => {
          window.location.href = "/"; // Redirect to the start page
        }}
        style={{
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
        }}
      >
        Play Again
      </button>
    </div>
  );
};

const EndGameWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EndGame />
    </Suspense>
  );
};

export default EndGameWrapper;
