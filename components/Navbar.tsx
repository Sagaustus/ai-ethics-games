"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onSetTime: (time: number) => void; // Callback to set the timer
}

const Navbar: React.FC<NavbarProps> = ({ onSetTime }) => {
  const [timeInput, setTimeInput] = useState<string>("");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(e.target.value);
  };

  const handleSetTime = () => {
    const time = parseInt(timeInput, 10);
    if (!isNaN(time) && time > 0) {
      onSetTime(time);
      alert(`Timer set to ${time} seconds.`);
    } else {
      alert("Please enter a valid time in seconds.");
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px", color: "#ffcc00" }}>AI Ethics Game</h1>
      <div>
        <input
          type="number"
          placeholder="Set time (seconds)"
          value={timeInput}
          onChange={handleTimeChange}
          style={{
            marginRight: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSetTime}
          style={{
            padding: "5px 10px",
            backgroundColor: "#ffcc00",
            color: "#333",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Set Time
        </button>
      </div>
      <Link href="/exploration" style={{ color: "#ffcc00", textDecoration: "none" }}>
        Exploration
      </Link>
    </nav>
  );
};

export default Navbar;
