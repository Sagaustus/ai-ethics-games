"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

const CharacterSelection: React.FC = () => {
  const { school } = useParams<{ school: string }>();
  const router = useRouter();

  // Define the characters for each school of thought
  const characterOptions: Record<string, { name: string; link: string }[]> = {
    deontology: [
      { name: "Immanuel Kant", link: "/exploration?character=kant" },
      { name: "Elizabeth Anscombe", link: "/exploration?character=anscombe" },
    ],
    utilitarianism: [
      { name: "John Stuart Mill", link: "/exploration?character=mill" },
      { name: "Charlotte Perkins Gilman", link: "/exploration?character=gilman" },
    ],
    "virtue ethics": [
      { name: "Aristotle", link: "/exploration?character=aristotle" },
      { name: "Martha Nussbaum", link: "/exploration?character=nussbaum" },
    ],
    "care ethics": [
      { name: "Nel Noddings", link: "/exploration?character=noddings" },
      { name: "Joan Tronto", link: "/exploration?character=tronto" },
    ],
    contractualism: [
      { name: "John Rawls", link: "/exploration?character=rawls" },
      { name: "T.M. Scanlon", link: "/exploration?character=scanlon" },
    ],
    existentialism: [
      { name: "Jean-Paul Sartre", link: "/exploration?character=sartre" },
      { name: "Simone de Beauvoir", link: "/exploration?character=de-beauvoir" },
    ],
    pragmatism: [
      { name: "John Dewey", link: "/exploration?character=dewey" },
      { name: "Jane Addams", link: "/exploration?character=addams" },
    ],
    "feminist ethics": [
      { name: "Judith Butler", link: "/exploration?character=butler" },
      { name: "Sandra Harding", link: "/exploration?character=harding" },
    ],
  };

  const characters = school ? characterOptions[school.toLowerCase()] : [];

  if (!school || !characters?.length) {
    // Redirect to the school selection page if school or characters are invalid
    router.replace("/school-of-thought");
    return null;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        Choose Your Character for{" "}
        {school.replace(/\b\w/g, (char) => char.toUpperCase())}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {characters.map((character, index) => (
          <button
            key={index}
            onClick={() => router.push(character.link)}
            style={{
              padding: "15px",
              backgroundColor: "#333",
              color: "#ffcc00",
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.2s",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {character.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
