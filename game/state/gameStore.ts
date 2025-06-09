// game/state/gameStore.ts
import { create } from 'zustand';

interface PlayerState {
  /** Unique identifier for this player */
  id: string;
  schoolOfThought?: string;
  character?: string;
  scores: {
    utilitarian: number;
    deontological: number;
    virtue: number;
  };
  /** Unlocked skin slugs */
  inventory: string[];
  /**
   * Progress for each scenario (for Rewind, etc.)
   */
  scenarioProgress: Record<
    string,
    { completed: boolean; highestScore: number; decisions: { stepIndex: number; choiceOutcome: string }[] }
  >;
}

interface ScenarioState {
  currentScenarioSlug?: string;
  currentStepIndex: number;
  scenarioProgress: Record<
    string,
    { completed: boolean; highestScore: number; decisions: { stepIndex: number; choiceOutcome: string }[] }
  >;
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
  /** Game phases */
  gameStatus: 'idle' | 'menu' | 'in-game-exploration' | 'in-game-argument' | 'game-over' | 'paused';
  /** Which modal, if any, is open */
  activeModal: 'none' | 'mutation' | 'voting' | 'plotTwist' | 'achievement' | 'levelUp' | 'unlockOverlay' | string;
}

interface GameActions {
  setPlayerId: (id: string) => void;
  setSchoolOfThought: (school: string) => void;
  setCharacter: (character: string) => void;
  updateScore: (type: keyof PlayerState['scores'], amount: number) => void;
  setCurrentScenario: (slug: string) => void;
  nextScenarioStep: (choiceOutcome: string) => void;
  setGameStatus: (status: GameState['gameStatus']) => void;
  setActiveModal: (modal: GameState['activeModal']) => void;
  setTimer: (seconds: number) => void;
  setComboMeter: (value: number) => void;
  unlockSkin: (slug: string) => void;
  resetGame: () => void;
}

type GameStore = GameState & GameActions;

const initialState: GameState = {
  player: {
    id: '',
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

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,

  setPlayerId: (id) => set((s) => ({ player: { ...s.player, id } })),

  setSchoolOfThought: (school) => set((s) => ({ player: { ...s.player, schoolOfThought: school } })),

  setCharacter: (character) => set((s) => ({ player: { ...s.player, character } })),

  updateScore: (type, amount) =>
    set((s) => ({
      player: {
        ...s.player,
        scores: { ...s.player.scores, [type]: s.player.scores[type] + amount },
      },
    })),

  setCurrentScenario: (slug) => set((s) => ({ scenario: { ...s.scenario, currentScenarioSlug: slug, currentStepIndex: 0 } })),

  nextScenarioStep: (choiceOutcome) =>
    set((s) => {
      const slug = s.scenario.currentScenarioSlug;
      if (!slug) return s;
      const curr = s.scenario.scenarioProgress[slug] || { completed: false, highestScore: 0, decisions: [] };
      const updated = [...curr.decisions, { stepIndex: s.scenario.currentStepIndex, choiceOutcome }];
      return {
        scenario: {
          ...s.scenario,
          currentStepIndex: s.scenario.currentStepIndex + 1,
          scenarioProgress: { ...s.scenario.scenarioProgress, [slug]: { ...curr, decisions: updated } },
        },
        player: {
          ...s.player,
          scenarioProgress: { ...s.player.scenarioProgress, [slug]: { ...curr, decisions: updated } },
        },
      };
    }),

  setGameStatus: (status) => set({ gameStatus: status }),

  setActiveModal: (modal) => set({ activeModal: modal }),

  setTimer: (seconds) => set((s) => ({ scenario: { ...s.scenario, timer: seconds } })),

  setComboMeter: (value) => set((s) => ({ scenario: { ...s.scenario, comboMeter: value } })),

  unlockSkin: (slug) =>
    set((s) => ({
      player: {
        ...s.player,
        inventory: s.player.inventory.includes(slug) ? s.player.inventory : [...s.player.inventory, slug],
      },
    })),

  resetGame: () => set(() => ({ ...initialState })),
}));
