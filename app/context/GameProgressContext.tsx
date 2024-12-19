"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface GameProgressContextProps {
  progress: number; // Current progress in the game
  setProgress: (progress: number) => void; // Function to update progress
}

const GameProgressContext = createContext<GameProgressContextProps | undefined>(undefined);

export const GameProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<number>(0); // Initial progress state

  return (
    <GameProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </GameProgressContext.Provider>
  );
};

export const useGameProgress = () => {
  const context = useContext(GameProgressContext);
  if (!context) {
    throw new Error("useGameProgress must be used within a GameProgressProvider");
  }
  return context;
};
