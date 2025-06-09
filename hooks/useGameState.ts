// hooks/useGameState.ts

import { useGameStore } from '@/game/state/gameStore'

/**
 * Returns the entire game store
 * Let TypeScript infer the exact return type from useGameStore
 */
export const useGameState = () => useGameStore()
