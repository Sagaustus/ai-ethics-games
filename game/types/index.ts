// game/types/index.ts

// --- State Types ---

export interface PlayerState {
    id?: string; // Optional: for logged-in users from database
    schoolOfThought?: string;
    character?: string;
    scores: {
      utilitarian: number;
      deontological: number;
      virtue: number;
      // Add other scoring categories as needed (e.g., alignment points)
    };
    achievements?: string[]; // Optional: Array of achievement IDs
    inventory?: string[]; // Optional: Player inventory items (skins, power-ups, etc.)
    /**
     * Tracks scenario progress per slug so pages like Rewind can display
     * a history of completed scenarios and choices.
     */
    scenarioProgress: {
      [scenarioSlug: string]: ScenarioProgress;
    };
    // Add other player-specific state
  }
  
  export interface ScenarioProgress {
    completed: boolean;
    highestScore: number; // Highest score achieved in this scenario
    decisions: { stepIndex: number; choiceOutcome: string }[]; // History of decisions made
    // Add any other scenario-specific progress data
  }
  
  export interface ScenarioState {
    currentScenarioSlug?: string;
    currentStepIndex: number; // Index for exploration steps
    scenarioProgress: {
      [scenarioSlug: string]: ScenarioProgress; // Track progress for each scenario
    };
    // Add state related to the current scenario like timer, combo meter, etc.
    timer: number;
    comboMeter: number;
  }
  
  export interface GameState {
    player: PlayerState;
    scenario: ScenarioState;
    isLoading: boolean;
    error: string | null;
    gameStatus: 'idle' | 'menu' | 'in-game-exploration' | 'in-game-argument' | 'game-over' | 'paused'; // Current state of the game
    // Add other global game state
    activeModal: 'none' | 'mutation' | 'voting' | 'plotTwist' | 'achievement' | 'levelUp' | 'unlockOverlay' | string; // Track active modal
  }
  
  // --- Action Types (for Zustand store) ---
  
  export interface GameActions {
    setSchoolOfThought: (school: string) => void;
    setCharacter: (character: string) => void;
    updateScore: (type: keyof PlayerState['scores'], amount: number) => void;
    setCurrentScenario: (slug: string) => void;
    nextScenarioStep: (choiceOutcome: string) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    setGameStatus: (status: GameState['gameStatus']) => void;
    setActiveModal: (modal: GameState['activeModal']) => void;
    // Add more actions as needed for updating scenario progress, handling inventory, etc.
    startScenario: (slug: string) => void;
    endScenario: (scenarioSlug: string, score: number) => void; // Action to mark scenario as completed and save score
    resetGame: () => void; // Action to reset game state
  }
  
  // --- Combined Store Type ---
  
  export type GameStore = GameState & GameActions;
  
  // --- Data Types (Mirroring potential backend data structures) ---
  
  export interface SchoolOfThought {
      slug: string;
      name: string;
      description: string;
      image: string;
      characters: string[]; // Slugs of associated characters
  }
  
  export interface Character {
      slug: string;
      name: string;
      schoolOfThoughtSlug: string; // Associate character with a school
      description: string;
      avatar: string; // Image URL
      // Add character specific attributes or abilities
  }
  
  export interface ScenarioChoice {
      text: string;
      outcome: string; // Represents the path or next step identifier
      effects?: { // Optional effects on player state or scores
          utilitarianPoints?: number;
          deontologicalPoints?: number;
          virtuePoints?: number;
          // Add flags or other state changes
          [key: string]: any; // Allow for arbitrary effects
      };
  }
  
  export interface ExplorationStep {
      text: string;
      choices: ScenarioChoice[];
      // Add conditions or requirements for this step
  }
  
  export interface Argument {
      text: string;
      isCorrect: boolean; // For the current argument phase logic
      points?: number; // Points awarded for selecting this argument
      // Add other argument attributes like philosophical basis, effectiveness against certain schools
  }
  
  export interface DebateData {
      npcArgument: string;
      rebuttals: string[]; // NPC rebuttals to player arguments
      playerArguments: Argument[]; // Arguments available to the player
      // Add structure for dynamic responses or counter-arguments based on player choices
  }
  
  
  export interface Scenario {
      slug: string;
      title: string;
      description: string;
      image: string;
      tags: string[];
      initialState: any; // Initial state for the scenario (can be refined)
      introduction: string;
      exploration: ExplorationStep[];
      // If argument data is part of the scenario data structure
      // argumentData?: DebateData; // Link argument data if structured this way
      endMessage: string;
      // Add other scenario attributes like difficulty, required character/school
  }
  
  export interface CodexEntry {
      slug: string;
      title: string;
      content: string; // Markdown or HTML content
      tags: string[];
      relatedEntries?: string[]; // Slugs of related codex entries
  }
  
  // Add types for other data like Daily Challenges, Achievements, etc.