"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EndGame: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const result = searchParams.get("result"); // Read query parameters

  useEffect(() => {
    if (result === "win") {
      const audio = new Audio(
        "https://res.cloudinary.com/dirhzlg1c/video/upload/v1734498291/a-victory-225962_pmcnzy.mp3"
      );
      audio.play();
    }
  }, [result]);

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
      {result === "win" && (
        <img
          src="https://res.cloudinary.com/dirhzlg1c/image/upload/v1734498549/victory_hcv8sz.jpg"
          alt="Victory"
          style={{
            width: "80%",
            maxWidth: "600px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        {result === "win" ? "🎉 Congratulations! You Win!" : "🛑 Game Over!"}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        {result === "win"
          ? "You have successfully completed the AI Ethics game."
          : "Better luck next time! Try again to improve your score."}
      </p>
      <button
        onClick={() => router.push("/scenario-selection")}
        style={{
          padding: "15px 30px",
          backgroundColor: "#ffcc00",
          color: "#1a1a1a",
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          marginBottom: "10px",
        }}
      >
        Play Again
      </button>
      <button
        onClick={() => router.push("/school-of-thought")}
        style={{
          padding: "15px 30px",
          backgroundColor: "#333",
          color: "#ffcc00",
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        Explore Schools of Thought
      </button>
    </div>
  );
};

export default EndGame;
