import { create } from 'zustand';

// Define the types for the game state
// We'll refine these types later in game/types/index.ts
interface PlayerState {
  schoolOfThought?: string;
  character?: string;
  scores: {
    utilitarian: number;
    deontological: number;
    virtue: number;
    // Add other scoring categories as needed
  };
  /**
   * Persist progress information for each scenario so features like the
   * Rewind page can display completed decisions.
   */
  scenarioProgress: {
    [scenarioSlug: string]: {
      completed: boolean;
      highestScore: number;
      decisions: { stepIndex: number; choiceOutcome: string }[];
    };
  };
  // Add other player-specific state like inventory, achievements, etc.
}

interface ScenarioState {
  currentScenarioSlug?: string;
  currentStepIndex: number;
  scenarioProgress: {
    [scenarioSlug: string]: {
      completed: boolean;
      highestScore: number;
      // Store decisions made in this scenario for 'Rewind' or state restoration
      decisions: { stepIndex: number; choiceOutcome: string }[];
    };
  };
  // Add other scenario-specific state
}

interface GameState {
  player: PlayerState;
  scenario: ScenarioState;
  isLoading: boolean;
  error: string | null;
  // Add other global game state like game status (e.g., ' idle', 'in-game', 'game-over')
  // and potentially UI state related to overlays or modals
}

// Define the actions that can modify the state
interface GameActions {
  setSchoolOfThought: (school: string) => void;
  setCharacter: (character: string) => void;
  updateScore: (type: 'utilitarian' | 'deontological' | 'virtue', amount: number) => void;
  setCurrentScenario: (slug: string) => void;
  nextScenarioStep: (choiceOutcome: string) => void;
  // Add more actions for starting/ending scenarios, saving/loading, etc.
}

// Combine the state and actions into the store type
type GameStore = GameState & GameActions;

// Create the Zustand store
export const useGameStore = create<GameStore>((set) => ({
  // Initial state
  player: {
    scores: {
      utilitarian: 0,
      deontological: 0,
      virtue: 0,
    },
    scenarioProgress: {},
  },
  scenario: {
    currentStepIndex: 0,
    scenarioProgress: {},
  },
  isLoading: false,
  error: null,

  // Actions
  setSchoolOfThought: (school) => set(state => ({ player: { ...state.player, schoolOfThought: school } })),
  setCharacter: (character) => set(state => ({ player: { ...state.player, character: character } })),
  updateScore: (type, amount) => set(state => ({
    player: {
      ...state.player,
      scores: {
        ...state.player.scores,
        [type]: state.player.scores[type] + amount,
      },
    },
  })),
  setCurrentScenario: (slug) => set({ scenario: { ...useGameStore.getState().scenario, currentScenarioSlug: slug, currentStepIndex: 0 } }),
  nextScenarioStep: (choiceOutcome) => set(state => {
      const currentScenarioSlug = state.scenario.currentScenarioSlug;
      if (!currentScenarioSlug) {
          console.error("Cannot proceed to next step: no scenario selected.");
          return state; // Return current state if no scenario is selected
      }

      const currentProgress = state.scenario.scenarioProgress[currentScenarioSlug] || { completed: false, highestScore: 0, decisions: [] };
      const updatedDecisions = [...currentProgress.decisions, { stepIndex: state.scenario.currentStepIndex, choiceOutcome }];

      return {
          scenario: {
              ...state.scenario,
              currentStepIndex: state.scenario.currentStepIndex + 1,
               scenarioProgress: {
                  ...state.scenario.scenarioProgress,
                  [currentScenarioSlug]: {
                      ...currentProgress,
                      decisions: updatedDecisions,
                  },
              },
          },
          player: {
              ...state.player,
              scenarioProgress: {
                  ...state.player.scenarioProgress,
                  [currentScenarioSlug]: {
                      ...currentProgress,
                      decisions: updatedDecisions,
                  },
              },
          },
      };
  }),
  // Implement other actions here
}));

// Optional: Hydration for server-side rendering if needed
// This is a more advanced topic and might require additional setup
// import { useLayoutEffect } from 'react';
// const useHydration = () => {
//   useLayoutEffect(() => {
//     useGameStore.persist.rehydrate();
//   }, []);
// };
// export { useHydration };