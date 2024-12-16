"use client";

import React from "react";

const ScoreDashboard: React.FC<{ score?: number }> = ({ score = 0 }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "#333",
        color: "#ffcc00",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <strong>Score:</strong> {score}
    </div>
  );
};

export default ScoreDashboard;
