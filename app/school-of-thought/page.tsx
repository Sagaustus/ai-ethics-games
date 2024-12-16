"use client";

import { useRouter } from "next/navigation";

const SchoolOfThoughtSelection = () => {
  const router = useRouter();

  const schools = [
    { name: "Deontology", image: "/deontology.jpg" },
    { name: "Utilitarianism", image: "/utilitarianism.jpg" },
    { name: "Virtue Ethics", image: "/virtue-ethics.jpg" },
  ];

  const selectSchool = (school: string) => {
    router.push(`/character-selection/${school.toLowerCase()}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        height: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        Choose a School of Thought
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          width: "80%",
        }}
      >
        {schools.map((school) => (
          <div
            key={school.name}
            onClick={() => selectSchool(school.name)}
            style={{
              cursor: "pointer",
              background: `url(${school.image}) no-repeat center center`,
              backgroundSize: "cover",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              height: "200px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              color: "#ffcc00",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {school.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolOfThoughtSelection;
