export const biasedJudgeScenario = {
    title: "theBiased Judge",
    description:
      "Fairness vs. efficiency in AI-based criminal justice systems. How do we address systemic biases embedded in algorithmic decision-making?",
    link: "biasedJudge",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.17_-_A_conceptual_image_representing_Bias_in_AI_ethics._The_image_features_a_robotic_scale_balancing_on_one_side_diverse_human_figures_and_on_the_other_s_vt8frv.webp",
    tags: ["Bias", "Justice", "Efficiency"],
    initialState: {
      utilitarianPoints: 0,
      deontologicalPoints: 0,
      virtuePoints: 0,
      fairnessFlag: false,
    },
    introduction: `
      An AI sentencing tool used in the justice system recommends longer sentences for minority defendants based on historical data.
      You are a criminal justice ethics advisor tasked with evaluating and addressing the systemic biases in this AI system.
      How will you ensure fairness while maintaining efficiency?`,
    choices: [
      {
        option: "Override the AI and advocate for a fair sentence.",
        nextStep: "OverrideAI",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Improve the AI system to reduce biases.",
        nextStep: "ImproveAI",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Accept the AI recommendation to maintain efficiency.",
        nextStep: "AcceptAI",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Pause the AI system pending a thorough review.",
        nextStep: "PauseAI",
        effects: { fairnessFlag: true },
      },
    ],
    paths: {
      OverrideAI: {
        description: `
          You override the AI's recommendation and advocate for a sentence that considers fairness and equity.
          The judge follows your advice, but questions arise about the reliability of AI tools in justice.
        `,
        nextChoices: [
          {
            option: "Propose scrapping AI tools in sentencing decisions entirely.",
            nextStep: "ScrapAI",
            effects: { deontologicalPoints: 1 },
          },
          {
            option: "Call for improvements to make the AI system fairer.",
            nextStep: "ImproveAI",
            effects: { virtuePoints: 1 },
          },
        ],
      },
      ImproveAI: {
        description: `
          You recommend retraining the AI with more diverse and unbiased datasets.
          The system improves significantly, leading to fairer sentencing decisions over time.
        `,
        outcome: `
          Your decision balances fairness and efficiency, setting a precedent for ethical AI use in the justice system.
        `,
      },
      AcceptAI: {
        description: `
          You decide to accept the AI's recommendation, prioritizing efficiency over fairness.
          Public trust erodes as more cases highlight the systemic bias, sparking widespread criticism.
        `,
        nextChoices: [
          {
            option: "Acknowledge the problem and push for immediate improvements.",
            nextStep: "ImproveAI",
            effects: { fairnessFlag: true },
          },
          {
            option: "Defend the AI system, emphasizing its consistency.",
            nextStep: "DefendAI",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      PauseAI: {
        description: `
          You recommend pausing the AI system pending a thorough review of its biases.
          While this ensures fairness, courts struggle to manage workloads without the tool.
        `,
        nextChoices: [
          {
            option: "Reintroduce the AI system with oversight and audits.",
            nextStep: "AuditAI",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Scrap the AI system permanently.",
            nextStep: "ScrapAI",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      ScrapAI: {
        description: `
          You propose scrapping AI systems in sentencing decisions entirely, citing fairness concerns.
          While justice processes remain fairer, efficiency drops, leading to delays in courts.
        `,
        outcome: `
          Your decision prioritizes fairness but raises concerns about the future of AI in the legal system.
        `,
      },
      DefendAI: {
        description: `
          You defend the AI system, arguing that its efficiency outweighs its flaws.
          However, public outcry grows as more evidence of bias emerges, leading to a loss of confidence in the justice system.
        `,
        outcome: `
          Your decision favored efficiency but failed to address the fundamental issues of fairness and systemic bias.
        `,
      },
      AuditAI: {
        description: `
          You reintroduce the AI system with strict oversight, regular audits, and transparency measures to ensure fairness.
          Over time, the system gains public trust and delivers consistent, equitable outcomes.
        `,
        outcome: `
          Your balanced approach ensures both efficiency and fairness, setting a new standard for AI integration in justice.
        `,
      },
    },
    endMessage: `
      Thank you for exploring the ethical dilemmas in AI-based criminal justice systems. Your decisions have shaped the balance between fairness, efficiency, and public trust.
      Would you like to play again or explore another scenario?`,
  };
  