import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "20px", color: "#ffcc00" }}>AI Ethics Game</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/">
          <a style={{ color: "#ffcc00", textDecoration: "none" }}>Home</a>
        </Link>
        <Link href="/scenario-selection">
          <a style={{ color: "#ffcc00", textDecoration: "none" }}>Scenarios</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
