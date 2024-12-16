import React from "react";
import Image from "next/image";

interface CharacterCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#333",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
      }}
    >
      <Image
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div
        style={{
          padding: "10px",
          color: "#ffcc00",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default CharacterCard;
