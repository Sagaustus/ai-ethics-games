"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const OpponentSelection: React.FC = () => {
    const searchParams = useSearchParams();
    const school = searchParams.get("school");

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
                Opponent Selection
            </h1>
            <p style={{ fontSize: "18px", color: "#ddd" }}>
                You are representing {school}. Choose your opponent.
            </p>
            <button
                onClick={() => (window.location.href = `/argument-phase?opponent=Utilitarianism`)}
                style={{
                    padding: "15px 30px",
                    backgroundColor: "#ffcc00",
                    color: "#1a1a1a",
                    fontSize: "20px",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    marginTop: "20px",
                }}
            >
                Choose Utilitarianism
            </button>
        </div>
    );
};

const OpponentSelectionWrapper: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OpponentSelection />
        </Suspense>
    );
};

export default OpponentSelectionWrapper;
