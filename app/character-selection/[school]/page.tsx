"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const CharacterSelection: React.FC = () => {
  const router = useRouter();
  const params = useParams();

  // Ensure the school parameter is normalized and safe
  const rawSchool = Array.isArray(params?.school) ? params.school[0] : params?.school || "";
  const school = decodeURIComponent(rawSchool)
    .trim()
    .toLowerCase()
    .replace(/-/g, " ");

  // Define character options for each school of thought
  const characterOptions: Record<string, { name: string; link: string }[]> = {
    deontology: [
      { name: "Immanuel Kant", link: "/scenario-selection?character=kant" },
      { name: "Elizabeth Anscombe", link: "/scenario-selection?character=anscombe" },
    ],
    utilitarianism: [
      { name: "John Stuart Mill", link: "/scenario-selection?character=mill" },
      { name: "Charlotte Perkins Gilman", link: "/scenario-selection?character=gilman" },
    ],
    "virtue ethics": [
      { name: "Aristotle", link: "/scenario-selection?character=aristotle" },
      { name: "Martha Nussbaum", link: "/scenario-selection?character=nussbaum" },
    ],
    "care ethics": [
      { name: "Nel Noddings", link: "/scenario-selection?character=noddings" },
      { name: "Joan Tronto", link: "/scenario-selection?character=tronto" },
    ],
    contractualism: [
      { name: "John Rawls", link: "/scenario-selection?character=rawls" },
      { name: "T.M. Scanlon", link: "/scenario-selection?character=scanlon" },
    ],
    existentialism: [
      { name: "Jean-Paul Sartre", link: "/scenario-selection?character=sartre" },
      { name: "Simone de Beauvoir", link: "/scenario-selection?character=de-beauvoir" },
    ],
    pragmatism: [
      { name: "John Dewey", link: "/scenario-selection?character=dewey" },
      { name: "Jane Addams", link: "/scenario-selection?character=addams" },
    ],
    "feminist ethics": [
      { name: "Judith Butler", link: "/scenario-selection?character=butler" },
      { name: "Sandra Harding", link: "/scenario-selection?character=harding" },
    ],
  };

  // Fetch characters for the selected school
  const characters = characterOptions[school] || [];

  // Redirect to "school-of-thought" if the school parameter is invalid
  useEffect(() => {
    if (!school || !characters.length) {
      router.replace("/school-of-thought"); // Use 'replace' to prevent back navigation to invalid pages
    }
  }, [school, characters, router]);

  // Early return to prevent rendering invalid content before redirect
  if (!characters.length) return null;

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
        You have chosen {school.replace(/\b\w/g, (char) => char.toUpperCase())}.
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        Now, choose your character:
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
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
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              transition: "transform 0.2s",
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
