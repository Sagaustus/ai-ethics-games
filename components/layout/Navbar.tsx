// components/layout/Navbar.tsx

'use client'; // This component will use a client-side hook (useGameState)

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'; // Import the CSS module
import { useGameState } from '@/hooks/useGameState'; // Import our custom hook for state
import { calculateTotalScore } from '@/game/utils/scoringLogic'; // Import utility for total score

/**
 * The main navigation bar for the application.
 * Displays game title, navigation links, and player info (e.g., score).
 */
const Navbar: React.FC = () => {
  const { player } = useGameState(); // Access player state

  // Calculate total score using the utility function
  const totalScore = calculateTotalScore(player.scores);

  return (
    <nav className={styles.navbar}>
      {/* Game Title / Logo */}
      <div className={styles.title}>
        <Link href="/">
          MindScape
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <Link href="/codex" className="mr-4">
          Codex
        </Link>
        <Link href="/ranking" className="mr-4">
          Ranking
        </Link>
        <Link href="/multiplayer/lobby" className="mr-4">
          Multiplayer
        </Link>
        {/* Add other navigation links as needed */}
      </div>

      {/* Player Info (Optional: display player name, score, etc.) */}
      <div>
        {/* Assuming player has an ID or name */}
        {player.id && <span className="mr-4">Player: {player.id}</span>}
        {player.scores && (
             <span className="mr-4">Score: {totalScore}</span>
        )}
        {/* Add other player-specific information here */}
      </div>
    </nav>
  );
};

export default Navbar;