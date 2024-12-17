export const selfDrivingDilemmaScenario = {
    title: "selfDrivingDilemmaScenrio",
    description:
      "The 'trolley problem' in real-world AI applications. How should self-driving cars make life-and-death decisions during unavoidable accidents?",
    link: "selfDrivingDilemma",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.11_-_A_conceptual_image_representing_Autonomy_in_AI_ethics._The_image_features_a_self-driving_car_on_a_futuristic_road_with_glowing_digital_pathways_hig_mk1jxc.webp",
    tags: ["Autonomy", "Ethics", "Technology"],
    exploration: [
      {
        text: `
          You are an AI engineer responsible for programming a self-driving car's decision-making algorithm.
          During unavoidable accidents, the car must decide whom to prioritize: **passengers, pedestrians, or the elderly**.
          Your decision will shape the ethics of AI-driven vehicles. What will you do?`,
        choices: [
          {
            text: "Program the car to prioritize passengers' safety.",
            outcome: "prioritizePassengers",
          },
          {
            text: "Program the car to prioritize pedestrians' safety.",
            outcome: "prioritizePedestrians",
          },
          {
            text: "Program the car to prioritize the elderly in accidents.",
            outcome: "prioritizeElderly",
          },
          {
            text: "Push for a randomized decision to avoid moral responsibility.",
            outcome: "randomizedDecision",
          },
        ],
      },
      {
        outcome: "prioritizePassengers",
        text: `
          You decide to prioritize the safety of the car's passengers. While this reassures buyers and manufacturers,
          public trust erodes as pedestrians feel undervalued and unsafe.`,
        choices: [
          {
            text: "Defend the decision, citing the car's responsibility to its users.",
            outcome: "defendPassengers",
          },
          {
            text: "Reassess the algorithm to balance pedestrian safety.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "prioritizePedestrians",
        text: `
          You program the car to prioritize pedestrians' safety. This decision earns praise for valuing public welfare,
          but manufacturers fear that fewer people will purchase self-driving cars due to safety concerns.`,
        choices: [
          {
            text: "Defend the decision, arguing public safety is more important.",
            outcome: "defendPedestrians",
          },
          {
            text: "Offer an option for customizable safety preferences.",
            outcome: "customizePreferences",
          },
        ],
      },
      {
        outcome: "prioritizeElderly",
        text: `
          You prioritize saving the elderly during accidents, arguing for respect and compassion for society's most vulnerable.
          However, critics argue that valuing one group over others is ethically problematic.`,
        choices: [
          {
            text: "Defend the decision as a moral choice to protect the vulnerable.",
            outcome: "defendElderly",
          },
          {
            text: "Reassess the algorithm to include fairness principles.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "randomizedDecision",
        text: `
          You decide to program a randomized decision algorithm to avoid assigning moral responsibility.
          Public backlash is swift, with critics arguing that randomness is unethical and undermines trust in AI.`,
        choices: [
          {
            text: "Defend the decision as the fairest way to avoid bias.",
            outcome: "defendRandomness",
          },
          {
            text: "Reassess and create a more principled decision-making process.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "defendPassengers",
        text: `
          You defend prioritizing passengers, arguing that users trust the car to protect them first.
          However, public outrage persists, and pedestrian safety remains a key concern.`,
        choices: [
          {
            text: "Revisit the algorithm to include pedestrian protections.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "defendPedestrians",
        text: `
          You defend prioritizing pedestrians, arguing that public safety should always come first.
          This earns strong support from the public, but self-driving car sales drop significantly.`,
        choices: [
          {
            text: "Develop a public awareness campaign to explain the decision.",
            outcome: "publicAwareness",
          },
        ],
      },
      {
        outcome: "defendElderly",
        text: `
          You defend prioritizing the elderly, stating that protecting the most vulnerable is a moral obligation.
          While some agree, others argue this approach unfairly values certain lives over others.`,
        choices: [
          {
            text: "Reassess the algorithm to incorporate fairness.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "defendRandomness",
        text: `
          You argue that randomness avoids bias and moral favoritism. However, public trust in AI-driven vehicles declines sharply,
          as people view the decision as careless and unethical.`,
        choices: [
          {
            text: "Reassess the algorithm to introduce ethical principles.",
            outcome: "reassessAlgorithm",
          },
        ],
      },
      {
        outcome: "reassessAlgorithm",
        text: `
          You decide to reassess the algorithm and incorporate **ethical frameworks** such as fairness, utilitarianism, and transparency.
          The updated system balances passenger and pedestrian safety while ensuring transparency in decision-making.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to the argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "customizePreferences",
        text: `
          You offer car owners the option to **customize safety preferences** based on their values. While this innovation increases sales,
          it raises concerns about individual responsibility for ethical decisions.`,
        choices: [
          {
            text: "Develop guidelines to standardize ethical safety preferences.",
            outcome: "standardizePreferences",
          },
        ],
      },
      {
        outcome: "publicAwareness",
        text: `
          You launch a public awareness campaign explaining the importance of prioritizing pedestrians for societal safety.
          Over time, public trust improves, and self-driving car adoption grows.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to the argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "standardizePreferences",
        text: `
          You develop guidelines for ethical safety preferences to ensure consistency across vehicles.
          This balanced approach increases trust in self-driving cars and promotes fairness in accident scenarios.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to the argument phase.",
            outcome: "end",
          },
        ],
      },
    ],
    endMessage: `
      Thank you for exploring the ethical dilemmas of self-driving car programming.
      Your decisions have shaped the future of AI in transportation and public trust.
      Would you like to play again or explore another scenario?`,
  };