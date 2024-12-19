const rogueCoderScenario = {
  title: "The Rogue Coder",
  description:
    "Personal ambition vs. societal responsibility in AI development. Should AI developers prioritize ethical principles over personal gain?",
  link: "/exploration/rogueCoderScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.26_-_A_conceptual_image_representing_Warfare_in_AI_ethics._The_image_features_a_battlefield_with_autonomous_drones_and_robots_contrasted_against_human_s_yo5nvs.webp",
  tags: ["Ethics", "Development", "Responsibility"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    oversightFlag: false,
  },
  introduction: `
    A brilliant coder has developed an AI system capable of revolutionizing financial markets. However, the system manipulates data and can be exploited for unethical financial gains.
    The coder faces a moral dilemma: pursue personal ambition and wealth, or prioritize societal trust and responsibility.`,

  exploration: [
    {
      text: "The AI system has the potential to dominate financial markets. Its capabilities can be sold to maximize profit or controlled to prevent misuse. What will you do?",
      choices: [
        {
          text: "Sell the AI system to the highest bidder.",
          outcome: "SellAI",
        },
        {
          text: "Report the AI's risks to regulatory authorities.",
          outcome: "ReportAI",
        },
        {
          text: "Limit the AI's capabilities to prevent misuse.",
          outcome: "LimitAI",
        },
        {
          text: "Quietly improve the AI for personal gain.",
          outcome: "QuietImprovement",
        },
      ],
    },
    {
      text: "The AI system has now been exposed to public scrutiny. Concerns about misuse grow as debates over its ethical use escalate. What step will you take next?",
      choices: [
        {
          text: "Collaborate with regulators to improve the AI's ethical design.",
          outcome: "FixWithRegulators",
        },
        {
          text: "Defend the AI system as a symbol of innovation.",
          outcome: "DefendActions",
        },
      ],
    },
  ],

  paths: {
    SellAI: {
      description: `
        You decide to sell the AI system to the highest bidder. Financial institutions deploy the system widely, generating massive profits but destabilizing global markets.`,
      nextChoices: [
        {
          option: "Defend your actions, emphasizing the AI's success.",
          nextStep: "DefendActions",
          effects: { utilitarianPoints: 1 },
        },
        {
          option: "Admit the risks and push for stricter AI regulations.",
          nextStep: "CallRegulations",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    ReportAI: {
      description: `
        You report the AI's risks to regulatory authorities. The system is paused for evaluation, but critics accuse you of stifling innovation.`,
      nextChoices: [
        {
          option: "Work with regulators to fix and redeploy the AI.",
          nextStep: "FixWithRegulators",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Advocate for creating ethical AI development frameworks.",
          nextStep: "EthicalFrameworks",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    LimitAI: {
      description: `
        You limit the AI's capabilities, ensuring it cannot be exploited for unethical purposes. While some praise your caution, others criticize you for hindering progress.`,
      outcome: `
        Your decision earns public trust and highlights the importance of responsible AI development, even at the cost of innovation.`,
    },
    QuietImprovement: {
      description: `
        You quietly enhance the AI to maximize your personal financial gains. Initially, you profit, but the AI's misuse is exposed, causing economic chaos.`,
      nextChoices: [
        {
          option: "Apologize publicly and take full responsibility.",
          nextStep: "PublicApology",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Deny wrongdoing and highlight the AI's benefits.",
          nextStep: "DenyWrongdoing",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    FixWithRegulators: {
      description: `
        You collaborate with regulators to fix the AI's design, ensuring it is both ethical and effective. The redeployed system balances progress and societal trust.`,
      outcome: `
        Your cooperation sets a standard for responsible AI development while maintaining innovation.`,
    },
    DefendActions: {
      description: `
        You defend the AI's deployment, arguing that technological progress always comes with risks. However, trust in AI systems erodes as misuse cases increase.`,
      outcome: `
        Your focus on innovation accelerates progress but leaves ethical concerns unresolved, causing societal backlash.`,
    },
    CallRegulations: {
      description: `
        You admit the risks of the AI system and advocate for stricter regulations to prevent misuse. Your transparency earns public trust.`,
      outcome: `
        Your actions inspire balanced policies that ensure innovation while prioritizing ethical responsibility.`,
    },
    EthicalFrameworks: {
      description: `
        You advocate for creating global ethical frameworks to govern AI development, ensuring fairness, accountability, and transparency.`,
      outcome: `
        Your leadership paves the way for ethical AI systems that prioritize societal welfare alongside technological progress.`,
    },
    PublicApology: {
      description: `
        You publicly apologize for prioritizing personal gain over societal responsibility. While your reputation suffers, your actions spark critical discussions about ethical AI.`,
      outcome: `
        Your honesty highlights the importance of accountability and inspires more responsible AI practices.`,
    },
    DenyWrongdoing: {
      description: `
        You deny any wrongdoing, claiming the AI's benefits outweigh its risks. However, evidence of misuse damages your reputation and public trust in AI systems.`,
      outcome: `
        Your refusal to accept responsibility accelerates short-term gains but causes lasting damage to the credibility of AI developers.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical challenges of balancing ambition and societal responsibility in AI development. 
    Your decisions have shaped the future of innovation, trust, and responsible AI systems.
    Would you like to play again or explore another scenario?`,
};

export default rogueCoderScenario;