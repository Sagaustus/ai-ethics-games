export const watchfulEyeScenario = {
    title: "The Watchful Eye",
    description:
      "Balancing national security and individual privacy. Should facial recognition systems be adopted despite their ethical concerns?",
    link: "/exploration/watchfulEyeScenario",
    image:
      "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.08_-_A_conceptual_image_representing_Surveillance_in_AI_ethics._The_image_features_a_futuristic_cityscape_with_a_large_all-seeing_digital_eye_hovering_a_ragbcq.webp",
    tags: ["Surveillance", "Privacy", "Security"],
    exploration: [
      {
        text: `
          The city council is considering implementing a **facial recognition system** to enhance public safety.
          As a technology ethics consultant, you are tasked with exploring the potential benefits and risks of this system.
          How will you proceed?`,
        choices: [
          {
            text: "Support the system for its efficiency in crime prevention.",
            outcome: "supportSystem",
          },
          {
            text: "Reject the system due to privacy and civil liberty concerns.",
            outcome: "rejectSystem",
          },
          {
            text: "Push for ethical guidelines before approving the system.",
            outcome: "setGuidelines",
          },
          {
            text: "Investigate the biases and risks of the system first.",
            outcome: "investigateBias",
          },
        ],
      },
      {
        outcome: "supportSystem",
        text: `
          You decide to support the facial recognition system. The technology is implemented, and crime rates drop significantly.
          However, reports emerge that the system disproportionately targets minority groups, sparking public outrage.`,
        choices: [
          {
            text: "Acknowledge the bias and push for retraining the system.",
            outcome: "retrainSystem",
          },
          {
            text: "Defend the system, focusing on its success in crime prevention.",
            outcome: "defendSystem",
          },
        ],
      },
      {
        outcome: "rejectSystem",
        text: `
          You reject the system, citing privacy and civil liberty concerns. While the council appreciates your stance, crime rates remain a concern.
          Some critics accuse you of prioritizing ideals over public safety.`,
        choices: [
          {
            text: "Propose alternative technologies that respect privacy.",
            outcome: "proposeAlternatives",
          },
          {
            text: "Reconsider the decision and suggest limited implementation.",
            outcome: "limitedImplementation",
          },
        ],
      },
      {
        outcome: "setGuidelines",
        text: `
          You propose strict ethical guidelines before approving the system, including **regular audits** and **transparency reports**.
          The council agrees, and public trust is maintained while the system operates ethically.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "investigateBias",
        text: `
          You decide to investigate the system's biases before making a decision. Your findings confirm that the technology has accuracy issues, particularly for minority groups.`,
        choices: [
          {
            text: "Recommend halting the project until the bias is resolved.",
            outcome: "haltProject",
          },
          {
            text: "Suggest retraining the AI to improve fairness.",
            outcome: "retrainSystem",
          },
        ],
      },
      {
        outcome: "retrainSystem",
        text: `
          The system is retrained with more inclusive data, improving its accuracy and fairness.
          Public trust is restored, and the city benefits from enhanced safety without compromising civil liberties.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "defendSystem",
        text: `
          You defend the system, emphasizing its role in crime prevention despite public concerns.
          However, the controversy grows, and trust in the technology is undermined.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "proposeAlternatives",
        text: `
          You propose alternative technologies, such as **community-based policing** and **non-invasive monitoring**, which are more respectful of privacy.
          Crime rates improve gradually, and public trust in ethical technology strengthens.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "limitedImplementation",
        text: `
          You suggest **limited implementation** of the system in high-risk areas only. While privacy concerns remain, the council sees this as a balanced approach.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
      {
        outcome: "haltProject",
        text: `
          You recommend halting the project until the biases are fully addressed. The council agrees, but some argue that safety concerns are being overlooked.`,
        choices: [
          {
            text: "Conclude the exploration and proceed to argument phase.",
            outcome: "end",
          },
        ],
      },
    ],
    endMessage: `
      Thank you for exploring the ethical challenges of facial recognition systems.
      Your decisions have shaped the outcome and set a precedent for AI ethics.
      Would you like to play again or explore another scenario?`,
  };  