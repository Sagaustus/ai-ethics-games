// game/utils/argumentEvaluator.ts

import { Argument, PlayerState } from "../types";
import { DebateData } from "../types";

/**
 * Evaluates a player's chosen argument against the opponent's stance
 * based on philosophical schools and scenario context.
 * @param playerSchool The player's chosen school of thought slug.
 * @param opponentSchool The opponent's school of thought slug.
 * @param chosenArgument The argument chosen by the player.
 * @returns An object detailing the outcome of the argument.
 */
export const evaluateArgument = (
  playerSchool: string,
  opponentSchool: string,
    chosenArgument: Argument
): ArgumentEvaluationOutcome => {
  // This is a simplified evaluation logic.
  // A more advanced version could involve:
  // - Mapping arguments to specific philosophical principles
  // - Checking for consistency with the player's chosen school
  // - Comparing against the opponent's school and potential weaknesses
    // - Using richer rubric-based feedback
    // - Considering previous arguments in the debate

  let scoreChanges: PlayerState['scores'] = { utilitarian: 0, deontological: 0, virtue: 0 };
  let feedback = "Your argument was noted.";
  let isEffective = chosenArgument.isCorrect; // Basic check based on initial data structure

  // Example: Basic scoring based on argument correctness
  if (isEffective) {
      feedback = "That was an effective argument!";
      // Award points based on the player's school or argument type (example)
      if (playerSchool === 'utilitarian') scoreChanges.utilitarian += (chosenArgument.points || 10); // Use points if available, default to 10
      else if (playerSchool === 'deontological') scoreChanges.deontological += (chosenArgument.points || 10);
      else if (playerSchool === 'virtue') scoreChanges.virtue += (chosenArgument.points || 10);
      else { // Default points if school doesn't match or for neutral arguments
          scoreChanges.utilitarian += (chosenArgument.points || 5);
          scoreChanges.deontological += (chosenArgument.points || 5);
          scoreChanges.virtue += (chosenArgument.points || 5);
      }
  } else {
      feedback = "That argument wasn't very effective in this context.";
      // Optional: penalize for incorrect/ineffective arguments
      // scoreChanges[playerSchool.toLowerCase()] -= 5; // Example penalty
  }

    // TODO: incorporate opponent-school matchups in scoring.

  return {
    scoreChanges,
    feedback,
    isEffective,
    // Add other outcome details like impact on opponent, new debate state, etc.
  };
};

/**
 * Defines the outcome structure for an argument evaluation.
 */
export interface ArgumentEvaluationOutcome {
    scoreChanges: PlayerState['scores'];
    feedback: string;
    isEffective: boolean;
    // Add other properties as needed
}

// You could add other utility functions here for the argument phase,
// e.g., generating NPC responses, checking debate progress, etc.

/**
 * Selects an NPC rebuttal based on the player's argument and the scenario context.
 * This is a placeholder for more complex NPC logic.
 * @param playerArgument The argument the player just made.
 * @param debateData The data for the current debate.
 * @param scenarioContext The current scenario data.
 * @returns A relevant rebuttal string.
 */
export const generateNpcRebuttal = (
    playerArgument: Argument,
    debateData: DebateData, // Use the DebateData type
): string => {
    // Basic logic: just pick a random rebuttal for now.
    // Advanced logic could pick a rebuttal that specifically targets the player's argument
    // or aligns with the NPC's philosophical school.
     if (debateData.rebuttals && debateData.rebuttals.length > 0) {
         const randomIndex = Math.floor(Math.random() * debateData.rebuttals.length);
         return debateData.rebuttals[randomIndex];
     }
     return "Interesting point."; // Default response
};