Here's the updated README with the **Game Flow** section included:

---

# AI Ethics Game

This is a visual and interactive game designed to teach players about the ethical implications of Artificial Intelligence. Players choose a school of thought, a philosopher character, and engage in scenario-based argumentation battles. Points are earned through presenting arguments and counterarguments, progressing through different phases of the game.

---

## Features

- **Dynamic School of Thought Selection**: Players choose from various philosophical schools of thought.
- **Character Customization**: Select a character representing a specific school of thought.
- **Scenario Exploration**: Navigate ethical scenarios in AI, such as autonomous driving and health applications.
- **Argument Phase**: Engage in debates with opponents from other schools of thought.
- **Round Outcomes and Progression**: Earn points, advance to new opponents, and explore diverse perspectives.
- **Immersive Visuals and Audio**: Images and sounds for an engaging learning experience.

---

## File Structure

```plaintext
ai-ethics-game/
├── app/
│   ├── layout.tsx               # Layout component for consistent page structure
│   ├── page.tsx                 # Landing page (Start screen)
│   ├── school-of-thought/       # Directory for school of thought selection
│   │   ├── page.tsx             # School of Thought Selection page
│   ├── character-selection/     # Directory for character selection
│   │   ├── [school]/            # Dynamic routes for school of thought
│   │   │   ├── page.tsx         # Character Selection page
│   ├── scenario-selection/      # Directory for scenario selection
│   │   ├── page.tsx             # Scenario Selection page
│   ├── exploration/             # Directory for scenario exploration
│   │   ├── [scenario]/          # Dynamic routes for each scenario
│   │   │   ├── page.tsx         # Exploration phase page
│   ├── argument-phase/          # Directory for argument phase
│   │   ├── page.tsx             # Argument Phase page
│   ├── round-outcome/           # Directory for round outcomes
│   │   ├── page.tsx             # Round Outcome page
│   ├── end-game/                # Directory for end-game logic
│   │   ├── page.tsx             # End Game page
├── components/                  # Reusable components
│   ├── Navbar.tsx               # Navigation bar (if needed)
│   ├── Footer.tsx               # Footer component
│   ├── ScenarioCard.tsx         # Card component for scenarios
│   ├── CharacterCard.tsx        # Card component for characters
│   ├── DecisionTree.tsx         # Component for decision-tree interactions
│   ├── TriviaQuiz.tsx           # Component for trivia challenges
│   ├── DebateBox.tsx            # Component for AI debates
├── public/                      # Publicly accessible assets
│   ├── images/                  # Static images
│   │   ├── school-icons/        # Icons for schools of thought
│   │   ├── scenario-images/     # Images for scenarios
│   │   ├── background.jpg       # Background image for the game
│   ├── videos/                  # Video assets
│   ├── audio/                   # Audio files for scenarios and phases
├── styles/                      # Custom CSS or Tailwind CSS files
│   ├── globals.css              # Global styles for the project
│   ├── scenario.css             # Styles for scenarios
│   ├── components.css           # Shared styles for components
├── utils/                       # Utility functions
│   ├── stateManager.ts          # Manage global state (e.g., user progress)
│   ├── fetchScenarioData.ts     # Fetch or import scenario details
│   ├── scoringLogic.ts          # Logic for scoring and progression
├── .next/                       # Generated during builds (ignored in git)
├── .vscode/                     # IDE settings (optional)
├── node_modules/                # Installed dependencies
├── .gitignore                   # Files and directories to ignore in git
├── next.config.js               # Next.js configuration file
├── package.json                 # Project metadata and dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration (if used)
```

---
/
├── app/
│   ├── argument-phase/
│   │   ├── page.tsx
│   ├── character-selection/
│   │   ├── [school]/
│   │   │   ├── page.tsx
│   │   │   ├── generateStaticParams.ts
│   ├── end-game/
│   │   ├── page.tsx
│   ├── exploration/
│   │   ├── [scenario]/
│   │   │   ├── page.tsx
│   │   │   ├── params.ts
│   │   ├── page.tsx
│   ├── opponent-selection/
│   │   ├── page.tsx
│   ├── round-outcome/
│   │   ├── page.tsx
│   ├── scenario-selection/
│   │   ├── page.tsx
│   ├── school-of-thought/
│   │   ├── page.tsx
│   ├── _not-found/
│   │   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
├── components/
│   ├── CharacterCard.tsx
│   ├── ExplorationPhase.tsx
│   ├── Navbar.tsx
│   ├── ScenarioCard.tsx
│   ├── ScenarioExplorer.tsx
│   ├── ScenarioSelection.tsx
├── context/
│   ├── GameProgressContext.tsx
├── data/
│   ├── scenarios/
│   │   ├── algorithmicDoctorScenario.ts
│   │   ├── artificialArtistScenario.ts
│   │   ├── biasedJudgeScenario.ts
│   │   ├── carbonFootprintScenario.ts
│   │   ├── censoredWorldScenario.ts
│   │   ├── consciousMachineScenario.ts
│   │   ├── ethicalSoldierScenario.ts
│   │   ├── faceOfDeceptionScenario.ts
│   │   ├── joblessFutureScenario.ts
│   │   ├── learningMachineScenario.ts
│   │   ├── minorityReportScenario.ts
│   │   ├── perfectPartnerScenario.ts
│   │   ├── rogueCoderScenario.ts
│   │   ├── selfDrivingDilemmaScenario.ts
│   │   ├── watchfulEyeScenario.ts
│   ├── scenarios.ts
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── placeholder.png
├── styles/
│   ├── globals.css
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md


## Game Flow

1. **Start Screen**:
   - Players are welcomed to the game and introduced to its purpose.
   - Navigation to the next phase starts here.

2. **School of Thought Selection**:
   - Players choose a school of thought (e.g., Utilitarianism, Deontology, etc.).
   - The selection determines the character options available next.

3. **Character Selection**:
   - Players select a philosopher or character that represents their chosen school of thought.
   - Each character has a brief introduction explaining their philosophy.

4. **Scenario Selection**:
   - Players choose a scenario (e.g., autonomous driving, healthcare AI) to explore.
   - Scenarios are presented as cards with brief descriptions.

5. **Exploration Phase**:
   - Players explore the ethical dimensions of the selected scenario.
   - Interactive decision trees or trivia challenges provide context.

6. **Argument Phase**:
   - Players debate against an opponent representing a different school of thought.
   - Arguments and counterarguments are presented visually.

7. **Round Outcome**:
   - Players receive feedback on their performance and earn points based on the strength of their arguments.
   - Progression to the next opponent or scenario is based on the outcome.

8. **End Game**:
   - Players reach the conclusion of the game, where their total points and performance are summarised.
   - Reflections on ethical implications and learnings are presented.

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-ethics-game.git
   cd ai-ethics-game
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## Usage

- Navigate through the start screen to select a school of thought and character.
- Explore ethical scenarios and make decisions.
- Engage in debates to defend your chosen school of thought.
- Progress through levels and unlock new scenarios.

---

## Technologies Used

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS
- **State Management**: Custom state management using TypeScript utilities
- **Assets**: Cloudinary for images and Heroku for hosting

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details. 

---

## Acknowledgements

Special thanks to the Prof Geoffrey Rockwell whose AI Ethics Bowl and Course Content inspired the ethical dilemmas and debates within the game.