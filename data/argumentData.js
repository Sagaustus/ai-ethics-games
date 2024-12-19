const argumentData = {
  ethicalSoldierScenario: {
    npcArgument: "Should AI be regulated in Canada at this time?",
    rebuttals: [
      "Innovation could be stifled, leading to slower progress.",
      "Global competitiveness may decline compared to less-regulated nations.",
      "Regulation might be premature as ethical AI principles evolve."
    ],
    playerArguments: [
      {
        text: "Regulation ensures public trust by addressing biases and risks.",
        isCorrect: true,
      },
      {
        text: "Over-regulation risks stifling innovation without offering tangible benefits.",
        isCorrect: false,
      },
      {
        text: "Regulation reduces potential harm by enforcing fairness and accountability.",
        isCorrect: true,
      }
    ]
  },
  censoredWorldScenario: {
    npcArgument: "Is it ethical for companies to scrape and monetize social media data?",
    rebuttals: [
      "Users consent to data collection when agreeing to terms and conditions.",
      "Data monetization supports free services that benefit users.",
      "Proper regulations and transparency ensure ethical use of data."
    ],
    playerArguments: [
      {
        text: "Scraping data without informed consent violates privacy.",
        isCorrect: true,
      },
      {
        text: "Companies profit from data without compensating users, creating imbalance.",
        isCorrect: true,
      },
      {
        text: "Transparent data use eliminates privacy concerns entirely.",
        isCorrect: false,
      }
    ]
  },
  consciousMachineScenario: {
    npcArgument: "Do sentient AI deserve rights comparable to humans?",
    rebuttals: [
      "It is difficult to define and verify AI sentience.",
      "Recognizing AI rights could complicate legal systems.",
      "Prioritizing AI rights might reduce focus on human welfare."
    ],
    playerArguments: [
      {
        text: "Sentient AI should be treated ethically and granted appropriate rights.",
        isCorrect: true,
      },
      {
        text: "Granting AI rights is unnecessary and complicates human priorities.",
        isCorrect: false,
      },
      {
        text: "Ethical AI treatment fosters societal acceptance of advanced technologies.",
        isCorrect: true,
      }
    ]
  },
  artificialArtistScenario: {
    npcArgument: "Should AI-generated art be considered the same as human-created art?",
    rebuttals: [
      "AI art lacks the emotional depth of human-created art.",
      "It could devalue the work of human artists in the market.",
      "AI cannot experience or convey genuine creativity."
    ],
    playerArguments: [
      {
        text: "AI-generated art expands artistic possibilities and innovation.",
        isCorrect: true,
      },
      {
        text: "AI art should not be valued as highly as human-created art.",
        isCorrect: false,
      },
      {
        text: "AI art fosters collaboration between humans and machines.",
        isCorrect: true,
      }
    ]
  },
  rogueCoderScenario: {
    npcArgument: "Should developers be held accountable for unintended harm caused by AI?",
    rebuttals: [
      "Developers cannot foresee every potential misuse of their code.",
      "Blaming developers might discourage innovation in AI.",
      "Existing laws provide adequate accountability measures."
    ],
    playerArguments: [
      {
        text: "Developers must prioritize ethical considerations in their work.",
        isCorrect: true,
      },
      {
        text: "Unintended harm is an inevitable part of technological progress.",
        isCorrect: false,
      },
      {
        text: "Clear accountability frameworks ensure responsible AI development.",
        isCorrect: true,
      }
    ]
  },
  selfDrivingDilemmaScenario: {
    npcArgument: "Should self-driving cars prioritize passenger safety over pedestrian safety?",
    rebuttals: [
      "Prioritizing passengers could lead to fewer overall fatalities.",
      "Pedestrian safety is a shared responsibility of all road users.",
      "Strict ethical programming might conflict with real-world scenarios."
    ],
    playerArguments: [
      {
        text: "Self-driving cars must minimize overall harm in any situation.",
        isCorrect: true,
      },
      {
        text: "Passenger safety should always come first to encourage adoption.",
        isCorrect: false,
      },
      {
        text: "Transparent ethical programming fosters public trust in self-driving cars.",
        isCorrect: true,
      }
    ]
  },
  learningMachineScenario: {
    npcArgument: "Can AI personalize education effectively without reinforcing biases?",
    rebuttals: [
      "AI relies on existing data, which often contains inherent biases.",
      "Human teachers provide mentorship that AI cannot replicate.",
      "Over-reliance on AI might reduce critical thinking among students."
    ],
    playerArguments: [
      {
        text: "AI can enhance learning by tailoring content to individual needs.",
        isCorrect: true,
      },
      {
        text: "Personalized AI education risks deepening social inequalities.",
        isCorrect: false,
      },
      {
        text: "AI and teachers can collaborate to improve educational outcomes.",
        isCorrect: true,
      }
    ]
  },
  biasedJudgeScenario: {
    npcArgument: "Can AI judges deliver fair rulings in legal cases?",
    rebuttals: [
      "AI lacks human empathy and contextual understanding.",
      "Biases in training data could lead to unjust rulings.",
      "AI cannot adapt to changing societal norms and laws."
    ],
    playerArguments: [
      {
        text: "AI can enhance consistency and reduce human error in judgments.",
        isCorrect: true,
      },
      {
        text: "Bias in training data undermines AI's ability to deliver fair rulings.",
        isCorrect: true,
      },
      {
        text: "Human judges are irreplaceable in understanding complex societal contexts.",
        isCorrect: true,
      }
    ]
  },
  minorityReportScenario: {
    npcArgument: "Should predictive policing AI be deployed to prevent crimes before they occur?",
    rebuttals: [
      "Predictive policing can reinforce racial and socioeconomic biases.",
      "Pre-crime policing risks punishing people for crimes they have not committed.",
      "AI systems cannot fully understand human behavior and intentions."
    ],
    playerArguments: [
      {
        text: "Predictive policing reduces crime rates and improves public safety.",
        isCorrect: false,
      },
      {
        text: "Accountability and transparency in AI reduce the risk of bias.",
        isCorrect: true,
      },
      {
        text: "Predictive policing undermines fundamental legal principles like innocence until proven guilty.",
        isCorrect: true,
      }
    ]
  },
  carbonFootprintScenario: {
    npcArgument: "Should AI research prioritize reducing its environmental impact?",
    rebuttals: [
      "AI development is essential for solving global challenges like climate change.",
      "Focusing on environmental impact might slow down critical AI innovation.",
      "Renewable energy and optimization can offset AI's environmental footprint."
    ],
    playerArguments: [
      {
        text: "AI research must prioritize reducing energy consumption and emissions.",
        isCorrect: true,
      },
      {
        text: "The benefits of AI innovation outweigh its environmental costs.",
        isCorrect: false,
      },
      {
        text: "Renewable energy sources make AI research sustainable.",
        isCorrect: true,
      }
    ]
  },
  perfectPartnerScenario: {
    npcArgument: "Should AI companions be considered valid substitutes for human relationships?",
    rebuttals: [
      "AI companions lack genuine emotions and understanding.",
      "Dependence on AI could erode traditional human relationships.",
      "AI cannot provide the depth and complexity of human connections."
    ],
    playerArguments: [
      {
        text: "AI companions offer comfort and reduce loneliness for some people.",
        isCorrect: true,
      },
      {
        text: "AI companions should not replace human relationships but complement them.",
        isCorrect: true,
      },
      {
        text: "Relying on AI companions undermines the value of human connection.",
        isCorrect: false,
      }
    ]
  },
  algorithmicDoctorScenario: {
    npcArgument: "Should AI doctors replace human doctors in diagnostics and treatment?",
    rebuttals: [
      "AI lacks the intuition and experience of human doctors.",
      "Misdiagnoses by AI can have severe consequences without proper oversight.",
      "Patients might distrust AI-only healthcare systems."
    ],
    playerArguments: [
      {
        text: "AI enhances diagnostic accuracy and reduces human error.",
        isCorrect: true,
      },
      {
        text: "Human oversight ensures safety and accountability in AI healthcare.",
        isCorrect: true,
      },
      {
        text: "AI doctors cannot address the emotional and psychological needs of patients.",
        isCorrect: true,
      }
    ]
  },
  faceOfDeceptionScenario: {
    npcArgument: "Should deepfake technology be banned altogether?",
    rebuttals: [
      "Deepfakes can be used for malicious purposes like misinformation.",
      "They undermine trust in media and authentic content.",
      "Banning the technology might stifle its positive potential uses."
    ],
    playerArguments: [
      {
        text: "Deepfakes should be regulated, not banned, to prevent misuse.",
        isCorrect: true,
      },
      {
        text: "Deepfakes have legitimate applications in art and entertainment.",
        isCorrect: true,
      },
      {
        text: "The risks of deepfakes outweigh any potential benefits, so a ban is necessary.",
        isCorrect: false,
      }
    ]
  },
  joblessFutureScenario: {
    npcArgument: "Should universal basic income (UBI) be adopted in response to automation?",
    rebuttals: [
      "UBI could discourage people from seeking employment.",
      "Funding UBI might lead to increased taxes.",
      "Re-skilling programs are a better solution to job displacement."
    ],
    playerArguments: [
      {
        text: "UBI provides a safety net, allowing people to pursue meaningful activities.",
        isCorrect: true,
      },
      {
        text: "Re-skilling programs are sufficient to address job displacement.",
        isCorrect: false,
      },
      {
        text: "UBI promotes social equity in an era of automation.",
        isCorrect: true,
      }
    ]
  },
  watchfulEyeScenario: {
      npcArgument: "Should governments use AI for mass surveillance?",
      rebuttals: [
        "Mass surveillance infringes on personal freedoms.",
        "AI-driven surveillance systems can be biased and discriminatory.",
        "Over-reliance on surveillance erodes public trust."
      ],
      playerArguments: [
        {
          text: "Mass surveillance ensures safety and security for all.",
          isCorrect: false,
        },
        {
          text: "Surveillance should be transparent and accountable.",
          isCorrect: true,
        },
        {
          text: "The risks of mass surveillance outweigh the benefits.",
          isCorrect: true,
        },
      ],
  }
    
};

export default argumentData;
