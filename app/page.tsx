"use client";

import { useRouter } from "next/navigation";

const StartScreen = () => {
  const router = useRouter();

  const startGame = () => {
    router.push("/school-of-thought");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "url('/background.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#ffcc00", marginBottom: "20px" }}>
        Welcome to AI Ethics Game
      </h1>
      <p style={{ fontSize: "20px", color: "#ddd", marginBottom: "30px" }}>
        Debate ethical issues from diverse philosophical perspectives.
      </p>
      <button
        onClick={startGame}
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
  );
};

export default StartScreen;
