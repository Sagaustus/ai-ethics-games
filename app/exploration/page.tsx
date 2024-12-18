// "use client";

// import React from "react";
// import Link from "next/link";
// import { scenarios } from "@/data/scenarios";

// const ExplorationPage: React.FC = () => {
//   const scenarioKeys = Object.keys(scenarios);

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#1a1a1a",
//         color: "white",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h1 style={{ color: "#ffcc00", textAlign: "center" }}>
//         Explore AI Ethics Scenarios
//       </h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//           marginTop: "20px",
//         }}
//       >
//         {scenarioKeys.map((key) => {
//           const scenario = scenarios[key as keyof typeof scenarios];
//           const scenarioPath = key.replace("Scenario", "");

//           return (
//             <Link key={key} href={`/exploration/${scenarioPath}`}>
//               <div
//                 style={{
//                   cursor: "pointer",
//                   backgroundColor: "#333",
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//                 }}
//               >
//                 <img
//                   src={scenario.image}
//                   alt={scenario.title}
//                   style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                 />
//                 <div style={{ padding: "10px" }}>
//                   <h2 style={{ fontSize: "18px", color: "#ffcc00" }}>
//                     {scenario.title}
//                   </h2>
//                   <p style={{ fontSize: "14px", color: "#ddd" }}>
//                     {scenario.description}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ExplorationPage;

"use client";

import React from "react";
import { scenarios } from "@/data/scenarios";
import Link from "next/link";

const ExplorationHome: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "20px" }}>
      <h1 style={{ color: "#ffcc00", textAlign: "center" }}>Exploration Scenarios</h1>
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        {Object.keys(scenarios).map((key) => {
          const scenario = scenarios[key];
          return (
            <li key={key} style={{ margin: "10px 0" }}>
              <Link href={scenario.link} style={{ color: "#ffcc00", textDecoration: "none" }}>
                {scenario.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExplorationHome;
