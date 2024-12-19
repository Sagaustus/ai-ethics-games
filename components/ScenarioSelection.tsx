// import React from "react";
// import ScenarioCard from "./ScenarioCard";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const scenarios = [
//   {
//     title: "watchfulEyeScenario",
//     description: "Balancing national security and individual privacy.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.08_-_A_conceptual_image_representing_Surveillance_in_AI_ethics._The_image_features_a_futuristic_cityscape_with_a_large_all-seeing_digital_eye_hovering_a_ragbcq.webp",
//     link: "/exploration/the-watchful-eye",
//   },
//   {
//     title: "SelfDrivingDilemmaScenario",
//     description: "The 'trolley problem' in real-world AI applications.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.11_-_A_conceptual_image_representing_Autonomy_in_AI_ethics._The_image_features_a_self-driving_car_on_a_futuristic_road_with_glowing_digital_pathways_hig_mk1jxc.webp",
//     link: "/exploration/the-self-driving-dilemma",
//   },
//   {
//     title: "The Face of Deception",
//     description: "Free expression vs. preventing harm in deepfakes.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.14_-_A_conceptual_image_representing_Deception_in_AI_ethics._The_image_features_a_humanoid_robot_with_a_distorted_glitching_face_symbolizing_deepfakes_fzsf4v.webp",
//     link: "/exploration/the-face-of-deception",
//   },
//   {
//     title: "theBiasedJudgeScenario",
//     description: "Fairness vs. efficiency in algorithmic sentencing.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.04_-_A_conceptual_image_representing_Bias_in_AI_ethics_featuring_a_robotic_scale_with_one_side_holding_diverse_human_figures_and_the_other_side_filled_w_zyvnar.webp",
//     link: "/exploration/the-biased-judge",
//   },
//   {
//     title: "The Algorithmic Doctor",
//     description: "Trust in AI vs. human judgment in healthcare.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.34_-_A_conceptual_image_representing_Education_in_AI_ethics._The_image_features_a_digital_classroom_with_a_humanoid_AI_teacher_guiding_students_via_holog_vyjx6g.webp",
//     link: "/exploration/the-algorithmic-doctor",
//   },
//   {
//     title: "The Jobless Future",
//     description: "Economic efficiency vs. social welfare in automation.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.37_-_A_conceptual_image_representing_Prediction_in_AI_ethics._The_image_features_a_holographic_globe_with_predictive_analytics_visualizations_such_as_cr_ir7v3u.webp",
//     link: "/exploration/the-jobless-future",
//   },
//   {
//     title: "The Rogue Coder",
//     description: "Personal ambition vs. societal responsibility in AI development.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.32_-_A_conceptual_image_representing_Creativity_in_AI_ethics._The_image_features_an_AI_robot_holding_a_paintbrush_painting_a_vibrant_canvas_with_abstrac_tbivmh.webp",
//     link: "/exploration/the-rogue-coder",
//   },
//   {
//     title: "The Ethical Soldier",
//     description: "Human accountability vs. AI precision in warfare.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.26_-_A_conceptual_image_representing_Warfare_in_AI_ethics._The_image_features_a_battlefield_with_autonomous_drones_and_robots_contrasted_against_human_s_yo5nvs.webp",
//     link: "/exploration/the-ethical-soldier",
//   },
//   {
//     title: "The Censored World",
//     description: "Freedom of expression vs. harm prevention in AI moderation.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
//     link: "/exploration/the-censored-world",
//   },
//   {
//     title: "The Artificial Artist",
//     description: "Technological progress vs. human originality in creativity.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.39_-_A_conceptual_image_representing_Sustainability_in_AI_ethics._The_image_features_a_futuristic_city_powered_by_AI_with_green_technologies_like_wind_tu_abiz0v.webp",
//     link: "/exploration/the-artificial-artist",
//   },
//   {
//     title: "The Learning Machine",
//     description: "Customisation vs. standardisation in AI-based education.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.24_-_A_conceptual_image_representing_Ethics_in_AI_development._The_image_features_a_humanoid_robot_holding_a_glowing_ethical_code_book_surrounded_by_hol_dchxfz.webp",
//     link: "/exploration/the-learning-machine",
//   },
//   {
//     title: "The Minority Report",
//     description: "Prevention vs. presumption of innocence in predictive policing.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.17_-_A_conceptual_image_representing_Bias_in_AI_ethics._The_image_features_a_robotic_scale_balancing_on_one_side_diverse_human_figures_and_on_the_other_s_vt8frv.webp",
//     link: "/exploration/the-minority-report",
//   },
//   {
//     title: "The Carbon Footprint",
//     description: "Technological advancement vs. environmental sustainability.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.39_-_A_conceptual_image_representing_Sustainability_in_AI_ethics._The_image_features_a_futuristic_city_powered_by_AI_with_green_technologies_like_wind_tu_abiz0v.webp",
//     link: "/exploration/the-carbon-footprint",
//   },
//   {
//     title: "The Perfect Partner",
//     description: "AI-assisted happiness vs. authentic relationships.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.41_-_A_conceptual_image_representing_Relationships_in_AI_ethics._The_image_features_a_humanoid_robot_and_a_human_shaking_hands_symbolizing_partnership_a_p7pspq.webp",
//     link: "/exploration/the-perfect-partner",
//   },
//   {
//     title: "The Conscious Machine",
//     description: "Technological curiosity vs. moral responsibility in creating sentient AI.",
//     image:
//       "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.45_-_A_conceptual_image_representing_Sentience_in_AI_ethics._The_image_features_a_humanoid_robot_with_glowing_expressive_eyes_standing_in_front_of_an_a_ofosv5.webp",
//     link: "/exploration/the-conscious-machine",
//   },
// ];

// const ScenarioSelection: React.FC = () => {
//   const router = useRouter();

//   const handleScenarioClick = (link: string) => {
//     router.push(link);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#1a1a1a",
//         color: "white",
//         textAlign: "center",
//         padding: "20px",
//         minHeight: "100vh",
//       }}
//     >
//       <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
//         Choose a Scenario
//       </h1>

//       {/* Grid Layout for Cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "20px",
//           justifyContent: "center",
//           alignItems: "center",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {scenarios.map((scenario) => (
//           <div
//             key={scenario.title}
//             onClick={() => (window.location.href = scenario.link)}
//             style={{
//               cursor: "pointer",
//               borderRadius: "10px",
//               overflow: "hidden",
//               backgroundColor: "#333",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//               transition: "transform 0.2s",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1.0)")
//             }
//           >
//             <Image
//               src={scenario.image}
//               alt={scenario.title}
//               width={300}
//               height={200}
//               style={{ objectFit: "cover", width: "100%" }}
//             />
//             <div style={{ padding: "10px" }}>
//               <h2 style={{ fontSize: "18px", color: "#ffcc00" }}>
//                 {scenario.title}
//               </h2>
//               <p style={{ fontSize: "14px", color: "#ddd" }}>
//                 {scenario.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScenarioSelection;
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const ScenarioSelection: React.FC = () => {
  const searchParams = useSearchParams();
  const character = searchParams.get("character");

  if (!character) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
          textAlign: "center",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
          No Character Selected
        </h1>
        <p style={{ fontSize: "18px", color: "#ddd" }}>
          Please go back and select a character.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
        Scenarios for {character.charAt(0).toUpperCase() + character.slice(1)}
      </h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        Explore the scenarios related to {character}.
      </p>
    </div>
  );
};

export default ScenarioSelection;
