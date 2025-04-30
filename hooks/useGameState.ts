// hooks/useGameState.ts

import { useGameStore } from '@/game/state/gameStore';
import { GameState, GameActions } from '@/game/types'; // Import types

/**
 * Custom hook to access the global game state and actions.
 * This provides a convenient way for components to interact with the Zustand store.
 * @returns The current game state and actions.
 */
export const useGameState = (): GameState & GameActions => {
  const gameState = useGameStore();
  return gameState;
};