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
        background: "url('https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.24_-_A_conceptual_image_representing_Ethics_in_AI_development._The_image_features_a_humanoid_robot_holding_a_glowing_ethical_code_book_surrounded_by_hol_dchxfz.webp') no-repeat center center fixed",
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
