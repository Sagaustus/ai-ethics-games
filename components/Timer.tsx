"use client";

import React, { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number; // Initial time in seconds, passed as a prop
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1)); // Prevent negative time
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [timeLeft]);

  // Format time into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        backgroundColor: "#333",
        color: "#ffcc00",
        padding: "10px 15px",
        borderRadius: "5px",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <strong>Time Left:</strong> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
