export const perfectPartnerScenario = {
  title: "The Perfect Partner",
  description:
    "AI-assisted happiness vs. authentic human relationships. Does relying on AI for companionship erode genuine human connections?",
  link: "/exploration/perfectPartnerScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.41_-_A_conceptual_image_representing_Relationships_in_AI_ethics._The_image_features_a_humanoid_robot_and_a_human_shaking_hands_symbolizing_partnership_a_p7pspq.webp",
  tags: ["Relationships", "Companionship", "AI"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    dependencyFlag: false,
  },
  introduction: `
    A tech company has released an AI companion that provides emotional support and companionship. 
    These AI partners are increasingly becoming the primary source of emotional connection for many users, 
    raising concerns about societal reliance on artificial relationships and the erosion of genuine human bonds. 
    As an ethicist, you are tasked with assessing the impact and guiding future decisions.`,

  exploration: [
    {
      text: "The AI companion program is growing in popularity, helping people overcome loneliness. However, critics argue that it reduces human connection. What will you propose?",
      choices: [
        {
          text: "Promote AI companions as a solution for loneliness.",
          outcome: "PromoteAICompanions",
        },
        {
          text: "Regulate AI companions to prevent dependency.",
          outcome: "RegulateCompanions",
        },
        {
          text: "Discourage AI companionship to preserve human relationships.",
          outcome: "DiscourageAICompanions",
        },
        {
          text: "Investigate the long-term psychological effects of AI companionship.",
          outcome: "InvestigateEffects",
        },
      ],
    },
    {
      text: "Your investigation reveals both benefits and risks of AI companions. Some users report emotional well-being, while others show signs of dependency. What is your next step?",
      choices: [
        {
          text: "Launch public awareness campaigns about responsible AI use.",
          outcome: "AwarenessCampaign",
        },
        {
          text: "Work with developers to improve AI emotional realism.",
          outcome: "EnhanceAIEmotions",
        },
      ],
    },
  ],

  paths: {
    PromoteAICompanions: {
      description: `
        You promote AI companions as a solution to loneliness, especially for those who lack human connections. 
        While adoption increases, societal concerns grow about dependency on artificial relationships.`,
      nextChoices: [
        {
          option: "Launch campaigns on balancing AI with real human interactions.",
          nextStep: "AwarenessCampaign",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Enhance the AI's emotional intelligence to meet deeper needs.",
          nextStep: "EnhanceAIEmotions",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    RegulateCompanions: {
      description: `
        You propose regulations to limit AI emotional realism and prevent user dependency. Warnings are issued alongside AI companion products.`,
      outcome: `
        Your regulations reduce risks of dependency while allowing AI companions to provide ethical emotional support.`,
    },
    DiscourageAICompanions: {
      description: `
        You discourage AI companionship, emphasizing the importance of genuine human relationships. 
        While this preserves human bonds, individuals struggling with isolation lose a helpful support tool.`,
      nextChoices: [
        {
          option: "Promote community-based support programs to combat loneliness.",
          nextStep: "CommunityPrograms",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Allow AI companions as supplementary tools with limitations.",
          nextStep: "SupplementaryAI",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    InvestigateEffects: {
      description: `
        Your investigation reveals that while AI companions help reduce loneliness, they also risk emotional dependency and societal withdrawal.`,
      nextChoices: [
        {
          option: "Share findings and advocate for ethical guidelines.",
          nextStep: "PublishFindings",
          effects: { virtuePoints: 1, dependencyFlag: true },
        },
        {
          option: "Push for stricter regulations to address risks.",
          nextStep: "AdvocateControls",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    AwarenessCampaign: {
      description: `
        You launch campaigns promoting balanced use of AI companions alongside real-world relationships. Users become more mindful of their reliance on AI.`,
      outcome: `
        Your efforts help society embrace AI companionship responsibly, preserving authentic human connections.`,
    },
    EnhanceAIEmotions: {
      description: `
        You enhance AI companions to mimic deeper emotional connections, offering more realistic interactions. 
        While users benefit, concerns grow that AI is replacing real relationships entirely.`,
      outcome: `
        Your decision advances AI technology but raises new ethical questions about artificial versus authentic companionship.`,
    },
    CommunityPrograms: {
      description: `
        You promote community-based support programs to reduce loneliness. Social initiatives and mental health resources strengthen real human bonds.`,
      outcome: `
        Your focus on community-driven solutions helps build healthier, connected societies without over-relying on AI.`,
    },
    SupplementaryAI: {
      description: `
        You position AI companions as supplementary tools to assist, but not replace, human relationships. 
        This strikes a balance between innovation and ethical concerns.`,
      outcome: `
        AI companions become valuable tools for emotional support while encouraging real human connections.`,
    },
    PublishFindings: {
      description: `
        You publish your findings on the benefits and risks of AI companionship, leading to ethical guidelines for developers and policymakers.`,
      outcome: `
        Your research ensures transparency and fosters trust in AI companionship while addressing its societal impact.`,
    },
    AdvocateControls: {
      description: `
        You advocate for stricter controls on AI companions to mitigate risks of dependency and societal withdrawal. 
        Governments implement policies to restrict AI capabilities and encourage ethical design.`,
      outcome: `
        Your decision prioritizes ethical responsibility but slows the adoption of AI companionship solutions.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical dilemmas surrounding AI companionship. Your decisions have shaped the balance between technological progress and preserving human connections.
    Would you like to play again or explore another scenario?`,
};
