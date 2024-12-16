import React from "react";
import Image from "next/image";

interface ScenarioCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#333",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={300} // Adjust as needed
        height={200} // Adjust as needed
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          padding: "10px",
          color: "#ffcc00",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </div>
      <p style={{ padding: "0 10px", color: "#ddd", fontSize: "14px" }}>
        {description}
      </p>
    </div>
  );
};

export default ScenarioCard;
