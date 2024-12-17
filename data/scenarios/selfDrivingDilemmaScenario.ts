export const selfDrivingDilemmaScenario = {
  title: "The Self-Driving Dilemma",
  description:
    "The 'trolley problem' in real-world AI applications. How should self-driving cars make life-and-death decisions during unavoidable accidents?",
  link: "/exploration/selfDrivingDilemmaScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.11_-_A_conceptual_image_representing_Autonomy_in_AI_ethics._The_image_features_a_self-driving_car_on_a_futuristic_road_with_glowing_digital_pathways_hig_mk1jxc.webp",
  tags: ["Autonomy", "Ethics", "Technology"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    oversightFlag: false,
  },
  introduction: `
    You are an AI engineer responsible for programming a self-driving car's decision-making algorithm.
    During unavoidable accidents, the car must decide whom to prioritize: **passengers, pedestrians, or the elderly**.
    Your decision will shape the ethics of AI-driven vehicles. What will you do?`,
  
  exploration: [
    {
      text: `
        You must decide how the AI-driven car should prioritize lives during an unavoidable accident:
        Should the car prioritize the **passengers**, the **pedestrians**, or the **elderly**?`,
      choices: [
        { text: "Program the car to prioritize passengers' safety.", outcome: "prioritizePassengers" },
        { text: "Program the car to prioritize pedestrians' safety.", outcome: "prioritizePedestrians" },
        { text: "Program the car to prioritize the elderly in accidents.", outcome: "prioritizeElderly" },
        { text: "Push for a randomized decision to avoid moral responsibility.", outcome: "randomizedDecision" },
      ],
    },
    {
      outcome: "prioritizePassengers",
      text: `
        You prioritize the safety of the passengers. While this reassures buyers, public trust erodes as pedestrians feel devalued.`,
      choices: [
        { text: "Defend the decision, citing user trust.", outcome: "defendPassengers" },
        { text: "Reassess the algorithm to balance pedestrian safety.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "prioritizePedestrians",
      text: `
        You prioritize pedestrian safety. While this earns praise for valuing public welfare, manufacturers fear buyers will lose confidence in self-driving cars.`,
      choices: [
        { text: "Defend public safety as the priority.", outcome: "defendPedestrians" },
        { text: "Offer car owners customizable safety options.", outcome: "customizePreferences" },
      ],
    },
    {
      outcome: "prioritizeElderly",
      text: `
        You prioritize saving the elderly, respecting society's vulnerable members. However, critics argue this unfairly values one group over others.`,
      choices: [
        { text: "Defend the moral choice to protect the vulnerable.", outcome: "defendElderly" },
        { text: "Reassess the algorithm to promote fairness.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "randomizedDecision",
      text: `
        You program the car to make randomized decisions to avoid moral favoritism. However, public backlash grows as people view randomness as unethical.`,
      choices: [
        { text: "Defend randomness as the fairest choice.", outcome: "defendRandomness" },
        { text: "Reassess the algorithm to follow ethical principles.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "reassessAlgorithm",
      text: `
        You decide to reassess the algorithm, incorporating fairness, utilitarianism, and transparency into its decision-making framework.
        This balanced approach earns public trust and industry support.`,
      choices: [
        { text: "Conclude the exploration and proceed to the argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "defendPassengers",
      text: `
        You defend prioritizing passengers, emphasizing the car's responsibility to its users. Public outrage continues as pedestrians demand protections.`,
      choices: [
        { text: "Revisit the algorithm to address pedestrian safety concerns.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "defendPedestrians",
      text: `
        You defend prioritizing pedestrians, arguing public welfare is paramount. Public trust grows, but car sales decline as buyers feel unsafe.`,
      choices: [
        { text: "Launch a public awareness campaign to explain the decision.", outcome: "publicAwareness" },
      ],
    },
    {
      outcome: "defendElderly",
      text: `
        You defend prioritizing the elderly, citing compassion for the vulnerable. Critics demand a fairer system that values all lives equally.`,
      choices: [
        { text: "Reassess the algorithm to incorporate fairness.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "defendRandomness",
      text: `
        You defend randomness as a neutral and unbiased choice. Public trust in self-driving technology declines further due to ethical ambiguity.`,
      choices: [
        { text: "Reassess the algorithm to integrate ethical frameworks.", outcome: "reassessAlgorithm" },
      ],
    },
    {
      outcome: "customizePreferences",
      text: `
        You offer car owners the option to customize safety preferences. While popular with buyers, critics argue this shifts ethical responsibility onto individuals.`,
      choices: [
        { text: "Develop ethical guidelines for safety customization.", outcome: "standardizePreferences" },
      ],
    },
    {
      outcome: "publicAwareness",
      text: `
        You launch a public awareness campaign to explain the decision. Public trust improves, and self-driving car adoption begins to grow again.`,
      choices: [
        { text: "Conclude the exploration and proceed to the argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "standardizePreferences",
      text: `
        You develop ethical guidelines for safety customization to ensure consistency and fairness. Public trust in AI decision-making improves.`,
      choices: [
        { text: "Conclude the exploration and proceed to the argument phase.", outcome: "end" },
      ],
    },
  ],

  endMessage: `
    Thank you for exploring the ethical challenges of self-driving car programming.
    Your decisions have shaped the balance between passenger safety, public trust, and ethical AI development.
    Would you like to play again or explore another scenario?`,
};
