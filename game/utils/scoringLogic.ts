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

export type ScoreDebrief = {
  headline: string;
  summary: string;
  suggestions: string[];
};

export const generateScoreDebrief = (scores: PlayerState['scores']): ScoreDebrief => {
  const dominant = determineDominantAlignment(scores);

  if (dominant === 'neutral') {
    return {
      headline: 'Balanced Reasoning',
      summary:
        'Your choices distributed across multiple ethical lenses. That’s often realistic in AI ethics—real decisions mix consequences, duties/rights, and character-based considerations.',
      suggestions: [
        'On your next run, try committing to one lens for a full scenario to see what tradeoffs appear.',
        'When you choose, explicitly name the stakeholder you prioritize and the principle you are sacrificing.',
      ],
    };
  }

  if (dominant === 'utilitarian') {
    return {
      headline: 'Utilitarian Lean',
      summary:
        'You tended to prioritize outcomes and aggregate harm/benefit. This lens is powerful for safety, public welfare, and resource allocation decisions—but can underweight rights and fairness if not checked.',
      suggestions: [
        'Before finalizing a choice, ask: who bears the cost, and are harms distributed fairly?',
        'Try adding a “rights constraint” (consent, due process, dignity) even when net benefits look large.',
      ],
    };
  }

  if (dominant === 'deontological') {
    return {
      headline: 'Deontological Lean',
      summary:
        'You tended to prioritize duties, rules, and rights (e.g., privacy, consent, non-deception). This lens protects individuals from being treated as mere means—but can struggle when rules conflict or when outcomes are catastrophic.',
      suggestions: [
        'When duties conflict, state which duty is higher-priority and why.',
        'Stress-test your rule: would it still be acceptable if the outcome is very costly?',
      ],
    };
  }

  return {
    headline: 'Virtue Ethics Lean',
    summary:
      'You tended to prioritize character and the kind of institutions/people we become (e.g., integrity, humility, care, prudence). This lens is great for governance culture and long-term trust—but can be vague without concrete policies.',
    suggestions: [
      'Translate the virtue into a practice: audits, transparency norms, escalation paths, or red-team processes.',
      'Consider which incentives shape behavior—and redesign them to support the virtues you value.',
    ],
  };
};

// You can add more complex scoring functions here as the game develops,
// e.g., calculate points for specific choices, apply multipliers, handle penalties, etc.
// export const calculateChoicePoints = (choiceOutcome: string, scenarioState: any): PlayerState['scores'] => {
//   // Logic to determine point changes based on the choice and current game state
//   return { utilitarian: 0, deontological: 0, virtue: 0 };
// };