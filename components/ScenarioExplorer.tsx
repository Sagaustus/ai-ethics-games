// "use client";

// import React, { useState } from "react";

// interface Choice {
//   text: string;
//   outcome: string;
// }

// interface ExplorationStep {
//   text: string;
//   choices: Choice[];
// }

// interface Scenario {
//   title: string;
//   description: string;
//   exploration: ExplorationStep[];
// }

// export interface ScenarioExplorerProps {
//   scenario: Scenario; // Scenario data passed as a prop
//   character: string;  // Selected character passed as a prop
// }

// const ScenarioExplorer: React.FC<ScenarioExplorerProps> = ({
//   scenario,
//   character,
// }) => {
//   const [currentStage, setCurrentStage] = useState<number>(0);

//   const currentStep = scenario.exploration[currentStage];

//   const handleNext = (choiceOutcome: string) => {
//     if (currentStage < scenario.exploration.length - 1) {
//       setCurrentStage((prev) => prev + 1);
//     } else {
//       console.log("Exploration Complete:", choiceOutcome);
//       alert(`Exploration Complete! Final Outcome: ${choiceOutcome}`);
//     }
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#1a1a1a",
//         color: "white",
//         minHeight: "100vh",
//         padding: "20px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {/* Scenario Header */}
//       <h1 style={{ color: "#ffcc00", textAlign: "center", marginBottom: "10px" }}>
//         {scenario.title} - Exploration Phase
//       </h1>
//       <h2 style={{ color: "#ddd", textAlign: "center", marginBottom: "20px" }}>
//         Character: {character}
//       </h2>

//       {/* Exploration Step */}
//       <div
//         style={{
//           maxWidth: "800px",
//           textAlign: "justify",
//           lineHeight: "1.6",
//           marginBottom: "30px",
//         }}
//       >
//         <p style={{ fontSize: "18px" }}>
//           {currentStep?.text || "No content available for this step."}
//         </p>
//       </div>

//       {/* Display Choices */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           width: "100%",
//           maxWidth: "600px",
//         }}
//       >
//         {currentStep?.choices?.map((choice, index) => (
//           <button
//             key={index}
//             onClick={() => handleNext(choice.outcome)}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#333",
//               color: "#ffcc00",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//               textAlign: "center",
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor = "#555")
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = "#333")
//             }
//           >
//             {choice.text}
//           </button>
//         ))}
//       </div>

//       {/* Progress Indicator */}
//       <div style={{ marginTop: "20px", color: "#aaa" }}>
//         Step {currentStage + 1} of {scenario.exploration.length}
//       </div>
//     </div>
//   );
// };

// export default ScenarioExplorer;

"use client";

import React from "react";

export interface Choice {
  text: string;
  outcome: string;
}

export interface ExplorationStep {
  text: string;
  choices: Choice[];
}

export interface Scenario {
  title: string;
  description: string;
  exploration: ExplorationStep[];
}

export interface ScenarioExplorerProps {
  scenario: Scenario; // The scenario object to explore
  character: string;  // Character name from query
}

const ScenarioExplorer: React.FC<ScenarioExplorerProps> = ({
  scenario,
  character,
}) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "white", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#ffcc00" }}>
        {scenario.title} - Exploration Phase
      </h1>
      <h2 style={{ textAlign: "center", color: "#ddd" }}>Character: {character}</h2>
      <p style={{ marginTop: "20px", textAlign: "justify" }}>{scenario.description}</p>
      {/* Exploration content logic */}
    </div>
  );
};

export default ScenarioExplorer;
