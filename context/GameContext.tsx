// app/context/GameContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface GameContextType {
  avatar: string;
  setAvatar: (avatar: string) => void;

  gender: string;
  setGender: (gender: string) => void;

  outfit: string;
  setOutfit: (outfit: string) => void;

  ethicsClass: string;
  setEthicsClass: (ethicsClass: string) => void;

  school: string;
  setSchool: (school: string) => void;

  scenario: string;
  setScenario: (scenario: string) => void;

  twists: string[];
  addTwist: (twist: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatar] = useState<string>('/img/avatar1.png');
  const [gender, setGender] = useState<string>('Male');
  const [outfit, setOutfit] = useState<string>('Robe');
  const [ethicsClass, setEthicsClass] = useState<string>('Utilitarian');
  const [school, setSchool] = useState<string>('');
  const [scenario, setScenario] = useState<string>('');
  const [twists, setTwists] = useState<string[]>([]);

  const addTwist = (twist: string) => setTwists((prev) => [...prev, twist]);

  return (
    <GameContext.Provider
      value={{
        avatar,
        setAvatar,
        gender,
        setGender,
        outfit,
        setOutfit,
        ethicsClass,
        setEthicsClass,
        school,
        setSchool,
        scenario,
        setScenario,
        twists,
        addTwist,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a <GameProvider>');
  }
  return context;
}
