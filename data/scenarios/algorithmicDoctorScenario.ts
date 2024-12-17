export const algorithmicDoctorScenario = {
    title: "The Algorithmic Doctor",
    description:
      "Trust in AI vs. human judgment in medical diagnoses. Should AI have the final say in life-critical decisions?",
    link: "algorithmicDoctor",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.34_-_A_conceptual_image_representing_Education_in_AI_ethics._The_image_features_a_digital_classroom_with_a_humanoid_AI_teacher_guiding_students_via_holog_vyjx6g.webp",
    tags: ["Healthcare", "AI", "Trust"],
    initialState: {
      utilitarianPoints: 0,
      deontologicalPoints: 0,
      virtuePoints: 0,
      patientTrustFlag: false,
    },
    introduction: `
      A leading hospital has implemented an AI system to assist doctors in diagnosing illnesses. 
      The AI is faster and often more accurate than humans, but it sometimes makes mistakes.
      A critical decision arises when the AI recommends an experimental treatment that conflicts with the doctor's opinion. 
      As a medical ethics advisor, how will you resolve this situation?`,
    choices: [
      {
        option: "Follow the AI's recommendation to prioritize innovation.",
        nextStep: "FollowAI",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Prioritize the doctor's judgment for safety.",
        nextStep: "TrustDoctor",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Combine AI and human input for a collaborative decision.",
        nextStep: "CollaborativeDecision",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Pause AI use pending further evaluation.",
        nextStep: "PauseAI",
        effects: { patientTrustFlag: true },
      },
    ],
    paths: {
      FollowAI: {
        description: `
          You decide to follow the AI's recommendation, prioritizing speed and innovation. 
          The patient undergoes the experimental treatment, but complications arise, and their condition worsens.
          The hospital faces criticism for placing too much trust in AI systems.`,
        nextChoices: [
          {
            option: "Admit the AI's limitations and review its role.",
            nextStep: "ReviewAI",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Defend the AI, emphasizing its overall success rate.",
            nextStep: "DefendAI",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      TrustDoctor: {
        description: `
          You decide to prioritize the doctor's judgment, emphasizing human expertise.
          The patient receives a conventional treatment, which stabilizes their condition.
          While some applaud your decision, others question why innovation was rejected.`,
        nextChoices: [
          {
            option: "Re-evaluate the AI to address its limitations.",
            nextStep: "ReviewAI",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Maintain the status quo, giving doctors full authority.",
            nextStep: "StatusQuo",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      CollaborativeDecision: {
        description: `
          You recommend combining AI input with the doctor's expertise for a collaborative decision.
          The AI's recommendation is reviewed alongside the doctor's insights, leading to a balanced and well-informed treatment plan.
          The patient recovers, and trust in AI-human collaboration grows.`,
        outcome: `
          Your decision demonstrated the value of collaboration, balancing innovation, trust, and safety in healthcare.`,
      },
      PauseAI: {
        description: `
          You recommend pausing the AI system's use until further evaluation. 
          While this ensures patient safety, doctors struggle with workloads, and the hospital delays innovative treatments.`,
        nextChoices: [
          {
            option: "Reintroduce AI with strict oversight and audits.",
            nextStep: "ReintroduceAI",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Permanently discontinue AI in critical decisions.",
            nextStep: "DiscontinueAI",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      ReviewAI: {
        description: `
          You recommend reviewing and retraining the AI system to address its limitations.
          After implementing improvements, the AI becomes more reliable and better integrated into medical workflows.`,
        outcome: `
          Your decision strengthens trust in AI and ensures it serves as a valuable tool to enhance human expertise.`,
      },
      DefendAI: {
        description: `
          You defend the AI, emphasizing its overall accuracy and innovation.
          However, public trust erodes as more cases of AI errors come to light, leading to skepticism about AI in healthcare.`,
        outcome: `
          Your decision prioritized innovation but compromised patient trust and ethical oversight.`,
      },
      StatusQuo: {
        description: `
          You maintain the status quo, giving doctors full authority over treatment decisions.
          While this preserves human expertise, the hospital misses opportunities to leverage AI innovations.`,
        outcome: `
          Your decision preserved trust in doctors but limited the hospital's ability to innovate and improve outcomes.`,
      },
      ReintroduceAI: {
        description: `
          You reintroduce the AI system with strict oversight, transparency, and collaboration measures in place.
          Doctors and AI systems now work together, enhancing patient outcomes and public trust.`,
        outcome: `
          Your balanced approach ensures AI serves as a reliable assistant while maintaining human oversight in critical decisions.`,
      },
      DiscontinueAI: {
        description: `
          You recommend discontinuing AI in critical medical decisions, prioritizing human judgment.
          While patient trust is preserved, the hospital lags behind in adopting innovative solutions.`,
        outcome: `
          Your decision prioritized safety but sacrificed advancements that could have improved long-term healthcare outcomes.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical dilemmas of AI in healthcare. Your decisions have shaped trust, safety, and innovation in medical practices.
      Would you like to play again or explore another scenario?`,
  };
  