"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const CharacterSelection: React.FC = () => {
  const router = useRouter();
  const { school } = useParams<{ school: string }>();

  // Define the specific character names for each school of thought
  const characterOptions: Record<string, { name: string; link: string }[]> = {
    deontology: [
      { name: "Immanuel Kant", link: "/scenario-selection?character=kant" },
      { name: "Elizabeth Anscombe", link: "/scenario-selection?character=anscombe" },
    ],
    utilitarianism: [
      { name: "John Stuart Mill", link: "/scenario-selection?character=mill" },
      { name: "Charlotte Perkins Gilman", link: "/scenario-selection?character=gilman" },
    ],
    "virtue-ethics": [
      { name: "Aristotle", link: "/scenario-selection?character=aristotle" },
      { name: "Martha Nussbaum", link: "/scenario-selection?character=nussbaum" },
    ],
    "care-ethics": [
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
    "feminist-ethics": [
      { name: "Judith Butler", link: "/scenario-selection?character=butler" },
      { name: "Sandra Harding", link: "/scenario-selection?character=harding" },
    ],
  };

  // Get the characters for the selected school of thought
  const characters = characterOptions[school?.toLowerCase() || ""] || [];

  // If no valid school of thought, display error
  if (!characters.length) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
          Invalid School of Thought
        </h1>
        <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
          Please return to the school selection screen and choose a valid school of thought.
        </p>
        <button
          onClick={() => router.push("/school-of-thought")}
          style={{
            padding: "15px",
            backgroundColor: "#ffcc00",
            color: "#1a1a1a",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Back to Selection
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        You have chosen {school.replace("-", " ")}.
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        Now, choose your character:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
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
              width: "300px",
              textAlign: "center",
            }}
          >
            {character.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
