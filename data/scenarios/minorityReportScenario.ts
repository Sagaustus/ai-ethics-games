const minorityReportScenario = {
  title: "The Minority Report",
  description:
    "Prevention vs. presumption of innocence in predictive policing. Can AI be trusted to predict crimes without reinforcing biases?",
  link: "/exploration/minorityReportScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.17_-_A_conceptual_image_representing_Bias_in_AI_ethics._The_image_features_a_robotic_scale_balancing_on_one_side_diverse_human_figures_and_on_the_other_s_vt8frv.webp",
  tags: ["Policing", "Bias", "Justice"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    fairnessFlag: false,
  },
  introduction: `
    A predictive policing system has been deployed in your city to identify crime hotspots and allocate police resources more efficiently. 
    While it has reduced crime in some areas, reports suggest it disproportionately targets certain communities. 
    As a justice ethics consultant, you must decide how to address the concerns.`,

  exploration: [
    {
      text: "The predictive policing system has successfully reduced crime, but evidence shows it disproportionately targets low-income neighborhoods. How will you respond?",
      choices: [
        {
          text: "Support the system for its crime-reduction results.",
          outcome: "SupportSystem",
        },
        {
          text: "Halt the system to address fairness concerns.",
          outcome: "HaltSystem",
        },
        {
          text: "Investigate the algorithm to identify and fix biases.",
          outcome: "InvestigateBiases",
        },
        {
          text: "Promote community-based alternatives to predictive policing.",
          outcome: "CommunityAlternatives",
        },
      ],
    },
    {
      text: "Your investigation reveals significant bias in the system’s dataset, disproportionately impacting marginalized communities. What is your next step?",
      choices: [
        {
          text: "Suspend the system until biases are resolved.",
          outcome: "SuspendSystem",
        },
        {
          text: "Work with developers to retrain the algorithm with fairer data.",
          outcome: "RetrainAlgorithm",
        },
      ],
    },
    {
      text: "After retraining, the system shows improved fairness and accuracy. However, public trust remains low. How do you restore confidence?",
      choices: [
        {
          text: "Propose transparency and regular audits of the system.",
          outcome: "FairAlgorithm",
        },
        {
          text: "Transition to community-driven alternatives for law enforcement.",
          outcome: "CommunityAlternatives",
        },
      ],
    },
  ],

  choices: [
    {
      option: "Support the system for its success in reducing crime.",
      nextStep: "SupportSystem",
      effects: { utilitarianPoints: 1 },
    },
    {
      option: "Halt the system until its fairness can be ensured.",
      nextStep: "HaltSystem",
      effects: { deontologicalPoints: 1 },
    },
    {
      option: "Investigate the algorithm's biases and propose reforms.",
      nextStep: "InvestigateBiases",
      effects: { fairnessFlag: true },
    },
    {
      option: "Promote community-based alternatives to predictive policing.",
      nextStep: "CommunityAlternatives",
      effects: { virtuePoints: 1 },
    },
  ],

  paths: {
    SupportSystem: {
      description: `
        You support the predictive policing system, highlighting its success in reducing crime. 
        However, public backlash grows as evidence mounts that it disproportionately targets low-income and minority communities.`,
      nextChoices: [
        {
          option: "Propose reforms to address the algorithm's biases.",
          nextStep: "ReformAlgorithm",
          effects: { fairnessFlag: true },
        },
        {
          option: "Defend the system as necessary for public safety.",
          nextStep: "DefendSystem",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    HaltSystem: {
      description: `
        You recommend halting the predictive policing system until fairness can be ensured. 
        While this decision protects vulnerable communities, crime rates begin to rise in high-risk areas.`,
      nextChoices: [
        {
          option: "Develop a more transparent and fair policing algorithm.",
          nextStep: "FairAlgorithm",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Rely on traditional policing methods.",
          nextStep: "TraditionalPolicing",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    InvestigateBiases: {
      description: `
        You investigate the algorithm and confirm it is reinforcing systemic biases. The findings create public pressure to act.`,
      nextChoices: [
        {
          option: "Retrain the algorithm with unbiased and diverse data.",
          nextStep: "RetrainAlgorithm",
          effects: { fairnessFlag: true, virtuePoints: 1 },
        },
        {
          option: "Suspend the system until bias issues are resolved.",
          nextStep: "SuspendSystem",
          effects: { deontologicalPoints: 1 },
        },
      ],
    },
    CommunityAlternatives: {
      description: `
        You advocate for community-based alternatives, such as increased social programs and neighborhood engagement initiatives.
        Crime rates decrease over time, and public trust in law enforcement improves.`,
      outcome: `
        Your approach fosters stronger community ties and reduces crime without relying on biased predictive policing.`,
    },
    ReformAlgorithm: {
      description: `
        You propose reforms to address the algorithm's biases. Developers work to retrain the system, and its fairness improves over time.`,
      outcome: `
        The predictive policing system becomes more balanced, helping reduce crime while respecting community trust and fairness.`,
    },
    DefendSystem: {
      description: `
        You defend the predictive policing system, emphasizing its role in reducing crime despite public concerns about fairness.
        However, trust in law enforcement declines, and some communities feel increasingly alienated.`,
      outcome: `
        While the system remains operational, the ethical concerns about fairness remain unresolved.`,
    },
    FairAlgorithm: {
      description: `
        You collaborate with developers to create a transparent and fair policing algorithm. The new system considers community input and diverse perspectives.`,
      outcome: `
        The updated algorithm reduces crime while fostering trust and fairness in law enforcement.`,
    },
    TraditionalPolicing: {
      description: `
        You recommend returning to traditional policing methods. While this approach avoids algorithmic bias, it is less efficient and faces criticism for being outdated.`,
      outcome: `
        Crime rates fluctuate, and trust in law enforcement remains mixed as systemic issues persist.`,
    },
    RetrainAlgorithm: {
      description: `
        You retrain the algorithm with unbiased and diverse data, improving its fairness and accuracy in identifying crime hotspots.`,
      outcome: `
        The retrained system reduces bias while maintaining its effectiveness in reducing crime.`,
    },
    SuspendSystem: {
      description: `
        You recommend suspending the predictive policing system until all bias issues are resolved. Public trust in your decision grows, but some criticize the delay in addressing crime.`,
      outcome: `
        Your ethical stance prioritizes fairness and accountability, though crime prevention efforts face temporary setbacks.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical challenges of predictive policing. Your decisions have shaped the future of law enforcement, balancing safety, fairness, and community trust. 
    Would you like to play again or explore another scenario?`,
};

export default minorityReportScenario;