export const carbonFootprintScenario = {
  title: "The Carbon Footprint",
  description:
    "Technological advancement vs. environmental sustainability in AI. Should energy-intensive AI systems be restricted to combat climate change?",
  link: "/exploration/carbonFootprintScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.39_-_A_conceptual_image_representing_Sustainability_in_AI_ethics._The_image_features_a_futuristic_city_powered_by_AI_with_green_technologies_like_wind_tu_abiz0v.webp",
  tags: ["Sustainability", "AI", "Environment"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    sustainabilityFlag: false,
  },
  introduction: `
    A tech company is planning to build a massive AI training facility powered by non-renewable energy sources. 
    While the project promises breakthroughs in AI development, environmental advocates are concerned about its carbon footprint.
    As an AI ethics and sustainability consultant, you must guide the company and policymakers toward an ethical decision.`,

  exploration: [
    {
      text: "The company has proposed building an AI facility powered by non-renewable energy. How do you respond?",
      choices: [
        {
          text: "Approve the facility to advance AI innovation.",
          outcome: "ApproveFacility",
        },
        {
          text: "Demand that the facility use renewable energy sources.",
          outcome: "RenewableMandate",
        },
        {
          text: "Reject the project due to its environmental impact.",
          outcome: "RejectFacility",
        },
        {
          text: "Investigate sustainable ways to develop AI.",
          outcome: "SustainableDevelopment",
        },
      ],
    },
    {
      text: "Public backlash grows over the environmental impact of AI systems. What is your next step?",
      choices: [
        {
          text: "Retrofit existing facilities to include renewable energy.",
          outcome: "RetrofitFacility",
        },
        {
          text: "Defend AI progress as vital for future innovation.",
          outcome: "DefendInnovation",
        },
        {
          text: "Advocate for strict carbon regulations on tech companies.",
          outcome: "CarbonRegulations",
        },
      ],
    },
    {
      text: "A new proposal emerges to develop energy-efficient AI models. How do you proceed?",
      choices: [
        {
          text: "Partner with renewable energy providers to power the facility.",
          outcome: "RenewablePartnership",
        },
        {
          text: "Focus on optimizing AI models for lower energy consumption.",
          outcome: "EfficientModels",
        },
      ],
    },
  ],

  paths: {
    ApproveFacility: {
      description: `
        You approve the construction of the AI facility to support innovation. 
        AI breakthroughs accelerate, but the facility's carbon emissions spark public outrage and raise concerns about climate change.`,
      nextChoices: [
        {
          option: "Retrofit the facility with renewable energy sources.",
          nextStep: "RetrofitFacility",
          effects: { sustainabilityFlag: true },
        },
        {
          option: "Defend the decision, emphasizing the importance of innovation.",
          nextStep: "DefendInnovation",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    RenewableMandate: {
      description: `
        You demand that the facility must use renewable energy. The company agrees but faces higher construction costs and delays. 
        Public trust increases, and environmental advocates praise the decision.`,
      outcome: `
        The facility operates sustainably, setting a precedent for responsible AI development while fostering innovation.`,
    },
    RejectFacility: {
      description: `
        You reject the project due to its environmental impact. While the decision earns praise from environmental groups, the company criticizes you for stifling technological progress.`,
      nextChoices: [
        {
          option: "Collaborate to propose a smaller, sustainable facility.",
          nextStep: "SmallerFacility",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Advocate for strict carbon regulations on tech companies.",
          nextStep: "CarbonRegulations",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    SustainableDevelopment: {
      description: `
        You investigate methods to make AI development more sustainable. You propose innovative energy-efficient solutions and algorithms to reduce the carbon footprint.`,
      nextChoices: [
        {
          option: "Develop partnerships for renewable energy solutions.",
          nextStep: "RenewablePartnership",
          effects: { sustainabilityFlag: true, virtuePoints: 1 },
        },
        {
          option: "Focus on optimizing AI models for energy efficiency.",
          nextStep: "EfficientModels",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    RetrofitFacility: {
      description: `
        The company retrofits the facility with renewable energy sources. The carbon footprint is reduced significantly, and public trust in the company grows.`,
      outcome: `
        Your decision balances technological progress with environmental responsibility, showcasing leadership in sustainable AI development.`,
    },
    DefendInnovation: {
      description: `
        You defend the project, arguing that technological innovation is necessary to solve future challenges. 
        However, public trust in the company declines, and environmental protests intensify.`,
      outcome: `
        The facility operates, but the backlash highlights the importance of balancing innovation with sustainability.`,
    },
    SmallerFacility: {
      description: `
        You collaborate with the company to propose a smaller, more sustainable facility. 
        While progress is slower, the environmental impact is minimized, and public trust is preserved.`,
      outcome: `
        Your balanced approach supports innovation while addressing environmental concerns.`,
    },
    CarbonRegulations: {
      description: `
        You advocate for strict carbon regulations on tech companies. Governments adopt policies that require all AI development projects to meet sustainability standards.`,
      outcome: `
        The new regulations encourage greener AI development, but some companies struggle to adapt to the higher costs.`,
    },
    RenewablePartnership: {
      description: `
        You develop partnerships with renewable energy providers, enabling the company to power the facility sustainably. This collaboration fosters innovation and strengthens the company's public image.`,
      outcome: `
        Your approach promotes sustainable growth while showcasing the benefits of industry collaboration.`,
    },
    EfficientModels: {
      description: `
        You focus on optimizing AI models to reduce energy consumption. Researchers develop energy-efficient algorithms that set a new standard for sustainable AI.`,
      outcome: `
        Your decision advances both AI innovation and sustainability, inspiring the tech industry to adopt greener practices.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical challenges of balancing AI development with environmental sustainability. 
    Your decisions have shaped the future of technology and its impact on the planet. Would you like to play again or explore another scenario?`,
};
