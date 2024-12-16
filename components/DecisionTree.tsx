import React from "react";

interface DecisionTreeProps {
  question: string;
  options: { choice: string; outcome: string }[];
  onSelect: (outcome: string) => void;
}

const DecisionTree: React.FC<DecisionTreeProps> = ({
  question,
  options,
  onSelect,
}) => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#ffcc00", fontSize: "20px" }}>{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option.outcome)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#ffcc00",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {option.choice}
        </button>
      ))}
    </div>
  );
};

export default DecisionTree;
