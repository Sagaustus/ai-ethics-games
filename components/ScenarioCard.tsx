// import React from "react";
// import Image from "next/image";

// interface ScenarioCardProps {
//   title: string;
//   description: string;
//   image: string;
//   onClick: () => void;
// }

// const ScenarioCard: React.FC<ScenarioCardProps> = ({
//   title,
//   description,
//   image,
//   onClick,
// }) => {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         cursor: "pointer",
//         backgroundColor: "#333",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//       }}
//     >
//       <Image src={image} alt={title} width={300} height={200} />
//       <div style={{ padding: "10px" }}>
//         <h2 style={{ color: "#ffcc00" }}>{title}</h2>
//         <p style={{ color: "#ddd" }}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ScenarioCard;

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
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ objectFit: "cover", width: "100%" }}
      />
      <div style={{ padding: "10px" }}>
        <h2 style={{ color: "#ffcc00", fontSize: "18px" }}>{title}</h2>
        <p style={{ color: "#ddd", fontSize: "14px" }}>{description}</p>
      </div>
    </div>
  );
};

export default ScenarioCard;
