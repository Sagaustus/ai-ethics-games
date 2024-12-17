export const artificialArtistScenario = {
    title: "The Artificial Artist",
    description:
      "Technological progress vs. human originality in AI-generated art. Does the rise of AI creativity diminish the value of human artistry?",
    link: "artificialArtist",
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
    choices: [
      {
        option: "Support AI-generated art as a tool for creative innovation.",
        nextStep: "SupportAIArt",
        effects: { utilitarianPoints: 1 },
      },
      {
        option: "Call for strict regulations to protect human artists.",
        nextStep: "RegulateAIArt",
        effects: { deontologicalPoints: 1 },
      },
      {
        option: "Encourage collaboration between AI and human artists.",
        nextStep: "Collaboration",
        effects: { virtuePoints: 1 },
      },
      {
        option: "Investigate the ethical implications of AI-generated art.",
        nextStep: "InvestigateImplications",
        effects: { artistSupportFlag: true },
      },
    ],
    paths: {
      SupportAIArt: {
        description: `
          You decide to support AI-generated art as an exciting new tool for innovation. Galleries and collectors embrace AI artwork, 
          and its commercial use skyrockets. However, traditional artists struggle to compete with AI's speed and affordability.`,
        nextChoices: [
          {
            option: "Defend AI art as a catalyst for creative progress.",
            nextStep: "DefendAIArt",
            effects: { utilitarianPoints: 1 },
          },
          {
            option: "Propose categories to distinguish AI art from human-made art.",
            nextStep: "SeparateCategories",
            effects: { virtuePoints: 1 },
          },
        ],
      },
      RegulateAIArt: {
        description: `
          You call for strict regulations to protect human artists. AI art is banned from competitions and restricted in galleries. 
          This decision safeguards traditional artists but stifles technological creativity.`,
        nextChoices: [
          {
            option: "Allow AI art with clear labelling requirements.",
            nextStep: "LabelAIArt",
            effects: { virtuePoints: 1 },
          },
          {
            option: "Maintain the ban to fully protect human artistry.",
            nextStep: "MaintainBan",
            effects: { deontologicalPoints: 1 },
          },
        ],
      },
      Collaboration: {
        description: `
          You encourage collaboration between AI and human artists. Artists use AI tools to enhance their work, blending technology 
          with creativity. This approach sparks new artistic movements and preserves human involvement.`,
        outcome: `
          Your balanced solution fosters innovation while protecting artistic expression. AI becomes a collaborative tool, not a competitor.`,
      },
      InvestigateImplications: {
        description: `
          You investigate the ethical implications of AI-generated art. Your findings reveal that AI artwork often mimics existing artists, 
          raising concerns about intellectual property and originality.`,
        nextChoices: [
          {
            option: "Propose ethical guidelines to prevent artistic plagiarism.",
            nextStep: "EthicalGuidelines",
            effects: { deontologicalPoints: 1, artistSupportFlag: true },
          },
          {
            option: "Call for greater transparency in AI training data.",
            nextStep: "TransparencyAI",
            effects: { virtuePoints: 1 },
          },
        ],
      },
      DefendAIArt: {
        description: `
          You defend AI-generated art as a symbol of progress, arguing that innovation has always disrupted tradition. 
          However, traditional artists feel undervalued, and public debates over the value of AI art continue.`,
        outcome: `
          While AI art thrives commercially, controversies over its impact on human creativity persist.`,
      },
      SeparateCategories: {
        description: `
          You propose separate categories for AI-generated and human-made art in competitions and galleries. This distinction 
          allows AI art to coexist with human art without diminishing its value.`,
        outcome: `
          Your solution preserves fairness in art while celebrating both human creativity and AI innovation.`,
      },
      LabelAIArt: {
        description: `
          You advocate for labelling AI-generated artwork clearly to ensure transparency. Art lovers can distinguish 
          between AI art and traditional human creations.`,
        outcome: `
          This approach promotes honesty and empowers audiences to value AI art and human creativity equally.`,
      },
      MaintainBan: {
        description: `
          You maintain the strict ban on AI-generated art to fully protect traditional artists. While this decision preserves 
          human artistry, it limits opportunities for innovation.`,
        outcome: `
          The art world remains traditional, but debates over innovation and fairness in art continue.`,
      },
      EthicalGuidelines: {
        description: `
          You propose ethical guidelines to prevent artistic plagiarism by AI systems. AI programs are required to credit 
          artists whose works influenced their output.`,
        outcome: `
          Your guidelines promote fairness and respect for intellectual property, fostering trust in AI art.`,
      },
      TransparencyAI: {
        description: `
          You call for greater transparency in the training data used for AI art systems. Developers agree to disclose 
          datasets and ensure they include diverse and fair sources.`,
        outcome: `
          Transparency improves trust in AI art, and ethical practices become a standard in the industry.`,
      },
    },
    endMessage: `
      Thank you for exploring the ethical dilemmas of AI-generated art. Your decisions have shaped the future of creativity, 
      innovation, and fairness in the art world. Would you like to play again or explore another scenario?`,
  };
  