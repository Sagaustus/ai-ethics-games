"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#ffcc00",
        textAlign: "center",
        padding: "10px 20px",
      }}
    >
      <p>AI Ethics Game © 2024 | All Rights Reserved</p>
      <p>
        <a href="/terms" style={{ color: "#ffcc00", textDecoration: "none" }}>
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="/privacy" style={{ color: "#ffcc00", textDecoration: "none" }}>
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
