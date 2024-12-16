"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "10px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          color: "#ffcc00",
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        AI Ethics Game
      </h1>
      <nav>
        <button
          style={{ marginRight: "10px", background: "none", color: "#ffcc00", border: "none", cursor: "pointer" }}
          onClick={() => router.push("/school-of-thought")}
        >
          Schools of Thought
        </button>
        <button
          style={{ marginRight: "10px", background: "none", color: "#ffcc00", border: "none", cursor: "pointer" }}
          onClick={() => router.push("/scenario-selection")}
        >
          Scenarios
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
