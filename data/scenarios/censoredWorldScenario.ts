export const censoredWorldScenario = {
    title: "The Censored World",
    description:
      "Freedom of expression vs. harm prevention in AI content moderation. Should AI have the power to remove content that could be deemed harmful?",
    link: "censoredWorld",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
    tags: ["Censorship", "Content Moderation", "Free Speech"],
    initialState: {
      utilitarianPoints: 0,
      deontologicalPoints: 0,
      virtuePoints: 0,
      transparencyFlag: false,
    },
    introduction: `
      A leading social media platform has implemented a new AI-driven content moderation system. The AI is tasked with identifying and removing harmful content quickly.
      However, concerns have arisen regarding over-censorship and suppression of free speech. You are a content moderation ethics consultant evaluating the situation.`,
    choices: [
      {
        option: "Support the AI system for its ability to prevent harm.",
        nextStep: "SupportAISystem",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Suspend the AI system until transparency can be improved.",
        nextStep: "SuspendAISystem",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Advocate for a hybrid system with human oversight.",
        nextStep: "HybridSystem",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Investigate the system’s moderation biases.",
        nextStep: "InvestigateBiases",
        effects: { transparencyFlag: true },
      },
    ],
    paths: {
      SupportAISystem: {
        description: `
          You decide to support the AI-driven content moderation system. Harmful content is swiftly removed, improving platform safety.
          However, complaints arise from users whose harmless content was mistakenly flagged and removed.`,
        nextChoices: [
          {
            option: "Defend the system, highlighting its success in harm prevention.",
            nextStep: "DefendAISystem",
            effects: { utilitarianPoints: 1 },
          },
          {
            option: "Push for refining the AI to reduce false positives.",
            nextStep: "RefineAISystem",
            effects: { virtuePoints: 1 },
          },
        ],
      },
      SuspendAISystem: {
        description: `
          You suspend the AI moderation system, arguing that free speech must be protected until the system is made transparent.
          While this pleases advocates of free expression, harmful content begins to spread unchecked.`,
        nextChoices: [
          {
            option: "Propose immediate retraining of the AI with transparent guidelines.",
            nextStep: "RetrainAISystem",
            effects: { deontologicalPoints: 1 },
          },
          {
            option: "Reintroduce the AI system with limited, cautious moderation.",
            nextStep: "LimitedModeration",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      HybridSystem: {
        description: `
          You advocate for a hybrid moderation system where AI flags content but humans make the final decisions.
          This approach reduces mistakes but increases moderation costs and response time.`,
        outcome: `
          The hybrid system improves fairness and balances harm prevention with free speech, though some complain about delays in content moderation.`,
      },
      InvestigateBiases: {
        description: `
          You decide to investigate the system’s moderation biases. Your findings reveal that the AI disproportionately flags content from minority and marginalized groups.`,
        nextChoices: [
          {
            option: "Suspend the AI system until biases are resolved.",
            nextStep: "SuspendAISystem",
            effects: { deontologicalPoints: 1, transparencyFlag: true },
          },
          {
            option: "Propose retraining the AI to address its biases.",
            nextStep: "RetrainAISystem",
            effects: { virtuePoints: 1 },
          },
        ],
      },
      DefendAISystem: {
        description: `
          You defend the AI system, emphasizing its ability to protect users by swiftly removing harmful content.
          However, public trust in the platform declines due to perceived censorship and errors.`,
        outcome: `
          While harm is reduced, the platform struggles to balance safety and free speech, losing users who feel unjustly censored.`,
      },
      RefineAISystem: {
        description: `
          You push for refining the AI system to reduce false positives. The moderation algorithms are retrained to improve accuracy while maintaining harm prevention.`,
        outcome: `
          The updated system strikes a better balance between safety and free expression, restoring public confidence in the platform.`,
      },
      RetrainAISystem: {
        description: `
          You propose retraining the AI system using more representative datasets and transparent moderation guidelines.
          This effort improves the AI’s ability to identify harmful content fairly and accurately.`,
        outcome: `
          The retrained system demonstrates ethical AI use, ensuring fairness, safety, and greater public trust in content moderation processes.`,
      },
      LimitedModeration: {
        description: `
          You reintroduce the AI system but limit its capabilities to only flag the most harmful content. Human moderators oversee flagged posts.
          This reduces the risk of over-censorship but allows some harmful content to remain.`,
        outcome: `
          The compromise satisfies some stakeholders, though debates about platform safety and free speech continue.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical dilemmas of AI-based content moderation. Your decisions have shaped the platform’s approach to balancing harm prevention and free expression.
      Would you like to play again or explore another scenario?`,
  };
  