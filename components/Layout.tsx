"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Timer from "./Timer";
import ScoreDashboard from "./ScoreDashboard";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar for global navigation */}
      <Navbar />

      {/* Main content area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Timer and Score Dashboard */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            display: "flex",
            gap: "20px",
            zIndex: 100,
          }}
        >
          <Timer />
          <ScoreDashboard />
        </div>

        {/* Render children components */}
        <main style={{ width: "100%", maxWidth: "1200px", marginTop: "60px" }}>
          {children}
        </main>
      </div>

      {/* Footer for additional navigation or branding */}
      <Footer />
    </div>
  );
};

export default Layout;
