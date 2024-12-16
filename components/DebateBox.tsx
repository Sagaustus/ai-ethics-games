import React from "react";

interface DebateBoxProps {
  npcArgument: string;
  rebuttals: string[];
  onRebuttalSelect: (rebuttal: string) => void;
}

const DebateBox: React.FC<DebateBoxProps> = ({
  npcArgument,
  rebuttals,
  onRebuttalSelect,
}) => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#ffcc00", fontSize: "20px" }}>AI Argument</h2>
      <p style={{ color: "#ddd", marginBottom: "20px" }}>{npcArgument}</p>
      {rebuttals.map((rebuttal, index) => (
        <button
          key={index}
          onClick={() => onRebuttalSelect(rebuttal)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#ffcc00",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {rebuttal}
        </button>
      ))}
    </div>
  );
};

export default DebateBox;
