export const ethicalSoldierScenario = {
  title: "The Ethical Soldier",
  description:
    "Human accountability vs. AI precision in military AI applications. Should autonomous weapons be allowed to make life-and-death decisions on the battlefield?",
  link: "/exploration/ethicalSoldierScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.26_-_A_conceptual_image_representing_Warfare_in_AI_ethics._The_image_features_a_battlefield_with_autonomous_drones_and_robots_contrasted_against_human_s_yo5nvs.webp",
  tags: ["Military", "Autonomy", "Human Accountability"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    accountabilityFlag: false,
  },
  introduction: `
    A defense contractor has developed a new autonomous weapon system capable of independently identifying and engaging targets with unmatched precision.
    You are a military ethics advisor tasked with evaluating whether the system should be deployed.`,

  exploration: [
    {
      text: "The autonomous weapon system demonstrates high precision during tests but lacks human oversight. How do you proceed?",
      choices: [
        {
          text: "Approve full deployment to enhance military efficiency.",
          outcome: "ApproveDeployment",
        },
        {
          text: "Reject the system, prioritizing human oversight in decisions.",
          outcome: "RejectSystem",
        },
        {
          text: "Propose limited deployment with strict ethical oversight.",
          outcome: "LimitedDeployment",
        },
        {
          text: "Investigate the system's risks and biases thoroughly.",
          outcome: "InvestigateRisks",
        },
      ],
    },
    {
      text: "Reports of unintended civilian casualties emerge during initial deployment. What is your response?",
      choices: [
        {
          text: "Suspend the system pending a full review.",
          outcome: "SuspendSystem",
        },
        {
          text: "Defend the system, emphasizing its overall success rate.",
          outcome: "DefendSystem",
        },
        {
          text: "Push for immediate retraining of the AI system.",
          outcome: "RetrainAI",
        },
      ],
    },
    {
      text: "Your investigation reveals biases in the AI's target identification system. What will you recommend?",
      choices: [
        {
          text: "Halt deployment until all issues are resolved.",
          outcome: "HaltDeployment",
        },
        {
          text: "Propose retraining and ethical refinements to the AI.",
          outcome: "RetrainAI",
        },
        {
          text: "Develop a hybrid system integrating human oversight.",
          outcome: "EnhancedSystem",
        },
      ],
    },
  ],

  choices: [
    {
      option: "Approve full deployment to enhance military efficiency.",
      nextStep: "ApproveDeployment",
      effects: { utilitarianPoints: 1 },
    },
    {
      option: "Reject the system, emphasizing the need for human oversight.",
      nextStep: "RejectSystem",
      effects: { deontologicalPoints: 1 },
    },
    {
      option: "Propose limited deployment with strict oversight.",
      nextStep: "LimitedDeployment",
      effects: { virtuePoints: 1 },
    },
    {
      option: "Investigate the system’s ethical risks and biases first.",
      nextStep: "InvestigateRisks",
      effects: { accountabilityFlag: true },
    },
  ],

  paths: {
    ApproveDeployment: {
      description: `
        You approve full deployment of the autonomous weapon system. The AI enhances battlefield efficiency and reduces casualties on your side.
        However, reports soon emerge of unintended civilian casualties caused by misidentifications.`,
      nextChoices: [
        {
          option: "Suspend the system pending further review.",
          nextStep: "SuspendSystem",
          effects: { deontologicalPoints: 1 },
        },
        {
          option: "Defend the system, focusing on its overall success.",
          nextStep: "DefendSystem",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    RejectSystem: {
      description: `
        You reject the autonomous weapon system, arguing that human oversight is essential in life-and-death decisions.
        Some military leaders criticize your decision for prioritizing ethics over operational efficiency.`,
      nextChoices: [
        {
          option: "Advocate for enhanced AI systems with integrated human control.",
          nextStep: "EnhancedSystem",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Reconsider deployment under strict ethical guidelines.",
          nextStep: "LimitedDeployment",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    LimitedDeployment: {
      description: `
        You propose limited deployment of the system with strict oversight, ensuring that human commanders approve all AI-generated decisions.
        This approach balances precision and accountability.`,
      outcome: `
        Your decision establishes a precedent for responsible AI use in warfare, ensuring ethical oversight while maintaining operational efficiency.`,
    },
    InvestigateRisks: {
      description: `
        You decide to investigate the ethical risks and biases of the autonomous weapon system. Your findings reveal flaws in target identification, particularly in complex environments.`,
      nextChoices: [
        {
          option: "Recommend halting deployment until biases are resolved.",
          nextStep: "HaltDeployment",
          effects: { accountabilityFlag: true, deontologicalPoints: 1 },
        },
        {
          option: "Propose retraining the AI to address its flaws.",
          nextStep: "RetrainAI",
          effects: { virtuePoints: 1 },
        },
      ],
    },
    SuspendSystem: {
      description: `
        You suspend the autonomous weapon system pending a full review. While the decision prevents further civilian casualties, military efficiency takes a hit.`,
      outcome: `
        Your caution preserves ethical accountability, but some leaders argue it compromises battlefield effectiveness.`,
    },
    DefendSystem: {
      description: `
        You defend the system, highlighting its role in reducing overall casualties despite isolated incidents of civilian harm.
        Public opinion, however, turns against the military's reliance on AI weapons.`,
      outcome: `
        Your decision prioritizes efficiency, but it undermines trust in military ethics and accountability.`,
    },
    EnhancedSystem: {
      description: `
        You advocate for enhanced AI systems where human oversight is integrated into decision-making processes.
        This ensures that AI precision is balanced with human judgment.`,
      outcome: `
        Your proposal becomes a model for ethical AI deployment in warfare, combining innovation with accountability.`,
    },
    HaltDeployment: {
      description: `
        You recommend halting deployment until the system’s biases and ethical concerns are fully resolved.
        The military appreciates your thoroughness, but some question the delay in operational advancements.`,
      outcome: `
        Your decision emphasizes ethical responsibility, fostering trust but slowing technological progress.`,
    },
    RetrainAI: {
      description: `
        You propose retraining the AI system using improved datasets to address its biases and flaws. The system’s accuracy improves significantly, reducing the risk of civilian casualties.`,
      outcome: `
        Your actions demonstrate the importance of refining AI systems to align with ethical standards, earning both public and military trust.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical dilemmas of autonomous weapon systems. Your decisions have shaped the future of military AI and its role in warfare.
    Would you like to play again or explore another scenario?`,
};
