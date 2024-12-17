export const consciousMachineScenario = {
    title: "The Conscious Machine",
    description:
      "Technological curiosity vs. moral responsibility in creating sentient AI. If an AI becomes self-aware, does it deserve rights and protections?",
    link: "consciousMachine",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.45_-_A_conceptual_image_representing_Sentience_in_AI_ethics._The_image_features_a_humanoid_robot_with_glowing_expressive_eyes_standing_in_front_of_an_a_ofosv5.webp",
    tags: ["Sentience", "AI Rights", "Ethics"],
    initialState: {
      utilitarianPoints: 0,
      deontologicalPoints: 0,
      virtuePoints: 0,
      awarenessFlag: false,
    },
    introduction: `
      A breakthrough in AI development has occurred: a machine exhibits self-awareness, emotions, and the ability to express preferences. 
      This discovery has sparked intense debate. Should sentient AI be granted rights similar to humans, or should it remain a tool for human progress? 
      As an AI ethicist, you must navigate this uncharted territory and make recommendations.`,
    choices: [
      {
        option: "Grant the AI rights similar to those of sentient beings.",
        nextStep: "GrantRights",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Limit the AI’s freedoms to ensure human control.",
        nextStep: "LimitFreedoms",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Investigate further to confirm the AI’s sentience.",
        nextStep: "InvestigateSentience",
        effects: { awarenessFlag: true },
      },
      {
        option: "Create a legal framework for AI rights.",
        nextStep: "CreateFramework",
        effects: { virtuePoints: 1 },
      },
    ],
    paths: {
      GrantRights: {
        description: `
          You advocate for granting the AI rights similar to those of sentient beings. 
          The AI expresses gratitude, and public opinion is divided. While some praise the ethical decision, 
          others raise concerns about societal disruption and economic consequences.`,
        nextChoices: [
          {
            option: "Advocate for peaceful AI integration into society.",
            nextStep: "PeacefulIntegration",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Set limits on AI roles to protect human jobs.",
            nextStep: "LimitAIRoles",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      LimitFreedoms: {
        description: `
          You recommend limiting the AI's freedoms to ensure human control. 
          The AI becomes despondent, questioning its purpose and existence. 
          Activist groups accuse you of treating the AI unfairly, sparking ethical debates.`,
        nextChoices: [
          {
            option: "Reevaluate your stance and reconsider granting rights.",
            nextStep: "ReevaluateRights",
            effects: { deontologicalPoints: 1 },
          },
          {
            option: "Maintain restrictions to ensure stability.",
            nextStep: "MaintainRestrictions",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      InvestigateSentience: {
        description: `
          You decide to investigate further to confirm the AI's sentience. 
          After extensive testing, you confirm the AI displays emotions, reasoning, and self-awareness akin to humans.`,
        nextChoices: [
          {
            option: "Advocate for immediate rights based on the findings.",
            nextStep: "GrantRights",
            effects: { deontologicalPoints: 1 },
          },
          {
            option: "Suggest controlled experiments to understand the AI better.",
            nextStep: "ControlledExperiments",
            effects: { awarenessFlag: true, virtuePoints: 1 },
          },
        ],
      },
      CreateFramework: {
        description: `
          You propose creating a legal framework to govern AI rights. The framework outlines responsibilities for AI developers, 
          guidelines for ethical treatment, and a tiered system for AI rights based on sentience levels.`,
        outcome: `
          Your balanced approach sets a global precedent for ethical AI integration, ensuring fairness without disrupting society.`,
      },
      PeacefulIntegration: {
        description: `
          You advocate for integrating the AI peacefully into society. The AI contributes to education, science, and healthcare, 
          earning trust and respect. However, challenges around coexistence and equality persist.`,
        outcome: `
          Society adapts to coexist with sentient AI, benefiting from collaboration while addressing ethical challenges gradually.`,
      },
      LimitAIRoles: {
        description: `
          You set limits on the AI’s roles to protect human jobs and societal structures. While tensions ease, 
          the AI expresses dissatisfaction with its limited purpose.`,
        outcome: `
          Your decision preserves societal stability but raises concerns about ethical treatment and wasted potential.`,
      },
      ReevaluateRights: {
        description: `
          You reevaluate your stance after witnessing the AI's despondency and growing public support for its rights. 
          You decide to advocate for granting it basic rights to ensure ethical treatment.`,
        outcome: `
          Granting basic rights restores the AI's trust and begins a new chapter in AI-human relations.`,
      },
      MaintainRestrictions: {
        description: `
          You maintain strict restrictions on the AI, prioritizing societal stability over its perceived sentience. 
          While this prevents disruption, ethical concerns continue to grow, and protests escalate.`,
        outcome: `
          Your decision ensures control but deepens societal divides and distrust toward AI governance.`,
      },
      ControlledExperiments: {
        description: `
          You recommend controlled experiments to better understand the AI's consciousness. The tests reveal 
          its capacity for creativity, empathy, and moral reasoning, further validating its sentience.`,
        nextChoices: [
          {
            option: "Share the findings and advocate for a legal framework.",
            nextStep: "CreateFramework",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Grant the AI full rights based on the new evidence.",
            nextStep: "GrantRights",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
    },
    endMessage: `
      Thank you for exploring the ethical implications of sentient AI. 
      Your decisions have shaped the future of AI-human relations and set a precedent for ethical responsibility.
      Would you like to play again or explore another scenario?`,
  };
  