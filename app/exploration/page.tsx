"use client";

import React from "react";
import { scenarioData } from "@/data/scenarios";
import Link from "next/link";

const ExplorationHome: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#ffcc00", textAlign: "center", marginBottom: "30px", fontSize: "32px" }}>
        Explore AI Ethics Scenarios
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {Object.keys(scenarioData).map((key) => {
          const scenario = scenarioData[key as keyof typeof scenarioData];
          return (
            <Link
              key={key}
              href={`/exploration/${key}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  backgroundColor: "#333",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
                }}
              >
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      color: "#ffcc00",
                      marginBottom: "10px",
                    }}
                  >
                    {scenario.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#ddd",
                    }}
                  >
                    {scenario.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorationHome;
