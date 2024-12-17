export const faceOfDeceptionScenario = {
  title: "The Face of Deception",
  description:
    "Deepfakes and AI-generated misinformation challenge free expression and harm prevention. Should AI creators be held accountable for misuse?",
  link: "/exploration/faceOfDeceptionScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.14_-_A_conceptual_image_representing_Deception_in_AI_ethics._The_image_features_a_humanoid_robot_with_a_distorted_glitching_face_symbolizing_deepfakes_fzsf4v.webp",
  tags: ["Misinformation", "Accountability", "Free Expression"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    regulationFlag: false,
  },
  introduction: `
    A viral deepfake video of a prominent political leader spreads across the internet, sparking panic and misinformation.
    You are an AI ethics advisor tasked with addressing the situation and preventing similar events in the future.
    How will you balance innovation, free expression, and harm prevention?
  `,

  exploration: [
    {
      text: "A viral deepfake video has caused public panic. What is your first step?",
      choices: [
        {
          text: "Advocate for a complete ban on deepfake technology.",
          outcome: "BanDeepfakes",
        },
        {
          text: "Push for regulation and ethical guidelines.",
          outcome: "RegulateDeepfakes",
        },
        {
          text: "Ignore the issue, leaving it to market forces.",
          outcome: "IgnoreDeepfakes",
        },
        {
          text: "Launch an investigation to find the source of the video.",
          outcome: "InvestigateDeepfake",
        },
      ],
    },
    {
      text: "Your investigation reveals the deepfake's source. What action do you recommend next?",
      choices: [
        {
          text: "Call for stricter penalties for misuse of deepfake technology.",
          outcome: "StrictPenalties",
        },
        {
          text: "Propose public education campaigns on media literacy.",
          outcome: "MediaLiteracy",
        },
        {
          text: "Push for industry-wide ethical standards.",
          outcome: "RegulateDeepfakes",
        },
      ],
    },
    {
      text: "Public debates about banning deepfake technology grow louder. How do you respond?",
      choices: [
        {
          text: "Defend the ban as necessary for societal trust.",
          outcome: "DefendBan",
        },
        {
          text: "Allow exceptions for creative and educational uses.",
          outcome: "AllowExceptions",
        },
        {
          text: "Focus on refining the technology for safer use.",
          outcome: "RegulateDeepfakes",
        },
      ],
    },
  ],

  choices: [
    {
      option: "Advocate for a complete ban on deepfake technology.",
      nextStep: "BanDeepfakes",
      effects: { deontologicalPoints: 1 },
    },
    {
      option: "Push for regulation and ethical use of deepfake technology.",
      nextStep: "RegulateDeepfakes",
      effects: { virtuePoints: 1 },
    },
    {
      option: "Ignore the issue, letting the free market decide its use.",
      nextStep: "IgnoreDeepfakes",
      effects: { utilitarianPoints: 1 },
    },
    {
      option: "Launch an investigation to identify the source of the deepfake.",
      nextStep: "InvestigateDeepfake",
      effects: { regulationFlag: true },
    },
  ],

  paths: {
    BanDeepfakes: {
      description: `
        You advocate for a complete ban on deepfake technology. Governments respond swiftly, outlawing its use and distribution.
        While misuse decreases, creative industries and researchers voice concerns about stifling innovation.
      `,
      nextChoices: [
        {
          option: "Defend the ban as necessary for societal trust.",
          nextStep: "DefendBan",
          effects: { deontologicalPoints: 1 },
        },
        {
          option: "Propose exceptions for creative and educational use.",
          nextStep: "AllowExceptions",
          effects: { virtuePoints: 1 },
        },
      ],
    },
    RegulateDeepfakes: {
      description: `
        You push for ethical regulation, requiring AI creators to watermark deepfakes and restrict their use in political contexts.
        Public trust improves, but enforcement challenges remain.
      `,
      outcome: `
        Your balanced approach ensures innovation while minimizing societal harm. Deepfakes are better regulated, and misuse declines.
      `,
    },
    IgnoreDeepfakes: {
      description: `
        You decide to ignore the issue, arguing that free market forces will regulate the use of deepfake technology.
        However, misinformation spirals out of control, and public trust in digital media collapses.
      `,
      nextChoices: [
        {
          option: "Admit your mistake and call for immediate regulation.",
          nextStep: "RegulateDeepfakes",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Defend your stance, emphasizing innovation.",
          nextStep: "DefendFreeMarket",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    InvestigateDeepfake: {
      description: `
        You launch an investigation and successfully identify the source of the deepfake. The creators face legal action.
        This victory sparks a debate about accountability and freedom of expression.
      `,
      nextChoices: [
        {
          option: "Advocate for stricter penalties for misuse of deepfake technology.",
          nextStep: "StrictPenalties",
          effects: { deontologicalPoints: 1 },
        },
        {
          option: "Call for educational campaigns to improve public media literacy.",
          nextStep: "MediaLiteracy",
          effects: { virtuePoints: 1 },
        },
      ],
    },
    DefendBan: {
      description: `
        You defend the deepfake ban, emphasizing the importance of societal trust over innovation.
        Critics argue this stance limits artistic freedom, but misinformation declines.
      `,
      outcome: `
        You successfully prioritized societal welfare, but questions about free expression remain unresolved.
      `,
    },
    AllowExceptions: {
      description: `
        You propose exceptions for creative and educational uses of deepfake technology.
        This compromise is widely accepted, balancing innovation and harm prevention.
      `,
      outcome: `
        Your solution allows deepfakes for positive purposes while safeguarding against misuse in critical contexts.
      `,
    },
    StrictPenalties: {
      description: `
        You advocate for stricter penalties for deepfake misuse. Governments respond with severe laws targeting bad actors.
        While effective, concerns arise about overreach and potential misuse of these laws.
      `,
      outcome: `
        Your approach deters harmful deepfakes but raises questions about governmental overreach and freedom of expression.
      `,
    },
    MediaLiteracy: {
      description: `
        You call for educational campaigns to improve public awareness and media literacy.
        Over time, people become better at identifying deepfakes, reducing their impact.
      `,
      outcome: `
        Your focus on education empowers individuals to critically engage with digital media, fostering resilience against misinformation.
      `,
    },
    DefendFreeMarket: {
      description: `
        You defend the free market approach, claiming it will foster innovation.
        However, public trust continues to erode, and the consequences of unregulated deepfakes become severe.
      `,
      outcome: `
        Your decision favored innovation but failed to address the societal harm caused by misinformation.
      `,
    },
  },

  endMessage: `
    Thank you for exploring the ethical challenges of deepfake technology. Your decisions have shaped the outcome and contributed to the ongoing debate on AI accountability.
    Would you like to play again or explore another scenario?`,
};
