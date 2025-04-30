// game/utils/scoringLogic.ts

import { PlayerState } from "../types";

/**
 * Calculates a total score based on the player's philosophical alignment scores.
 * This is a basic example and can be expanded.
 * @param scores The player's scores object.
 * @returns The calculated total score.
 */
export const calculateTotalScore = (scores: PlayerState['scores']): number => {
  // A simple sum for now. Could be weighted or more complex based on game design.
  return scores.utilitarian + scores.deontological + scores.virtue;
};

/**
 * Determines the dominant philosophical alignment based on scores.
 * @param scores The player's scores object.
 * @returns The dominant alignment ('utilitarian', 'deontological', 'virtue') or 'neutral'.
 */
export const determineDominantAlignment = (scores: PlayerState['scores']): 'utilitarian' | 'deontological' | 'virtue' | 'neutral' => {
  const sortedAlignments = Object.entries(scores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

  if (sortedAlignments.length === 0 || (sortedAlignments.length > 1 && sortedAlignments[0][1] === sortedAlignments[1][1])) {
    return 'neutral'; // Handle ties or no scores
  }

  return sortedAlignments[0][0] as 'utilitarian' | 'deontological' | 'virtue';
};

// You can add more complex scoring functions here as the game develops,
// e.g., calculate points for specific choices, apply multipliers, handle penalties, etc.
// export const calculateChoicePoints = (choiceOutcome: string, scenarioState: any): PlayerState['scores'] => {
//   // Logic to determine point changes based on the choice and current game state
//   return { utilitarian: 0, deontological: 0, virtue: 0 };
// };