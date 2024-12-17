"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import Timer from "./Timer";
import ScoreDashboard from "./ScoreDashboard";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState<number | null>(null); // Track the timer value

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
        {time !== null && (
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
            <Timer initialTime={time} />
            <ScoreDashboard />
          </div>
        )}

        {/* Render children components */}
        <main style={{ width: "100%", maxWidth: "1200px", marginTop: "60px" }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
