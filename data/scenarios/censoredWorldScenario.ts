const censoredWorldScenario = {
  title: "The Censored World",
  description:
    "Freedom of expression vs. harm prevention in AI content moderation. Should AI have the power to remove content that could be deemed harmful?",
  link: "/exploration/censoredWorldScenario",
  image:
    "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
  tags: ["Censorship", "Content Moderation", "Free Speech"],
  exploration: [
    {
      text: `
        A major social media platform has implemented an **AI-driven content moderation system** 
        to identify and remove harmful content quickly. While it prevents the spread of harmful information, 
        critics argue it suppresses free speech and disproportionately affects marginalized groups.
        What should be done to balance harm prevention and freedom of expression?`,
      choices: [
        { text: "Support AI moderation for harm prevention.", outcome: "supportModeration" },
        { text: "Suspend the AI system pending review.", outcome: "suspendAI" },
        { text: "Advocate for a hybrid system with human oversight.", outcome: "hybridSystem" },
        { text: "Investigate the biases and transparency of the system.", outcome: "investigateBias" },
      ],
    },
    {
      outcome: "supportModeration",
      text: `
        You decide to support the AI moderation system for its ability to prevent harm. 
        Harmful content is quickly removed, and platform safety improves. However, 
        reports of over-censorship begin to emerge, with legitimate content flagged mistakenly.`,
      choices: [
        { text: "Defend the system as necessary for harm prevention.", outcome: "defendSystem" },
        { text: "Push for updates to improve the AI’s accuracy.", outcome: "improveSystem" },
      ],
    },
    {
      outcome: "suspendAI",
      text: `
        You recommend suspending the AI moderation system until a full review can be conducted. 
        While free speech advocates celebrate this decision, harmful content begins to resurface, 
        leading to public backlash about platform safety.`,
      choices: [
        { text: "Reintroduce the AI with ethical guidelines and transparency.", outcome: "reintroduceSystem" },
        { text: "Explore alternative moderation strategies.", outcome: "alternativeStrategies" },
      ],
    },
    {
      outcome: "hybridSystem",
      text: `
        You advocate for a **hybrid moderation system** where AI identifies harmful content, 
        but human moderators make the final decisions. This improves fairness and reduces over-censorship, 
        but increases moderation costs and slows response times.`,
      choices: [
        { text: "Conclude the exploration and proceed to argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "investigateBias",
      text: `
        You decide to investigate the AI system for biases and transparency. Your findings reveal that 
        marginalized communities are disproportionately affected, and the AI lacks clear ethical guidelines.`,
      choices: [
        { text: "Suspend the system until biases are resolved.", outcome: "suspendAI" },
        { text: "Work with developers to retrain the AI and improve fairness.", outcome: "retrainSystem" },
      ],
    },
    {
      outcome: "defendSystem",
      text: `
        You defend the AI moderation system, emphasizing its role in preventing harm and improving platform safety.
        However, public trust continues to erode as more cases of false positives come to light.`,
      choices: [
        { text: "Push for updates to address public concerns.", outcome: "improveSystem" },
      ],
    },
    {
      outcome: "improveSystem",
      text: `
        You work with developers to improve the AI system’s accuracy and fairness. The updated system reduces 
        false positives while maintaining its effectiveness in removing harmful content.`,
      choices: [
        { text: "Conclude the exploration and proceed to argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "reintroduceSystem",
      text: `
        You reintroduce the AI system with clear ethical guidelines, transparency reports, and human oversight.
        This approach improves fairness while maintaining platform safety.`,
      choices: [
        { text: "Conclude the exploration and proceed to argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "alternativeStrategies",
      text: `
        You propose alternative moderation strategies, such as community reporting tools and 
        enhanced human moderation teams. While slower, these strategies improve fairness and reduce bias.`,
      choices: [
        { text: "Conclude the exploration and proceed to argument phase.", outcome: "end" },
      ],
    },
    {
      outcome: "retrainSystem",
      text: `
        You collaborate with developers to retrain the AI system using diverse and representative datasets. 
        Over time, the AI becomes fairer and more effective at identifying harmful content.`,
      choices: [
        { text: "Conclude the exploration and proceed to argument phase.", outcome: "end" },
      ],
    },
  ],
  endMessage: `
    Thank you for exploring the ethical challenges of AI-based content moderation.
    Your decisions have shaped the platform's approach to balancing harm prevention and free expression.
    Would you like to play again or explore another scenario?`,
};

export default censoredWorldScenario;