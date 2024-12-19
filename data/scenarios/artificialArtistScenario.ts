const artificialArtistScenario = {
  title: "The Artificial Artist",
  description:
    "Technological progress vs. human originality in AI-generated art. Does the rise of AI creativity diminish the value of human artistry?",
  link: "/exploration/artificialArtistScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.32_-_A_conceptual_image_representing_Creativity_in_AI_ethics._The_image_features_an_AI_robot_holding_a_paintbrush_painting_a_vibrant_canvas_with_abstrac_tbivmh.webp",
  tags: ["Creativity", "AI Art", "Human Expression"],
  initialState: {
    utilitarianPoints: 0,
    deontologicalPoints: 0,
    virtuePoints: 0,
    artistSupportFlag: false,
  },
  introduction: `
    A revolutionary AI art program has emerged, capable of generating stunning artwork that rivals human creativity. 
    It is being used in art competitions, galleries, and commercial projects. While the technology excites some, 
    others argue it undermines human artists and originality. You are an art ethics consultant, tasked with exploring the impact.`,
  
  exploration: [
    {
      text: "AI-generated art is dominating competitions and galleries. What is your stance?",
      choices: [
        { text: "Support AI art for its innovation and creativity.", outcome: "SupportAIArt" },
        { text: "Call for strict regulations to protect human artists.", outcome: "RegulateAIArt" },
        { text: "Encourage collaboration between AI and human artists.", outcome: "Collaboration" },
        { text: "Investigate the ethical implications of AI-generated art.", outcome: "InvestigateImplications" },
      ],
    },
    {
      text: "You discover that AI art mimics existing human artists' works. What do you recommend?",
      choices: [
        { text: "Defend AI art as transformative progress.", outcome: "DefendAIArt" },
        { text: "Propose clear labelling of AI-generated art.", outcome: "LabelAIArt" },
        { text: "Call for ethical guidelines to prevent plagiarism.", outcome: "EthicalGuidelines" },
      ],
    },
    {
      text: "The art community debates the role of AI. How will you foster fairness and innovation?",
      choices: [
        { text: "Separate AI art into its own competition categories.", outcome: "SeparateCategories" },
        { text: "Maintain a ban on AI art to protect human artists.", outcome: "MaintainBan" },
        { text: "Push for transparency in AI training datasets.", outcome: "TransparencyAI" },
      ],
    },
  ],

  paths: {
    SupportAIArt: {
      description: `
        You decide to support AI-generated art as an exciting new tool for innovation. Galleries and collectors embrace AI artwork, 
        and its commercial use skyrockets. However, traditional artists struggle to compete with AI's speed and affordability.`,
    },
    RegulateAIArt: {
      description: `
        You call for strict regulations to protect human artists. AI art is banned from competitions and restricted in galleries. 
        This decision safeguards traditional artists but stifles technological creativity.`,
    },
    Collaboration: {
      description: `
        You encourage collaboration between AI and human artists. Artists use AI tools to enhance their work, blending technology 
        with creativity. This approach sparks new artistic movements and preserves human involvement.`,
    },
    InvestigateImplications: {
      description: `
        You investigate the ethical implications of AI-generated art. Your findings reveal that AI artwork often mimics existing artists, 
        raising concerns about intellectual property and originality.`,
    },
    DefendAIArt: {
      description: `
        You defend AI-generated art as a symbol of progress, arguing that innovation has always disrupted tradition. 
        However, traditional artists feel undervalued, and public debates over the value of AI art continue.`,
    },
    SeparateCategories: {
      description: `
        You propose separate categories for AI-generated and human-made art in competitions and galleries. This distinction 
        allows AI art to coexist with human art without diminishing its value.`,
    },
    LabelAIArt: {
      description: `
        You advocate for labelling AI-generated artwork clearly to ensure transparency. Art lovers can distinguish 
        between AI art and traditional human creations.`,
    },
    MaintainBan: {
      description: `
        You maintain the strict ban on AI-generated art to fully protect traditional artists. While this decision preserves 
        human artistry, it limits opportunities for innovation.`,
    },
    EthicalGuidelines: {
      description: `
        You propose ethical guidelines to prevent artistic plagiarism by AI systems. AI programs are required to credit 
        artists whose works influenced their output.`,
    },
    TransparencyAI: {
      description: `
        You call for greater transparency in the training data used for AI art systems. Developers agree to disclose 
        datasets and ensure they include diverse and fair sources.`,
    },
  },

  endMessage: `
    Thank you for exploring the ethical dilemmas of AI-generated art. Your decisions have shaped the future of creativity, 
    innovation, and fairness in the art world. Would you like to play again or explore another scenario?`,
};

export default artificialArtistScenario;