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
        maxWidth: "300px",
        margin: "10px auto",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src={image}
          alt={name}
          layout="fill" // Ensures the image fills the parent div
          objectFit="cover" // Maintains aspect ratio and covers the container
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          priority // Optimizes loading for above-the-fold content
        />
      </div>
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
