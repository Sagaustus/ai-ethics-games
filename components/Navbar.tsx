"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {
  onSetTime: (time: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSetTime }) => {
  const [timeInput, setTimeInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(e.target.value);
    setError("");
  };

  const handleSetTime = () => {
    const time = parseInt(timeInput, 10);
    if (!isNaN(time) && time > 0) {
      onSetTime(time);
      setError("");
    } else {
      setError("Please enter a valid time in seconds.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>AI Ethics Game</h1>
      <div>
        <input
          type="number"
          placeholder="Set time (seconds)"
          value={timeInput}
          onChange={handleTimeChange}
          className={styles.input}
        />
        <button onClick={handleSetTime} className={styles.button}>
          Set Time
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <Link href="/exploration" style={{ color: "#ffcc00", textDecoration: "none" }}>
        Exploration
      </Link>
    </nav>
  );
};

export default Navbar;
