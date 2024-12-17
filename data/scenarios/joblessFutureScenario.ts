export const joblessFutureScenario = {
    title: "The Jobless Future",
    description:
      "Economic efficiency vs. social welfare amid AI-driven automation. How should society handle large-scale job displacement caused by AI?",
    link: "joblessFuture",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
    tags: ["Automation", "Jobs", "Social Welfare"],
    initialState: {
      utilitarianPoints: 0,
      deontologicalPoints: 0,
      virtuePoints: 0,
      innovationFlag: false,
    },
    introduction: `
      Advances in AI technology have led to widespread automation, displacing workers across industries.
      While businesses benefit from increased efficiency and profits, unemployment is rising rapidly.
      You are an advisor to the government tasked with balancing economic growth and the welfare of displaced workers.
      What policies will you propose to address this crisis?`,
    choices: [
      {
        option: "Implement Universal Basic Income (UBI) to support displaced workers.",
        nextStep: "ImplementUBI",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Fund worker retraining programs using an AI tax.",
        nextStep: "RetrainingPrograms",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Allow the market to self-regulate without intervention.",
        nextStep: "SelfRegulate",
        effects: { innovationFlag: true },
      },
      {
        option: "Implement job-sharing initiatives to reduce unemployment.",
        nextStep: "JobSharing",
        effects: { deontologicalPoints: 1 },
      },
    ],
    paths: {
      ImplementUBI: {
        description: `
          You propose a Universal Basic Income to provide financial support to all citizens.
          While this reduces immediate poverty and unrest, critics argue that it disincentivizes work and creates a heavy financial burden on the economy.`,
        nextChoices: [
          {
            option: "Increase taxes on businesses to fund UBI sustainably.",
            nextStep: "TaxBusinesses",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Scale back UBI and promote limited workforce participation.",
            nextStep: "ScaleBackUBI",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      RetrainingPrograms: {
        description: `
          You propose funding large-scale retraining programs using taxes from businesses that benefit from AI-driven automation.
          Workers gain new skills, but the programs take time, and many struggle to adapt to the rapid changes in the economy.`,
        nextChoices: [
          {
            option: "Expand retraining efforts with government subsidies.",
            nextStep: "ExpandRetraining",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Focus retraining on emerging AI-driven industries.",
            nextStep: "TargetRetraining",
            effects: { innovationFlag: true },
          },
        ],
      },
      SelfRegulate: {
        description: `
          You decide to allow the market to self-regulate, trusting that innovation will create new job opportunities over time.
          While businesses thrive, unemployment rises, leading to protests and increasing economic inequality.`,
        nextChoices: [
          {
            option: "Reassess intervention as public pressure grows.",
            nextStep: "ReassessIntervention",
            effects: { deontologicalPoints: 1 },
          },
          {
            option: "Continue prioritizing innovation over regulation.",
            nextStep: "PrioritizeInnovation",
            effects: { utilitarianPoints: 1 },
          },
        ],
      },
      JobSharing: {
        description: `
          You implement job-sharing initiatives, where multiple workers share the same job role to reduce unemployment.
          While this preserves employment opportunities, workers experience reduced incomes, and businesses face higher operational costs.`,
        nextChoices: [
          {
            option: "Subsidize businesses to support job-sharing policies.",
            nextStep: "SubsidizeJobSharing",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Reevaluate job-sharing and explore other solutions.",
            nextStep: "ExploreAlternatives",
            effects: { innovationFlag: true },
          },
        ],
      },
      TaxBusinesses: {
        description: `
          You impose higher taxes on businesses to sustain the UBI program.
          While this provides economic stability, businesses protest, and some relocate to avoid the additional costs.`,
        outcome: `
          Your decision prioritizes social welfare but creates challenges in maintaining business competitiveness.`,
      },
      ScaleBackUBI: {
        description: `
          You scale back the UBI program to encourage workforce participation, balancing social support and economic sustainability.
          However, this leaves some individuals vulnerable to poverty.`,
        outcome: `
          Your decision strikes a balance but highlights the need for more comprehensive solutions to automation-driven job displacement.`,
      },
      ExpandRetraining: {
        description: `
          You expand government-funded retraining programs, ensuring more workers adapt to the changing economy.
          While this supports long-term employment, it requires significant investment and takes years to show results.`,
        outcome: `
          Your decision builds a more resilient workforce but requires sustained effort and patience.`,
      },
      TargetRetraining: {
        description: `
          You focus retraining efforts on AI-driven industries, preparing workers for roles in emerging technologies.
          This approach accelerates innovation and job creation but leaves workers in traditional industries behind.`,
        outcome: `
          Your decision fuels economic growth but creates disparities among different sectors of the workforce.`,
      },
      ReassessIntervention: {
        description: `
          You reassess the decision to let the market self-regulate, introducing policies to address rising unemployment and economic inequality.`,
        outcome: `
          Your decision responds to public concerns while maintaining a balance between innovation and regulation.`,
      },
      PrioritizeInnovation: {
        description: `
          You continue to prioritize innovation, trusting the market to create new job opportunities.
          While this fuels economic growth, economic inequality deepens, and social unrest increases.`,
        outcome: `
          Your decision supports innovation but fails to address the immediate needs of displaced workers.`,
      },
      SubsidizeJobSharing: {
        description: `
          You subsidize businesses to support job-sharing policies, reducing unemployment while easing financial burdens on employers.
          Workers benefit from shared employment opportunities without losing income.`,
        outcome: `
          Your decision balances employment and economic stability but requires ongoing government support.`,
      },
      ExploreAlternatives: {
        description: `
          You explore alternative solutions, such as fostering entrepreneurship and investing in emerging industries to create new job opportunities.
          While promising, these efforts take time to yield results.`,
        outcome: `
          Your decision encourages innovation and long-term job creation but leaves short-term unemployment challenges unresolved.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical challenges of AI-driven automation and job displacement.
      Your decisions have shaped economic policy, innovation, and societal welfare.
      Would you like to play again or explore another scenario?`,
  };
  