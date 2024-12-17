"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

const StartScreen: React.FC = () => {
  const [time, setTime] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const router = useRouter();

  const handleStartGame = () => {
    if (time === null) {
      alert("Please set the timer before starting the game.");
    } else {
      setGameStarted(true);
      router.push("/school-of-thought");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "url('https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.24_-_A_conceptual_image_representing_Ethics_in_AI_development._The_image_features_a_humanoid_robot_holding_a_glowing_ethical_code_book_surrounded_by_hol_dchxfz.webp') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar onSetTime={setTime} />

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
        <h1 style={{ fontSize: "48px", color: "#ffcc00", marginBottom: "20px" }}>
          Welcome to AI Ethics Game
        </h1>
        <p style={{ fontSize: "20px", color: "#ddd", marginBottom: "30px" }}>
          Debate ethical issues from diverse philosophical perspectives.
        </p>
        {!gameStarted ? (
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
        ) : (
          <Timer initialTime={time || 0} />
        )}
      </div>
    </div>
  );
};


export default StartScreen;
