"use client";

import React from "react";
import { useRouter } from "next/navigation";

const StartScreen: React.FC = () => {
  const router = useRouter(); // Navigation handler

  const handleStartGame = () => {
    router.push("/school-of-thought"); // Navigate to the next page
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background:
          "url('https://res.cloudinary.com/dirhzlg1c/image/upload/v1734498548/mindscrape_tnnwe7.png') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* <h1 style={{ fontSize: "48px", color: "#ffcc00", marginBottom: "20px" }}>
          Welcome to AI Ethics Game
        </h1> */}
        <p style={{ fontSize: "20px", color: "#ddd", marginBottom: "30px" }}>
          Debate ethical issues from diverse philosophical perspectives.
        </p>
        <button
          onClick={handleStartGame}
          style={{
            padding: "15px 30px",
            backgroundColor: "#ffcc00",
            color: "#1a1a1a",
            fontSize: "20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
