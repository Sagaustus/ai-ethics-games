// game/state/gameStore.ts
import { create } from 'zustand';

// --- State types ---
interface PlayerState {
  schoolOfThought?: string;
  character?: string;
  scores: {
    utilitarian: number;
    deontological: number;
    virtue: number;
  };
  /** List of unlocked items (e.g., skin slugs) */
  inventory: string[];
  /**
   * Persist progress information for each scenario so features like Rewind can display completed decisions.
   */
  scenarioProgress: {
    [scenarioSlug: string]: {
      completed: boolean;
      highestScore: number;
      decisions: { stepIndex: number; choiceOutcome: string }[];
    };
  };
}

interface ScenarioState {
  currentScenarioSlug?: string;
  currentStepIndex: number;
  scenarioProgress: {
    [scenarioSlug: string]: {
      completed: boolean;
      highestScore: number;
      decisions: { stepIndex: number; choiceOutcome: string }[];
    };
  };
  /** Countdown timer for timed scenarios */
  timer: number;
  /** Tracks a combo meter for argument chains */
  comboMeter: number;
}

interface GameState {
  player: PlayerState;
  scenario: ScenarioState;
  isLoading: boolean;
  error: string | null;
  /** Phases: before menu, exploration, argument, game-over, etc. */
  gameStatus:
    | 'idle'
    | 'menu'
    | 'in-game-exploration'
    | 'in-game-argument'
    | 'game-over'
    | 'paused';
  /** Which UI modal (if any) is open */
  activeModal:
    | 'none'
    | 'mutation'
    | 'voting'
    | 'plotTwist'
    | 'achievement'
    | 'levelUp'
    | 'unlockOverlay'
    | string;
}

// --- Actions ---
interface GameActions {
  setSchoolOfThought: (school: string) => void;
  setCharacter: (character: string) => void;
  updateScore: (type: 'utilitarian' | 'deontological' | 'virtue', amount: number) => void;
  setCurrentScenario: (slug: string) => void;
  nextScenarioStep: (choiceOutcome: string) => void;
  setGameStatus: (status: GameState['gameStatus']) => void;
  setActiveModal: (modal: GameState['activeModal']) => void;
  setTimer: (seconds: number) => void;
  setComboMeter: (value: number) => void;
  /** Add a skin slug to the player's inventory if not already unlocked */
  unlockSkin: (slug: string) => void;
  /** Reset all game state back to initial defaults */
  resetGame: () => void;
}

type GameStore = GameState & GameActions;

// --- Initial state for reuse ---
const initialState: GameState = {
  player: {
    scores: { utilitarian: 0, deontological: 0, virtue: 0 },
    inventory: [],
    scenarioProgress: {},
  },
  scenario: {
    currentStepIndex: 0,
    scenarioProgress: {},
    timer: 0,
    comboMeter: 0,
  },
  gameStatus: 'idle',
  activeModal: 'none',
  isLoading: false,
  error: null,
};

// --- Store creation ---
export const useGameStore = create<GameStore>((set) => ({
  // spread in initial state
  ...initialState,

  // Actions
  setSchoolOfThought: (school) =>
    set((state) => ({ player: { ...state.player, schoolOfThought: school } })),

  setCharacter: (character) =>
    set((state) => ({ player: { ...state.player, character } })),

  updateScore: (type, amount) =>
    set((state) => ({
      player: {
        ...state.player,
        scores: { ...state.player.scores, [type]: state.player.scores[type] + amount },
      },
    })),

  setCurrentScenario: (slug) =>
    set((state) => ({
      scenario: { ...state.scenario, currentScenarioSlug: slug, currentStepIndex: 0 },
    })),

  nextScenarioStep: (choiceOutcome) =>
    set((state) => {
      const slug = state.scenario.currentScenarioSlug;
      if (!slug) return state;
      const curr = state.scenario.scenarioProgress[slug] || {
        completed: false,
        highestScore: 0,
        decisions: [],
      };
      const updatedDecisions = [
        ...curr.decisions,
        { stepIndex: state.scenario.currentStepIndex, choiceOutcome },
      ];
      return {
        scenario: {
          ...state.scenario,
          currentStepIndex: state.scenario.currentStepIndex + 1,
          scenarioProgress: {
            ...state.scenario.scenarioProgress,
            [slug]: { ...curr, decisions: updatedDecisions },
          },
        },
        player: {
          ...state.player,
          scenarioProgress: {
            ...state.player.scenarioProgress,
            [slug]: { ...curr, decisions: updatedDecisions },
          },
        },
      };
    }),

  setGameStatus: (status) => set({ gameStatus: status }),

  setActiveModal: (modal) => set({ activeModal: modal }),

  setTimer: (seconds) => set((state) => ({ scenario: { ...state.scenario, timer: seconds } })),

  setComboMeter: (value) => set((state) => ({ scenario: { ...state.scenario, comboMeter: value } })),

  unlockSkin: (slug) =>
    set((state) => ({
      player: {
        ...state.player,
        inventory: state.player.inventory.includes(slug)
          ? state.player.inventory
          : [...state.player.inventory, slug],
      },
    })),

  resetGame: () => set(() => ({ ...initialState })),
}));
