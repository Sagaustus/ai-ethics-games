import React from "react";
import Image from "next/image";

interface ScenarioCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#333",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      }}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h2 style={{ fontSize: "18px", color: "#ffcc00", marginBottom: "8px" }}>{title}</h2>
        <p style={{ fontSize: "14px", color: "#ddd" }}>{description}</p>
      </div>
    </div>
  );
};

export default ScenarioCard;
