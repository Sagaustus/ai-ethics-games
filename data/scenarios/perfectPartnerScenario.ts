export const perfectPartnerScenario = {
    title: "The Perfect Partner",
    description:
      "AI-assisted happiness vs. authentic human relationships. Does relying on AI for companionship erode genuine human connections?",
    link: "perfectPartner",
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
    choices: [
      {
        option: "Promote AI companions as a solution for loneliness.",
        nextStep: "PromoteAICompanions",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Regulate AI companions to avoid dependency.",
        nextStep: "RegulateCompanions",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Discourage AI companionship entirely.",
        nextStep: "DiscourageAICompanions",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Investigate the psychological effects of AI relationships.",
        nextStep: "InvestigateEffects",
        effects: { dependencyFlag: true },
      },
    ],
    paths: {
      PromoteAICompanions: {
        description: `
          You promote AI companions as a solution to loneliness, particularly for isolated individuals. 
          AI companionship becomes widely adopted, improving emotional well-being for many users. 
          However, concerns arise that dependency on AI is replacing human relationships.`,
        nextChoices: [
          {
            option: "Launch awareness campaigns on balancing AI and human connections.",
            nextStep: "AwarenessCampaign",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Focus on enhancing AI to mimic deeper human emotions.",
            nextStep: "EnhanceAIEmotions",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      RegulateCompanions: {
        description: `
          You recommend regulating AI companions to avoid emotional dependency. 
          Regulations include limitations on how AI can simulate emotions and mandatory warnings about overreliance.`,
        outcome: `
          The regulations help balance emotional support with human connection. 
          Users are encouraged to seek real-world relationships while benefiting from AI assistance.`,
      },
      DiscourageAICompanions: {
        description: `
          You discourage the use of AI companions, arguing that human relationships are irreplaceable. 
          While society maintains its focus on authentic connections, individuals suffering from isolation lack accessible support.`,
        nextChoices: [
          {
            option: "Develop community programs to reduce loneliness.",
            nextStep: "CommunityPrograms",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Reconsider the role of AI in offering supplementary companionship.",
            nextStep: "SupplementaryAI",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      InvestigateEffects: {
        description: `
          You conduct a study to investigate the psychological effects of AI companionship. 
          Findings reveal both benefits—such as reduced loneliness—and risks, including emotional dependency and withdrawal from society.`,
        nextChoices: [
          {
            option: "Publish the findings and recommend guidelines for AI development.",
            nextStep: "PublishFindings",
            effects: { virtuePoints: 1, dependencyFlag: true },
          },
          {
            option: "Advocate for stricter controls based on the risks.",
            nextStep: "AdvocateControls",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      AwarenessCampaign: {
        description: `
          You launch public awareness campaigns to educate users on balancing AI companionship with real human connections. 
          Adoption of AI companions remains steady, but users report healthier relationships and reduced dependency.`,
        outcome: `
          Your approach helps society find a balance between leveraging technology and preserving authentic human bonds.`,
      },
      EnhanceAIEmotions: {
        description: `
          You focus on enhancing AI companions to mimic deeper human emotions. The companions become more realistic, 
          offering nuanced emotional support, but dependency issues intensify as users increasingly choose AI over human interaction.`,
        outcome: `
          Your decision advances AI technology, but raises ethical questions about the line between artificial and authentic relationships.`,
      },
      CommunityPrograms: {
        description: `
          You advocate for community programs designed to reduce loneliness through social events and mental health initiatives. 
          While progress is gradual, society benefits from stronger human connections.`,
        outcome: `
          Your emphasis on human relationships fosters healthier communities and reduces the need for AI substitutes.`,
      },
      SupplementaryAI: {
        description: `
          You propose using AI companions as supplementary tools to enhance—not replace—human relationships. 
          AI is positioned as a temporary support system for individuals while encouraging real-world connections.`,
        outcome: `
          Your balanced approach addresses loneliness without risking societal overreliance on artificial companionship.`,
      },
      PublishFindings: {
        description: `
          You publish the findings of your investigation, providing guidelines for ethical AI development. 
          The report helps developers create AI companions that prioritize user well-being while avoiding emotional harm.`,
        outcome: `
          Your research promotes transparency and accountability in AI development, fostering trust and ethical progress.`,
      },
      AdvocateControls: {
        description: `
          You advocate for stricter controls on AI companions based on the psychological risks identified. 
          Policies are enacted to limit AI capabilities and prevent excessive emotional simulation.`,
        outcome: `
          Your decision prioritizes ethical responsibility but slows down AI adoption as companies adapt to the new restrictions.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical implications of AI companionship. 
      Your decisions have shaped the future of technology and its role in human relationships. 
      Would you like to play again or explore another scenario?`,
  };
  