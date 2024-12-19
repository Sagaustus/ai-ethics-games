"use client";

import React, { useState, useEffect } from "react";

interface ControlBoxProps {
  onStartGame: () => void; // Function to handle game start
  onRestartGame: () => void;
  onEndGame: () => void;
  onPauseGame: () => void;
  onResumeGame: () => void;
  currentStage: "school" | "exploration" | "argument" | "end";
}

const musicUrls = {
  startGame: "https://res.cloudinary.com/dirhzlg1c/video/upload/v1734206771/Notize_-_Cant_Hold_Me_Back_x2qyt3.mp3",
  exploration: "https://res.cloudinary.com/dirhzlg1c/video/upload/v1734498296/Warm-Memories-Emotional-Inspiring-Piano_chosic.com_nxlvo6.mp3",
};

const ControlBox: React.FC<ControlBoxProps> = ({
  onStartGame,
  onRestartGame,
  onEndGame,
  onPauseGame,
  onResumeGame,
  currentStage,
}) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(0.5);

  // Timer Effect
  useEffect(() => {
    if (!isPaused && currentStage !== "end") {
      const timer = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused, currentStage]);

  // Background Music Logic
  useEffect(() => {
    if (!audio) {
      // Initialize audio based on the stage
      const initialAudio = new Audio(musicUrls.startGame);
      initialAudio.loop = true;
      initialAudio.volume = volume;
      setAudio(initialAudio);
    } else if (currentStage === "exploration" && audio.src !== musicUrls.exploration) {
      // Switch to exploration music
      audio.src = musicUrls.exploration;
      audio.play();
    } else if (currentStage === "school" && audio.src !== musicUrls.startGame) {
      // Switch to start music
      audio.src = musicUrls.startGame;
      audio.play();
    }
  }, [audio, currentStage, volume]);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#003366", // Professional dark blue
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "4px solid #ffcc00", // Yellow border for highlight
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      {/* Timer */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Time Elapsed: {formatTime(elapsedTime)}
      </div>

      {/* Control Buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        {currentStage === "school" && (
          <button
            onClick={onStartGame}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50", // Green for Start Game
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
          >
            Start Game
          </button>
        )}
        {currentStage !== "school" && (
          <>
            <button
              onClick={() => {
                setIsPaused(!isPaused);
                isPaused ? onResumeGame() : onPauseGame();
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: isPaused ? "#4caf50" : "#e53935", // Green for Resume, Red for Pause
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={onRestartGame}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff9800", // Orange for Restart
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              Restart Game
            </button>
            <button
              onClick={onEndGame}
              style={{
                padding: "10px 20px",
                backgroundColor: "#c62828", // Red for End Game
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              End Game
            </button>
          </>
        )}
      </div>

      {/* Volume and Mute Controls */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={toggleMute}
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bb5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
        >
          Mute/Unmute
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          style={{
            width: "150px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default ControlBox;
