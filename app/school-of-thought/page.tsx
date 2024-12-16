"use client"; // Mark this as a Client Component

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const schoolsOfThought = [
  {
    name: "Deontology",
    description: "Ethical principles based on rules and duties.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734210289/DALL_E_2024-12-14_14.03.31_-_An_image_representing_Deontologists_featuring_a_scholarly_figure_in_a_library_setting_surrounded_by_books_and_symbols_of_duty_justice_and_morality_gfbxkt.webp",
    link: "/character-selection/Deontology",
  },
  {
    name: "Utilitarianism",
    description: "Maximizing happiness and reducing suffering.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209918/DALL_E_2024-12-14_13.52.11_-_A_futuristic_cityscape_representing_Utilitarianism_with_robots_efficiently_serving_humans_in_a_harmonious_technologically_advanced_environment._The_aw5tq8.webp",
    link: "/character-selection/Utilitarianism",
  },
  {
    name: "Virtue Ethics",
    description: "Emphasizes moral character and virtues.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209918/DALL_E_2024-12-14_13.52.15_-_A_classical_Greek_academy_representing_Virtue_Ethics_featuring_a_grand_statue_of_Aristotle_surrounded_by_individuals_embodying_virtues_like_courage_pqux71.webp",
    link: "/character-selection/Virtue%20Ethics", // Ensure spaces are encoded
  },
  {
    name: "Care Ethics",
    description: "Focusing on relationships and care.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209918/DALL_E_2024-12-14_13.52.17_-_A_warm_and_intimate_scene_representing_Care_Ethics_showing_a_diverse_group_of_individuals_supporting_and_caring_for_each_other._The_setting_includes_jj9czi.webp",
    link: "/character-selection/Care%20Ethics",
  },
  {
    name: "Contractualism",
    description: "Ethics based on agreements and fairness.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209919/DALL_E_2024-12-14_13.52.20_-_A_formal_debate_hall_representing_Contractualism_with_individuals_in_professional_attire_engaging_in_structured_discussions_and_negotiations._The_sce_yk8xwo.webp",
    link: "/character-selection/Contractualism",
  },
  {
    name: "Existentialism",
    description: "Ethics shaped by individual freedom and choices.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209919/DALL_E_2024-12-14_13.52.22_-_A_surreal_and_vast_landscape_representing_Existentialism_featuring_a_lone_thinker_sitting_on_a_rock_under_a_dramatic_sky_with_abstract_elements._The_jt5w2z.webp",
    link: "/character-selection/Existentialism",
  },
  {
    name: "Pragmatism",
    description: "Practical approaches to solving ethical dilemmas.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209920/DALL_E_2024-12-14_13.52.24_-_A_workshop_or_laboratory_scene_representing_Pragmatism_featuring_individuals_actively_experimenting_and_solving_practical_problems._The_setting_inclu_juvnmr.webp",
    link: "/character-selection/Pragmatism",
  },
  {
    name: "Feminist Ethics",
    description: "Advocates for equality and justice.",
    image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734209920/DALL_E_2024-12-14_13.52.28_-_A_vibrant_public_space_representing_Feminist_Ethics_with_people_from_diverse_backgrounds_advocating_for_equality_and_justice._The_scene_includes_bann_di21pi.webp",
    link: "/character-selection/Feminist%20Ethics",
  },
];


const SchoolOfThoughtSelection: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link); // Use Next.js router for navigation
  };

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
        Choose a School of Thought
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          margin: "20px auto",
          maxWidth: "1200px",
        }}
      >
        {schoolsOfThought.map((school) => (
          <div
            key={school.name}
            onClick={() => handleCardClick(school.link)}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#333",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Image
              src={school.image}
              alt={school.name}
              width={300}
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
              priority // Ensure images load faster
            />
            <div
              style={{
                padding: "15px",
                color: "#ffcc00",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {school.name}
            </div>
            <p style={{ padding: "10px", fontSize: "14px", color: "#ddd" }}>
              {school.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolOfThoughtSelection;
