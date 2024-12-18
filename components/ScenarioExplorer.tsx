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

import React, { useState } from "react";

export interface ScenarioExplorerProps {
  scenario: {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
    exploration: {
      text: string;
      choices: { text: string; outcome: string }[];
      outcome?: string;
    }[];
    endMessage: string;
  };
  character: string;
}

const ScenarioExplorer: React.FC<ScenarioExplorerProps> = ({ scenario, character }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Track current exploration step
  const currentStep = scenario.exploration[currentStepIndex];

  const handleChoiceClick = (outcome: string) => {
    // Find the next step based on the selected choice outcome
    const nextStepIndex = scenario.exploration.findIndex(
      (step) => step.outcome === outcome
    );

    if (nextStepIndex !== -1) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      setCurrentStepIndex(scenario.exploration.length - 1); // Go to the end if no match
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Scenario Title and Description */}
      <h1 style={{ color: "#ffcc00", marginBottom: "10px" }}>{scenario.title}</h1>
      <p style={{ color: "#ccc", fontStyle: "italic", marginBottom: "20px" }}>
        {scenario.description}
      </p>
      <p style={{ color: "#ddd" }}>
        <strong>Character:</strong> {character}
      </p>

      {/* Scenario Image */}
      <img
        src={scenario.image}
        alt={scenario.title}
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Current Exploration Step */}
      <div style={{ margin: "20px auto", maxWidth: "800px" }}>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>{currentStep.text}</p>

        {/* Choices */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {currentStep.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice.outcome)}
              style={{
                padding: "12px",
                fontSize: "16px",
                color: "#1a1a1a",
                backgroundColor: "#ffcc00",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6b800")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffcc00")
              }
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

      {/* End Message */}
      {currentStepIndex === scenario.exploration.length - 1 && (
        <div style={{ marginTop: "30px", color: "#ffcc00", fontSize: "20px" }}>
          <p>{scenario.endMessage}</p>
        </div>
      )}
    </div>
    
  );
};

export default ScenarioExplorer;

