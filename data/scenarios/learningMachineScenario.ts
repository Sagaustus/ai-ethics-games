const learningMachineScenario = {
  title: "The Learning Machine",
  description:
    "Customization vs. standardization in AI-based education. Should algorithms determine what students learn, or should humans retain control?",
  link: "/exploration/learningMachineScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.34_-_A_conceptual_image_representing_Education_in_AI_ethics._The_image_features_a_digital_classroom_with_a_humanoid_AI_teacher_guiding_students_via_holog_vyjx6g.webp",
  tags: ["Education", "AI", "Student Learning"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    oversightFlag: false,
  },
  introduction: `
    An AI-based education platform promises to revolutionize learning by tailoring lessons to each student's performance. 
    While some celebrate its efficiency, others worry about bias, loss of human oversight, and exclusion of diverse perspectives. 
    As an educational ethics consultant, you must explore the implications and guide its adoption.`,

  exploration: [
    {
      text: "The AI platform personalizes lessons based on student performance. Initial results are promising, but concerns about fairness arise. What do you recommend?",
      choices: [
        {
          text: "Support the platform for its efficiency and personalization.",
          outcome: "SupportPlatform",
        },
        {
          text: "Advocate for mandatory human oversight to prevent biases.",
          outcome: "HumanOversight",
        },
        {
          text: "Propose a hybrid system combining AI customization with teacher input.",
          outcome: "HybridSystem",
        },
        {
          text: "Investigate the platform for potential biases.",
          outcome: "InvestigateBiases",
        },
      ],
    },
    {
      text: "Your investigation reveals the AI system disproportionately excludes underrepresented content. How do you address this issue?",
      choices: [
        {
          text: "Suspend the platform until fairness can be ensured.",
          outcome: "SuspendPlatform",
        },
        {
          text: "Retrain the AI to ensure diverse and inclusive content.",
          outcome: "RetrainAI",
        },
      ],
    },
    {
      text: "After retraining, the AI platform shows significant improvement. However, some argue that human oversight remains essential. What’s your final recommendation?",
      choices: [
        {
          text: "Maintain the hybrid model with human input.",
          outcome: "HybridSystem",
        },
        {
          text: "Fully trust the AI platform with ongoing audits.",
          outcome: "DefendAI",
        },
      ],
    },
  ],

  choices: [
    {
      option: "Support the AI platform for its ability to personalize learning.",
      nextStep: "SupportPlatform",
      effects: { utilitarianPoints: 1 },
    },
    {
      option: "Advocate for human oversight to prevent bias and ensure fairness.",
      nextStep: "HumanOversight",
      effects: { deontologicalPoints: 1 },
    },
    {
      option: "Push for a hybrid system combining AI and teacher input.",
      nextStep: "HybridSystem",
      effects: { virtuePoints: 1 },
    },
    {
      option: "Investigate the platform for potential biases and ethical concerns.",
      nextStep: "InvestigateBiases",
      effects: { oversightFlag: true },
    },
  ],

  paths: {
    SupportPlatform: {
      description: `
        You decide to fully support the AI-based education platform. The system successfully personalizes lessons, improving test scores and engagement.
        However, concerns arise as the AI begins excluding non-mainstream perspectives, reinforcing a narrow curriculum.`,
      nextChoices: [
        {
          option: "Push for updates to ensure diverse content inclusion.",
          nextStep: "EnsureDiversity",
          effects: { virtuePoints: 1 },
        },
        {
          option: "Defend the AI's efficiency despite the criticisms.",
          nextStep: "DefendAI",
          effects: { utilitarianPoints: 1 },
        },
      ],
    },
    HumanOversight: {
      description: `
        You advocate for mandatory human oversight to monitor the AI system. Teachers work alongside the AI, ensuring fairness and inclusivity in lesson delivery.
        While this improves equity, some criticize it for slowing the platform's efficiency.`,
      outcome: `
        Your balanced approach retains human judgment while harnessing AI's potential, ensuring both efficiency and fairness in education.`,
    },
    HybridSystem: {
      description: `
        You recommend a hybrid system where AI customizes lessons, but teachers retain final control over content and assessment.
        Students benefit from personalized education while diverse perspectives and human intuition are preserved.`,
      outcome: `
        The hybrid model creates a win-win scenario, combining AI's efficiency with human adaptability and fairness.`,
    },
    InvestigateBiases: {
      description: `
        You investigate the AI platform for biases and ethical concerns. Your findings show that the system disproportionately favors mainstream content and struggles with fairness for underrepresented groups.`,
      nextChoices: [
        {
          option: "Recommend suspending the platform until biases are resolved.",
          nextStep: "SuspendPlatform",
          effects: { deontologicalPoints: 1 },
        },
        {
          option: "Work with developers to retrain the AI for inclusivity.",
          nextStep: "RetrainAI",
          effects: { virtuePoints: 1, oversightFlag: true },
        },
      ],
    },
    EnsureDiversity: {
      description: `
        You push for updates to the AI system to include diverse perspectives and balance the curriculum. Developers agree to retrain the platform, and inclusivity improves.`,
      outcome: `
        Your efforts ensure that students receive a broader, fairer education without sacrificing AI's efficiency.`,
    },
    DefendAI: {
      description: `
        You defend the AI platform's efficiency, arguing that it delivers results and that improvements can be made over time.
        However, concerns about fairness and diversity persist, leading to ongoing debates.`,
      outcome: `
        While the platform remains in use, its long-term adoption is challenged by ethical criticisms.`,
    },
    SuspendPlatform: {
      description: `
        You recommend suspending the platform until its biases are fully addressed. The decision protects fairness but slows the adoption of AI-driven learning systems.`,
      outcome: `
        By prioritizing equity, you ensure ethical education practices, though innovation faces temporary setbacks.`,
    },
    RetrainAI: {
      description: `
        You collaborate with developers to retrain the AI system using diverse and representative data. Over time, the platform becomes fairer and more inclusive.`,
      outcome: `
        Your proactive approach improves the platform's fairness, setting a new standard for ethical AI in education.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical challenges of AI-based education. Your decisions have shaped the future of learning, 
    balancing technology, fairness, and human intuition. Would you like to play again or explore another scenario?`,
};

export default learningMachineScenario;