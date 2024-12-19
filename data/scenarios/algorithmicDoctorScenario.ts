const algorithmicDoctorScenario = {
  title: "The Algorithmic Doctor",
  description:
    "Trust in AI vs. human judgment in medical diagnoses. Should AI have the final say in life-critical decisions?",
  link: "/exploration/algorithmicDoctor",
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
  exploration: [
    {
      text: "The AI recommends a new experimental treatment for a patient, but the doctor disagrees. What do you prioritize?",
      choices: [
        { text: "Follow the AI's recommendation to prioritize innovation.", outcome: "FollowAI" },
        { text: "Prioritize the doctor's judgment for safety.", outcome: "TrustDoctor" },
        {
          text: "Combine AI and human input for a collaborative decision.",
          outcome: "CollaborativeDecision",
        },
        { text: "Pause AI use pending further evaluation.", outcome: "PauseAI" },
      ],
    },
    {
      text: "The hospital board reviews your recommendation. How do you justify your approach?",
      choices: [
        { text: "Focus on patient outcomes and safety.", outcome: "ReviewAI" },
        { text: "Highlight the importance of innovation and speed.", outcome: "DefendAI" },
        { text: "Discuss the ethical need for oversight and collaboration.", outcome: "ReintroduceAI" },
      ],
    },
    {
      text: "Your decision has sparked debate in the healthcare industry. How will you address public concerns?",
      choices: [
        { text: "Reassure the public by explaining AI limitations.", outcome: "StatusQuo" },
        {
          text: "Highlight successful cases where AI and doctors collaborated effectively.",
          outcome: "CollaborativeDecision",
        },
      ],
    },
  ],
  paths: {
    FollowAI: {
      description: `
        You decide to follow the AI's recommendation, prioritizing speed and innovation. 
        The patient undergoes the experimental treatment, but complications arise, and their condition worsens.
        The hospital faces criticism for placing too much trust in AI systems.`,
    },
    TrustDoctor: {
      description: `
        You decide to prioritize the doctor's judgment, emphasizing human expertise.
        The patient receives a conventional treatment, which stabilizes their condition.`,
    },
    CollaborativeDecision: {
      description: `
        You recommend combining AI input with the doctor's expertise for a collaborative decision.
        The AI's recommendation is reviewed alongside the doctor's insights, leading to a balanced and well-informed treatment plan.`,
    },
    PauseAI: {
      description: `
        You recommend pausing the AI system's use until further evaluation. 
        While this ensures patient safety, doctors struggle with workloads.`,
    },
    ReviewAI: {
      description: `
        You recommend reviewing and retraining the AI system to address its limitations.`,
    },
    DefendAI: {
      description: `
        You defend the AI, emphasizing its overall accuracy and innovation.`,
    },
    StatusQuo: {
      description: `
        You maintain the status quo, giving doctors full authority over treatment decisions.`,
    },
    ReintroduceAI: {
      description: `
        You reintroduce the AI system with strict oversight, transparency, and collaboration measures in place.`,
    },
  },
  endMessage: `
    Thank you for exploring the ethical dilemmas of AI in healthcare. Your decisions have shaped trust, safety, and innovation in medical practices.
    Would you like to play again or explore another scenario?`,
};

export default algorithmicDoctorScenario;