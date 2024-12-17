export const rogueCoderScenario = {
    title: "The Rogue Coder",
    description:
      "Personal ambition vs. societal responsibility in AI development. Should AI developers prioritize ethical principles over personal gain?",
    link: "rogueCoder",
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
    choices: [
      {
        option: "Sell the AI system to the highest bidder.",
        nextStep: "SellAI",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Report the AI's risks to regulatory authorities.",
        nextStep: "ReportAI",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Limit the AI's capabilities to prevent misuse.",
        nextStep: "LimitAI",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Quietly improve the AI for personal gain.",
        nextStep: "QuietImprovement",
        effects: { oversightFlag: true },
      },
    ],
    paths: {
      SellAI: {
        description: `
          You decide to sell the AI system to the highest bidder. The technology is implemented globally, leading to massive profits but causing financial instability due to manipulation.`,
        nextChoices: [
          {
            option: "Defend your actions, citing the AI's innovative success.",
            nextStep: "DefendActions",
            effects: { utilitarianPoints: 1 },
          },
          {
            option: "Publicly admit the risks and call for stricter regulations.",
            nextStep: "CallRegulations",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      ReportAI: {
        description: `
          You report the AI's risks to regulatory authorities. The system is halted, but some see you as undermining innovation and profit potential.`,
        nextChoices: [
          {
            option: "Collaborate with regulators to fix the AI.",
            nextStep: "FixWithRegulators",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Advocate for ethical AI development frameworks.",
            nextStep: "EthicalFrameworks",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      LimitAI: {
        description: `
          You choose to limit the AI's capabilities, ensuring it cannot be exploited for unethical purposes. While this safeguards societal trust, some argue you are limiting progress.`,
        outcome: `
          Your decision demonstrates moral responsibility and earns public trust but may slow innovation in financial technology.`,
      },
      QuietImprovement: {
        description: `
          You quietly improve the AI to maximize personal gain, bypassing ethical concerns. Initially, you benefit financially, but the AI's misuse is eventually exposed.`,
        nextChoices: [
          {
            option: "Apologize publicly and take full responsibility.",
            nextStep: "PublicApology",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Deny wrongdoing and defend the AI's benefits.",
            nextStep: "DenyWrongdoing",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      DefendActions: {
        description: `
          You defend your actions, highlighting the AI's role in advancing technology and driving innovation. However, public trust in AI systems is eroded.`,
        outcome: `
          Your decision accelerates innovation but undermines societal confidence in ethical AI development.`,
      },
      CallRegulations: {
        description: `
          You admit the risks of the AI system and call for stricter regulations. Regulators acknowledge your concerns, leading to a balanced approach to innovation and oversight.`,
        outcome: `
          Your actions set a precedent for responsible AI development and regulation.`,
      },
      FixWithRegulators: {
        description: `
          You collaborate with regulatory authorities to fix the AI's flaws, ensuring it cannot be misused while retaining its benefits for financial markets.`,
        outcome: `
          Your decision balances innovation and societal responsibility, restoring trust in ethical AI systems.`,
      },
      EthicalFrameworks: {
        description: `
          You advocate for ethical AI development frameworks, ensuring all future systems prioritize fairness, transparency, and accountability.`,
        outcome: `
          Your efforts lead to a shift in AI development practices, emphasizing ethics alongside innovation.`,
      },
      PublicApology: {
        description: `
          You publicly apologize for prioritizing personal gain over societal responsibility. While your reputation suffers, your actions inspire a debate on ethical AI development.`,
        outcome: `
          Your apology highlights the importance of accountability and sparks global discussions on AI ethics.`,
      },
      DenyWrongdoing: {
        description: `
          You deny any wrongdoing, claiming the AI's benefits outweigh its risks. However, evidence of misuse surfaces, and your reputation is irreparably damaged.`,
        outcome: `
          Your decision accelerates short-term gains but leads to long-term mistrust in AI developers and their intentions.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical challenges faced by AI developers balancing ambition and societal responsibility.
      Your decisions have influenced public trust, innovation, and the future of ethical AI development.
      Would you like to play again or explore another scenario?`,
  };
