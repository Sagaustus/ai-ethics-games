// game/state/gameStore.ts
import { create } from 'zustand';

interface PlayerState {
  schoolOfThought?: string;
  character?: string;
  scores: {
    utilitarian: number;
    deontological: number;
    virtue: number;
  };
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
  timer: number;
  comboMeter: number;
}

interface GameState {
  player: PlayerState;
  scenario: ScenarioState;
  isLoading: boolean;
  error: string | null;
  gameStatus: 'idle' | 'menu' | 'in-game-exploration' | 'in-game-argument' | 'game-over' | 'paused';
  activeModal: 'none' | 'mutation' | 'voting' | 'plotTwist' | 'achievement' | 'levelUp' | 'unlockOverlay' | string;
}

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
}

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>((set) => ({
  // Initial state
  player: {
    scores: { utilitarian: 0, deontological: 0, virtue: 0 },
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

  setTimer: (seconds) => set((state) => ({
    scenario: { ...state.scenario, timer: seconds }
  })),

  setComboMeter: (value) => set((state) => ({
    scenario: { ...state.scenario, comboMeter: value }
  })),
}));
