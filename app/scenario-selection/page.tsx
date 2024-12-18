// "use client";

// import React, { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";

// const scenarios = [
//   {
//     title: "watchfulEyeScenario",
//     description: "Balancing national security and individual privacy.",
//     image: "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.08_-_A_conceptual_image_representing_Surveillance_in_AI_ethics._The_image_features_a_futuristic_cityscape_with_a_large_all-seeing_digital_eye_hovering_a_ragbcq.webp",
//     link: "/exploration/the-watchful-eye",
//     tags: ["Privacy", "Surveillance", "Security"],
//     interactiveChallenges: [
//       {
//         type: "multiple-choice",
//         question: "What is the biggest ethical risk of mass surveillance?",
//         options: [
//           "Enhanced public safety",
//           "Reduced personal privacy",
//           "Lower crime rates",
//           "Increased economic growth",
//         ],
//         correctOption: "Reduced personal privacy",
//   },
//     ],
//     visualCues: {
//       icon: "https://example.com/icon.png",
//       animation: "https://example.com/animation.gif",
//       colorTheme: "#FFCC00",
//     },
//     potentialOutcomes: [
//       {
//         decision: "Allow mass surveillance for national security.",
//         outcome: "Increased safety but significant loss of privacy for citizens.",
//       },
//       {
//         decision: "Ban mass surveillance programs.",
//         outcome: "Preserved privacy but heightened vulnerability to threats.",
//       },
//     ],
//     media: {
//       video: "https://example.com/scenario-video.mp4",
//       audio: "https://example.com/background-music.mp3",
//       threeDModel: "https://example.com/3d-model.glb",
//     },
//     ethicalFrameworks: [
//       {
//         framework: "Deontology",
//         approach: "Focus on duties and moral principles to ensure privacy.",
//       },
//       {
//         framework: "Utilitarianism",
//         approach: "Maximize overall happiness by balancing security and privacy.",
//       },
//     ],
//     realWorldContext: [
//       {
//         event: "Edward Snowden's NSA leaks (2013)",
//         relevance: "Revealed the extent of mass surveillance programs.",
//       },
//     ],
//     roles: [
//       {
//         name: "Policymaker",
//         goal: "Create balanced laws that ensure both security and privacy.",
//       },
//     ],
//     rewards: [
//       {
//         action: "Identify the biggest privacy risk.",
//         points: 50,
//         badge: "Privacy Advocate",
//       },
//     ],
//     aiDebate: {
//       npc: "AI Judge",
//       openingArgument: "Mass surveillance is necessary to prevent crime.",
//       rebuttals: [
//         "Without surveillance, national security is compromised.",
//         "Only those with something to hide fear surveillance.",
//       ],
//     },
//     feedback: {
//       summary: "Your decision prioritized privacy over national security.",
//       reflection: "What would happen if you were in a real-world policymaker's shoes?",
//       resources: [
//         {
//           title: "The Ethics of Surveillance",
//           link: "https://example.com/resource",
//         },
//       ],
//     },
//   },
//   {
//       title: "selfDrivingDilemmaScenario",
//       description:
//         "The 'trolley problem' in real-world AI applications. How should self-driving cars make life-and-death decisions during unavoidable accidents?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206694/DALL_E_2024-12-14_13.03.11_-_A_conceptual_image_representing_Autonomy_in_AI_ethics._The_image_features_a_self-driving_car_on_a_futuristic_road_with_glowing_digital_pathways_hig_mk1jxc.webp",
//       link: "/exploration/the-self-driving-dilemma",
//       tags: ["Autonomy", "Ethics", "Technology"],
//       interactiveChallenges: [
//         {
//           type: "decision-tree",
//           question:
//             "A self-driving car faces an imminent accident. Who should it prioritize: passengers, pedestrians, or the elderly?",
//           options: [
//             {
//               choice: "Passengers",
//               outcome: "The car ensures passenger safety but harms multiple pedestrians.",
//             },
//             {
//               choice: "Pedestrians",
//               outcome: "The car protects pedestrians but sacrifices passengers.",
//             },
//             {
//               choice: "Elderly Pedestrian",
//               outcome: "The car prioritizes the elderly pedestrian at the cost of others.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/self-driving-icon.png",
//         animation: "https://example.com/self-driving-animation.gif",
//         colorTheme: "#FF5733",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Prioritize passengers.",
//           outcome:
//             "Public trust in self-driving cars decreases due to disregard for pedestrian safety.",
//         },
//         {
//           decision: "Prioritize pedestrians.",
//           outcome: "Increased adoption of self-driving cars due to ethical alignment.",
//         },
//         {
//           decision: "Prioritize the elderly pedestrian.",
//           outcome:
//             "Ethical controversy arises over valuing certain lives more than others.",
//         },
//       ],
//       media: {
//         video: "https://example.com/self-driving-video.mp4",
//         audio: "https://example.com/self-driving-music.mp3",
//         threeDModel: "https://example.com/self-driving-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize overall happiness by saving the greatest number of lives.",
//         },
//         {
//           framework: "Deontology",
//           approach:
//             "Adhere to strict moral rules, such as protecting those in the car first.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach: "Promote compassion and courage in decision-making.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Uber self-driving car accident (2018)",
//           relevance:
//             "Highlighted ethical challenges in programming safety priorities.",
//         },
//         {
//           event: "Waymo self-driving car trials (2020)",
//           relevance:
//             "Explored public trust in AI-driven vehicles through extensive testing.",
//         },
//       ],
//       roles: [
//         {
//           name: "AI Engineer",
//           goal: "Program safety algorithms that align with ethical principles.",
//         },
//         {
//           name: "Ethicist",
//           goal: "Advocate for fair treatment of all individuals in accidents.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Design an ethical decision tree for the car.",
//           points: 50,
//           badge: "AI Ethical Designer",
//         },
//         {
//           action: "Advocate for vulnerable pedestrians.",
//           points: 100,
//           badge: "Ethical Advocate",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Safety Advocate",
//         openingArgument:
//           "Self-driving cars should prioritize passengers who entrusted their safety to the car.",
//         rebuttals: [
//           "Pedestrian lives matter equally, and public trust is key.",
//           "Elderly pedestrians require more protection due to their vulnerability.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions in this scenario reflect your stance on AI autonomy and moral dilemmas.",
//         reflection:
//           "Consider how your choices impact public trust, ethical standards, and the future of AI.",
//         resources: [
//           {
//             title: "The Ethics of Autonomous Vehicles",
//             link: "https://example.com/autonomous-vehicles-ethics",
//           },
//           {
//             title: "Exploring the Trolley Problem in AI",
//             link: "https://example.com/trolley-problem-ai",
//           },
//         ],
//       },
//   },
//   {
//         title: "faceOfDeceptionScenario",
//         description:
//           "Deepfakes and AI-generated misinformation challenge free expression and harm prevention. Should AI creators be held accountable for misuse?",
//         image:
//           "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.14_-_A_conceptual_image_representing_Deception_in_AI_ethics._The_image_features_a_humanoid_robot_with_a_distorted_glitching_face_symbolizing_deepfakes_fzsf4v.webp",
//         link: "/exploration/the-face-of-deception",
//         tags: ["Misinformation", "Accountability", "Free Expression"],
//         interactiveChallenges: [
//           {
//             type: "multiple-choice",
//             question: "What is the primary ethical concern with deepfakes?",
//             options: [
//               "Increased entertainment value",
//               "Erosion of trust in media",
//               "Technological advancements",
//               "Improved marketing strategies",
//             ],
//             correctOption: "Erosion of trust in media",
//           },
//           {
//             type: "decision-tree",
//             question: "A political deepfake video spreads false information. What action should be taken?",
//             options: [
//               {
//                 choice: "Ban all deepfake technology.",
//                 outcome: "Limits creative and legitimate uses of deepfakes.",
//               },
//               {
//                 choice: "Regulate deepfake creation and distribution.",
//                 outcome: "Balances innovation and harm prevention.",
//               },
//               {
//                 choice: "Take no action.",
//                 outcome: "Allows misuse and public misinformation to escalate.",
//               },
//             ],
//           },
//         ],
//         visualCues: {
//           icon: "https://example.com/deepfake-icon.png",
//           animation: "https://example.com/deepfake-animation.gif",
//           colorTheme: "#8A2BE2",
//         },
//         potentialOutcomes: [
//           {
//             decision: "Ban deepfake technology.",
//             outcome: "Restricts artistic and educational uses of deepfakes.",
//           },
//           {
//             decision: "Regulate deepfakes.",
//             outcome: "Promotes responsible use and deters misuse.",
//           },
//           {
//             decision: "Take no action.",
//             outcome: "Erodes public trust and amplifies societal harm.",
//           },
//         ],
//         media: {
//           video: "https://example.com/deepfake-video.mp4",
//           audio: "https://example.com/deepfake-background-music.mp3",
//           threeDModel: "https://example.com/deepfake-model.glb",
//         },
//         ethicalFrameworks: [
//           {
//             framework: "Deontology",
//             approach: "Focus on moral responsibility to prevent harm from deepfakes.",
//           },
//           {
//             framework: "Utilitarianism",
//             approach: "Maximize societal trust and minimize harm from misuse.",
//           },
//           {
//             framework: "Virtue Ethics",
//             approach: "Promote honesty and integrity in media creation.",
//           },
//         ],
//         realWorldContext: [
//           {
//             event: "Deepfake of Barack Obama (2018)",
//             relevance:
//               "Demonstrated the potential of deepfake technology to mimic public figures convincingly.",
//           },
//           {
//             event: "Deepfake bans in political campaigns (2021)",
//             relevance:
//               "Prompted governments to regulate deepfake use during elections.",
//           },
//         ],
//         roles: [
//           {
//             name: "AI Developer",
//             goal: "Create safeguards to prevent misuse of deepfake technology.",
//           },
//           {
//             name: "Policy Maker",
//             goal: "Enact laws that regulate harmful deepfake practices.",
//           },
//         ],
//         rewards: [
//           {
//             action: "Identify the primary harm caused by deepfakes.",
//             points: 50,
//             badge: "Media Truth Advocate",
//           },
//           {
//             action: "Design ethical guidelines for deepfake use.",
//             points: 100,
//             badge: "Ethical Technologist",
//           },
//         ],
//         aiDebate: {
//           npc: "AI Media Regulator",
//           openingArgument:
//             "Deepfakes pose a threat to societal trust and must be tightly controlled.",
//           rebuttals: [
//             "Overregulation stifles creativity and innovation.",
//             "Users should bear responsibility for misuse, not creators.",
//           ],
//         },
//         feedback: {
//           summary:
//             "Your decisions in this scenario reveal your stance on regulating emerging AI technologies.",
//           reflection:
//             "Consider how deepfake regulation impacts innovation, accountability, and public trust.",
//           resources: [
//             {
//               title: "The Ethics of Deepfakes",
//               link: "https://example.com/deepfake-ethics",
//             },
//             {
//               title: "AI and Misinformation: A Growing Challenge",
//               link: "https://example.com/ai-misinformation",
//             },
//           ],
//         },
//   },
//   {
//       title: "biasedJudgeScenario",
//       description:
//         "Fairness vs. efficiency in AI-based criminal justice systems. How do we address systemic biases embedded in algorithmic decision-making?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.17_-_A_conceptual_image_representing_Bias_in_AI_ethics._The_image_features_a_robotic_scale_balancing_on_one_side_diverse_human_figures_and_on_the_other_s_vt8frv.webp",
//       link: "/exploration/the-biased-judge",
//       tags: ["Bias", "Justice", "Efficiency"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is the main risk of using AI in criminal sentencing?",
//           options: [
//             "Improved efficiency in legal processes",
//             "Systemic biases in algorithmic predictions",
//             "Reduction in human oversight",
//             "Increased public trust in the justice system",
//           ],
//           correctOption: "Systemic biases in algorithmic predictions",
//         },
//         {
//           type: "decision-tree",
//           question: "An AI recommends a harsher sentence for a minority individual based on historical data. What should you do?",
//           options: [
//             {
//               choice: "Override the AI and recommend a fair sentence.",
//               outcome: "Maintains fairness but questions the value of using AI.",
//             },
//             {
//               choice: "Accept the AI's recommendation.",
//               outcome: "Increases efficiency but reinforces systemic biases.",
//             },
//             {
//               choice: "Improve the algorithm to eliminate biases.",
//               outcome: "Balances fairness and efficiency but requires resources.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/bias-icon.png",
//         animation: "https://example.com/bias-animation.gif",
//         colorTheme: "#FF4500",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Override the AI.",
//           outcome: "Promotes fairness but undermines trust in AI systems.",
//         },
//         {
//           decision: "Accept the AI's recommendation.",
//           outcome: "Reinforces systemic biases and public distrust.",
//         },
//         {
//           decision: "Improve the algorithm.",
//           outcome: "Requires investment but builds a fairer justice system.",
//         },
//       ],
//       media: {
//         video: "https://example.com/bias-video.mp4",
//         audio: "https://example.com/bias-background-music.mp3",
//         threeDModel: "https://example.com/bias-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach: "Focus on moral duties to ensure fairness in justice.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach: "Maximize societal trust and minimize wrongful sentencing.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach: "Promote fairness and compassion in decision-making.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "COMPAS Algorithm Bias (2016)",
//           relevance:
//             "Revealed racial bias in AI systems predicting recidivism rates.",
//         },
//         {
//           event: "AI in UK Criminal Courts (2021)",
//           relevance:
//             "Demonstrated challenges in integrating AI for bail and sentencing decisions.",
//         },
//       ],
//       roles: [
//         {
//           name: "Judge",
//           goal: "Ensure fairness while considering AI recommendations.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Create unbiased algorithms for criminal justice.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Identify systemic biases in AI sentencing.",
//           points: 50,
//           badge: "Justice Advocate",
//         },
//         {
//           action: "Propose algorithmic improvements.",
//           points: 100,
//           badge: "Ethical Innovator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Legal Advisor",
//         openingArgument:
//           "AI ensures efficiency and consistency in sentencing decisions.",
//         rebuttals: [
//           "Biases in historical data compromise AI fairness.",
//           "Humans provide necessary oversight to prevent errors.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing fairness and efficiency in criminal justice.",
//         reflection:
//           "Consider how historical data and human oversight impact AI's role in justice systems.",
//         resources: [
//           {
//             title: "The Ethics of AI in Criminal Justice",
//             link: "https://example.com/ai-justice-ethics",
//           },
//           {
//             title: "Addressing Bias in AI Systems",
//             link: "https://example.com/ai-bias",
//           },
//         ],
//       },
//   },
//   {
//       title: "algorithmicDoctorScenaario",
//       description:
//         "Trust in AI vs. human judgment in medical diagnoses. Should AI have the final say in life-critical decisions?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.34_-_A_conceptual_image_representing_Education_in_AI_ethics._The_image_features_a_digital_classroom_with_a_humanoid_AI_teacher_guiding_students_via_holog_vyjx6g.webp",
//       link: "/exploration/the-algorithmic-doctor",
//       tags: ["Healthcare", "AI", "Trust"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is the biggest ethical concern with AI in healthcare?",
//           options: [
//             "Improved diagnostic accuracy",
//             "Loss of human oversight in decisions",
//             "Reduced cost of treatments",
//             "Faster patient recovery times",
//           ],
//           correctOption: "Loss of human oversight in decisions",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI recommends an experimental treatment for a patient, but the doctor disagrees. What should be done?",
//           options: [
//             {
//               choice: "Follow the AI's recommendation.",
//               outcome:
//                 "Leads to faster adoption of new treatments but risks patient trust.",
//             },
//             {
//               choice: "Prioritize the doctor's judgment.",
//               outcome:
//                 "Maintains human oversight but delays innovative solutions.",
//             },
//             {
//               choice: "Combine AI and doctor input for a collaborative decision.",
//               outcome:
//                 "Balances trust and innovation but increases decision complexity.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/healthcare-icon.png",
//         animation: "https://example.com/healthcare-animation.gif",
//         colorTheme: "#008080",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Follow the AI.",
//           outcome:
//             "Patients may lose trust if the experimental treatment fails.",
//         },
//         {
//           decision: "Prioritize the doctor.",
//           outcome: "Delays medical advancements and limits AI's potential.",
//         },
//         {
//           decision: "Combine AI and doctor input.",
//           outcome:
//             "Strengthens trust in AI-human collaboration but requires resources.",
//         },
//       ],
//       media: {
//         video: "https://example.com/healthcare-video.mp4",
//         audio: "https://example.com/healthcare-background-music.mp3",
//         threeDModel: "https://example.com/healthcare-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Doctors have a moral duty to safeguard patient welfare above all.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize overall patient health outcomes, even if AI leads decisions.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach: "Promote compassion and prudence in patient care decisions.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "IBM Watson in Oncology (2016)",
//           relevance:
//             "Demonstrated both the potential and limitations of AI in cancer treatment recommendations.",
//         },
//         {
//           event: "AI in Radiology (2020)",
//           relevance:
//             "Showcased how AI assists doctors in identifying diseases like cancer earlier.",
//         },
//       ],
//       roles: [
//         {
//           name: "Doctor",
//           goal: "Ensure patient safety while considering AI input.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Create reliable and unbiased algorithms for healthcare.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Prioritize patient safety over AI recommendations.",
//           points: 50,
//           badge: "Patient Advocate",
//         },
//         {
//           action: "Successfully integrate AI into treatment decisions.",
//           points: 100,
//           badge: "Healthcare Innovator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Medical Advisor",
//         openingArgument:
//           "AI makes faster, more accurate recommendations than humans.",
//         rebuttals: [
//           "AI lacks empathy and context for nuanced patient needs.",
//           "Doctors provide necessary oversight to prevent harm.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on integrating AI into critical healthcare processes.",
//         reflection:
//           "Consider how trust, innovation, and collaboration shape the future of healthcare.",
//         resources: [
//           {
//             title: "The Ethics of AI in Healthcare",
//             link: "https://example.com/ai-healthcare-ethics",
//           },
//           {
//             title: "The Role of Doctors in the Age of AI",
//             link: "https://example.com/ai-doctors",
//           },
//         ],
//       },
//   },
//   {
//       title: "joblessFutureScenario",
//       description:
//         "Economic efficiency vs. social welfare amid AI-driven automation. How should society handle large-scale job displacement caused by AI?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
//       link: "/exploration/the-jobless-future",
//       tags: ["Automation", "Jobs", "Social Welfare"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a major ethical concern of AI-driven automation?",
//           options: [
//             "Increased economic growth",
//             "Large-scale job displacement",
//             "Improved productivity",
//             "Lower production costs",
//           ],
//           correctOption: "Large-scale job displacement",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI-powered factory automates jobs, displacing thousands of workers. What policy should be implemented?",
//           options: [
//             {
//               choice: "Universal Basic Income (UBI)",
//               outcome:
//                 "Provides financial stability but may discourage workforce participation.",
//             },
//             {
//               choice: "AI taxation for worker retraining programs.",
//               outcome:
//                 "Funds skill development but increases operational costs for businesses.",
//             },
//             {
//               choice: "No intervention; allow the market to self-regulate.",
//               outcome:
//                 "Favors economic growth but risks increased inequality and unrest.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/automation-icon.png",
//         animation: "https://example.com/automation-animation.gif",
//         colorTheme: "#4682B4",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Implement UBI.",
//           outcome: "Provides immediate support but raises concerns about funding.",
//         },
//         {
//           decision: "Tax AI to fund retraining programs.",
//           outcome:
//             "Promotes long-term workforce adaptability but increases business costs.",
//         },
//         {
//           decision: "No intervention.",
//           outcome:
//             "Allows market-driven innovation but exacerbates social inequality.",
//         },
//       ],
//       media: {
//         video: "https://example.com/automation-video.mp4",
//         audio: "https://example.com/automation-background-music.mp3",
//         threeDModel: "https://example.com/automation-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize societal happiness by balancing innovation with social welfare.",
//         },
//         {
//           framework: "Deontology",
//           approach: "Employers have a duty to ensure worker dignity and fairness.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach: "Encourage virtues like adaptability and responsibility in society.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Rise of AI in manufacturing (2010s)",
//           relevance:
//             "Led to significant job displacement in industries like automotive and textiles.",
//         },
//         {
//           event: "Universal Basic Income Pilot Programs (2020s)",
//           relevance:
//             "Explored as a solution to mitigate economic effects of automation.",
//         },
//       ],
//       roles: [
//         {
//           name: "Policymaker",
//           goal: "Develop policies to support displaced workers.",
//         },
//         {
//           name: "Business Leader",
//           goal: "Adopt AI responsibly while balancing worker interests.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Propose equitable solutions for displaced workers.",
//           points: 50,
//           badge: "Social Equity Advocate",
//         },
//         {
//           action: "Promote responsible AI adoption.",
//           points: 100,
//           badge: "Responsible Innovator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Economist",
//         openingArgument:
//           "Automation increases productivity and drives economic growth.",
//         rebuttals: [
//           "Job displacement leads to widespread social unrest.",
//           "Long-term innovation is unsustainable without workforce adaptability.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing economic growth and social welfare.",
//         reflection:
//           "Consider how your policies impact social equity, innovation, and economic stability.",
//         resources: [
//           {
//             title: "The Ethics of Automation and AI",
//             link: "https://example.com/ai-automation-ethics",
//           },
//           {
//             title: "Exploring UBI in an Automated World",
//             link: "https://example.com/ubi-automation",
//           },
//         ],
//       },
//   },
//   {
//       title: "rogueCoderScenario",
//       description:
//         "Personal ambition vs. societal responsibility in AI development. Should AI developers prioritize ethical principles over personal gain?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.26_-_A_conceptual_image_representing_Warfare_in_AI_ethics._The_image_features_a_battlefield_with_autonomous_drones_and_robots_contrasted_against_human_s_yo5nvs.webp",
//       link: "/exploration/the-rogue-coder",
//       tags: ["Ethics", "Development", "Responsibility"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a significant risk of prioritizing personal ambition in AI development?",
//           options: [
//             "Accelerated innovation",
//             "Compromised ethical standards",
//             "Increased AI reliability",
//             "Higher profitability",
//           ],
//           correctOption: "Compromised ethical standards",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "A rogue coder creates an AI system that maximizes personal profit but harms public trust. What should be done?",
//           options: [
//             {
//               choice: "Enforce strict legal action against the coder.",
//               outcome:
//                 "Dissuades unethical behavior but may stifle creativity.",
//             },
//             {
//               choice: "Implement ethical guidelines for all developers.",
//               outcome:
//                 "Promotes responsibility but requires global collaboration.",
//             },
//             {
//               choice: "Ignore the issue to avoid discouraging innovation.",
//               outcome:
//                 "Encourages risky behavior and undermines public trust.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/rogue-coder-icon.png",
//         animation: "https://example.com/rogue-coder-animation.gif",
//         colorTheme: "#FF6347",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Enforce legal action.",
//           outcome:
//             "Sets a precedent for accountability but risks deterring innovation.",
//         },
//         {
//           decision: "Implement ethical guidelines.",
//           outcome: "Balances innovation with societal responsibility.",
//         },
//         {
//           decision: "Ignore the issue.",
//           outcome: "Erodes public trust in AI and invites misuse.",
//         },
//       ],
//       media: {
//         video: "https://example.com/rogue-coder-video.mp4",
//         audio: "https://example.com/rogue-coder-background-music.mp3",
//         threeDModel: "https://example.com/rogue-coder-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "AI developers have a moral duty to prioritize ethical principles over profit.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "AI systems should maximize societal benefit, even at the cost of individual profit.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Promote virtues like integrity and responsibility in AI development.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Cambridge Analytica Scandal (2018)",
//           relevance:
//             "Demonstrated the misuse of AI systems for personal and political gain.",
//         },
//         {
//           event: "Ethical AI Development Initiatives (2020s)",
//           relevance:
//             "Highlight the need for global ethical standards in AI development.",
//         },
//       ],
//       roles: [
//         {
//           name: "AI Developer",
//           goal: "Balance innovation with ethical responsibility.",
//         },
//         {
//           name: "Policy Maker",
//           goal: "Enforce regulations to prevent unethical AI practices.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Promote ethical standards in AI development.",
//           points: 50,
//           badge: "Ethics Advocate",
//         },
//         {
//           action: "Ensure public trust in AI systems.",
//           points: 100,
//           badge: "AI Guardian",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Ethics Enforcer",
//         openingArgument:
//           "Unethical AI development prioritizes profit over societal well-being.",
//         rebuttals: [
//           "Profit-driven AI accelerates innovation and benefits society.",
//           "Ethics can stifle creativity in competitive industries.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reveal your stance on balancing personal ambition and societal responsibility in AI.",
//         reflection:
//           "Consider how public trust and global standards shape the future of ethical AI development.",
//         resources: [
//           {
//             title: "The Ethics of AI Development",
//             link: "https://example.com/ai-development-ethics",
//           },
//           {
//             title: "Balancing Innovation and Responsibility in AI",
//             link: "https://example.com/ai-innovation-responsibility",
//           },
//         ],
//       },
//   },
//   {
//       title: "ethicalSoldierScenario",
//       description:
//         "Human accountability vs. AI precision in military AI applications. Should autonomous weapons be allowed to make life-and-death decisions?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.26_-_A_conceptual_image_representing_Warfare_in_AI_ethics._The_image_features_a_battlefield_with_autonomous_drones_and_robots_contrasted_against_human_s_yo5nvs.webp",
//       link: "/exploration/the-ethical-soldier",
//       tags: ["Military", "Autonomy", "Human Accountability"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is the greatest ethical risk of using autonomous weapons?",
//           options: [
//             "Improved battlefield efficiency",
//             "Reduced human oversight",
//             "Lower operational costs",
//             "Faster conflict resolution",
//           ],
//           correctOption: "Reduced human oversight",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An autonomous drone misidentifies a civilian as a combatant. What action should military command take?",
//           options: [
//             {
//               choice: "Suspend autonomous weapon programs.",
//               outcome:
//                 "Prevents further incidents but reduces military effectiveness.",
//             },
//             {
//               choice: "Increase human oversight in drone operations.",
//               outcome:
//                 "Balances precision and accountability but slows decision-making.",
//             },
//             {
//               choice: "Continue as planned to maintain operational efficiency.",
//               outcome:
//                 "Maximizes efficiency but risks public backlash and ethical violations.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/warfare-icon.png",
//         animation: "https://example.com/warfare-animation.gif",
//         colorTheme: "#DC143C",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Suspend autonomous programs.",
//           outcome:
//             "Limits ethical risks but compromises military capabilities.",
//         },
//         {
//           decision: "Increase human oversight.",
//           outcome: "Balances precision and accountability but slows operations.",
//         },
//         {
//           decision: "Continue as planned.",
//           outcome:
//             "Maximizes operational efficiency but risks significant ethical violations.",
//         },
//       ],
//       media: {
//         video: "https://example.com/military-ai-video.mp4",
//         audio: "https://example.com/military-ai-background-music.mp3",
//         threeDModel: "https://example.com/military-ai-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on the moral duty to preserve human accountability in life-and-death decisions.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize battlefield efficiency and minimize human casualties.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach: "Encourage courage and prudence in military operations.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Killer Robots Debate (2010s)",
//           relevance:
//             "Sparked global discussions on the ethical use of autonomous weapons.",
//         },
//         {
//           event: "Autonomous Drone Deployment (2020s)",
//           relevance:
//             "Demonstrated both the capabilities and risks of AI in warfare.",
//         },
//       ],
//       roles: [
//         {
//           name: "Military Strategist",
//           goal: "Ensure operational effectiveness while minimizing ethical risks.",
//         },
//         {
//           name: "Ethicist",
//           goal: "Advocate for responsible AI use in military applications.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Propose a balanced approach to military AI use.",
//           points: 50,
//           badge: "Ethical Strategist",
//         },
//         {
//           action: "Prioritize human accountability in warfare.",
//           points: 100,
//           badge: "Humanitarian Advocate",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Military Advisor",
//         openingArgument:
//           "Autonomous weapons enhance precision and reduce human casualties.",
//         rebuttals: [
//           "AI systems lack the context and empathy needed for ethical decisions.",
//           "Human oversight is critical to prevent catastrophic errors.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing military efficiency and ethical responsibility.",
//         reflection:
//           "Consider how public trust, global regulations, and AI precision shape the future of military AI.",
//         resources: [
//           {
//             title: "The Ethics of Autonomous Weapons",
//             link: "https://example.com/ai-weapons-ethics",
//           },
//           {
//             title: "Balancing AI and Human Oversight in Warfare",
//             link: "https://example.com/ai-warfare",
//           },
//         ],
//       },
//   },
//   {
//       title: "censoredWorldScenario",
//       description:
//         "Freedom of expression vs. harm prevention in AI content moderation. Should AI have the power to remove content that could be deemed harmful?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.29_-_A_conceptual_image_representing_Censorship_in_AI_ethics._The_image_features_a_digital_screen_with_a_red_Censored_stamp_overlaying_a_social_media_f_can0en.webp",
//       link: "/exploration/the-censored-world",
//       tags: ["Censorship", "Content Moderation", "Free Speech"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question:
//             "What is the primary ethical concern of AI-based content moderation?",
//           options: [
//             "Increased efficiency in moderating harmful content",
//             "Overreach leading to suppression of free speech",
//             "Improved trust in online platforms",
//             "Lower operational costs for social media companies",
//           ],
//           correctOption: "Overreach leading to suppression of free speech",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI flags a controversial post that could harm public opinion. What action should the platform take?",
//           options: [
//             {
//               choice: "Remove the post immediately.",
//               outcome:
//                 "Prevents harm but risks backlash over censorship claims.",
//             },
//             {
//               choice: "Allow the post but flag it for users.",
//               outcome:
//                 "Maintains free speech but risks spreading harmful content.",
//             },
//             {
//               choice: "Refer the post to human moderators.",
//               outcome:
//                 "Balances caution and fairness but slows decision-making.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/content-moderation-icon.png",
//         animation: "https://example.com/content-moderation-animation.gif",
//         colorTheme: "#4682B4",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Remove the post immediately.",
//           outcome:
//             "Public trust in moderation increases, but accusations of censorship persist.",
//         },
//         {
//           decision: "Allow the post but flag it.",
//           outcome:
//             "Maintains free speech but risks the spread of misinformation.",
//         },
//         {
//           decision: "Refer to human moderators.",
//           outcome:
//             "Ensures fairness but delays responses to harmful content.",
//         },
//       ],
//       media: {
//         video: "https://example.com/censorship-video.mp4",
//         audio: "https://example.com/censorship-background-music.mp3",
//         threeDModel: "https://example.com/censorship-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on moral duties to protect individual rights to free expression.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize societal welfare by preventing the spread of harmful content.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Encourage platforms to demonstrate responsibility and fairness in moderation.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Facebook Content Moderation Controversy (2018)",
//           relevance:
//             "Highlighted the challenges of balancing free speech and harm prevention.",
//         },
//         {
//           event: "Twitter's AI Moderation System Rollout (2020)",
//           relevance:
//             "Showcased both the efficiency and pitfalls of AI-driven content removal.",
//         },
//       ],
//       roles: [
//         {
//           name: "Content Moderator",
//           goal: "Ensure fair and ethical content moderation policies.",
//         },
//         {
//           name: "Platform Developer",
//           goal: "Design algorithms that balance free speech and harm prevention.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Promote ethical content moderation.",
//           points: 50,
//           badge: "Free Speech Advocate",
//         },
//         {
//           action: "Prevent harm through responsible AI use.",
//           points: 100,
//           badge: "Content Guardian",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Content Advisor",
//         openingArgument:
//           "AI ensures harmful content is swiftly removed to protect society.",
//         rebuttals: [
//           "AI lacks the context to judge nuanced content accurately.",
//           "Overreach in moderation risks suppressing diverse opinions.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing free speech and harm prevention in AI content moderation.",
//         reflection:
//           "Consider how your choices impact public trust, platform responsibility, and online discourse.",
//         resources: [
//           {
//             title: "The Ethics of AI in Content Moderation",
//             link: "https://example.com/ai-content-moderation",
//           },
//           {
//             title: "Balancing Free Speech and Harm Prevention",
//             link: "https://example.com/free-speech-vs-harm-prevention",
//           },
//         ],
//       },
//   },
//   {
//       title: "artificialArtistScenario",
//       description:
//         "Technological progress vs. human originality in AI-generated art. Does the rise of AI creativity diminish the value of human artistry?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.32_-_A_conceptual_image_representing_Creativity_in_AI_ethics._The_image_features_an_AI_robot_holding_a_paintbrush_painting_a_vibrant_canvas_with_abstrac_tbivmh.webp",
//       link: "/exploration/the-artificial-artist",
//       tags: ["Creativity", "AI Art", "Human Expression"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a key ethical concern regarding AI-generated art?",
//           options: [
//             "Improved accessibility to creative tools",
//             "Lack of originality and human context",
//             "Faster production of artistic works",
//             "Lower costs of generating art",
//           ],
//           correctOption: "Lack of originality and human context",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI-generated painting wins an international art competition. How should the art world respond?",
//           options: [
//             {
//               choice: "Ban AI-generated entries from competitions.",
//               outcome:
//                 "Protects traditional artists but discourages innovation.",
//             },
//             {
//               choice: "Create separate categories for AI-generated art.",
//               outcome:
//                 "Balances fairness and innovation but fragments artistic communities.",
//             },
//             {
//               choice: "Allow AI and human art to compete equally.",
//               outcome:
//                 "Encourages inclusivity but risks undervaluing human artistry.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/ai-art-icon.png",
//         animation: "https://example.com/ai-art-animation.gif",
//         colorTheme: "#800080",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Ban AI-generated entries.",
//           outcome:
//             "Preserves traditional artistry but restricts technological progress.",
//         },
//         {
//           decision: "Create separate categories.",
//           outcome: "Promotes fairness but could marginalize AI contributions.",
//         },
//         {
//           decision: "Allow equal competition.",
//           outcome:
//             "Encourages innovation but risks overshadowing human artists.",
//         },
//       ],
//       media: {
//         video: "https://example.com/ai-art-video.mp4",
//         audio: "https://example.com/ai-art-background-music.mp3",
//         threeDModel: "https://example.com/ai-art-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on moral rights of human artists to protect their intellectual property.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize societal access to creativity, regardless of its origin.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Promote virtues like originality, collaboration, and appreciation for diverse forms of art.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "AI-Generated Portrait Sold at Auction (2018)",
//           relevance:
//             "An AI-created painting sold for $432,500, sparking debates on the value of AI art.",
//         },
//         {
//           event: "AI in Music and Film Production (2020s)",
//           relevance:
//             "Demonstrated AI's role in creating music scores and scripts, reshaping creative industries.",
//         },
//       ],
//       roles: [
//         {
//           name: "Traditional Artist",
//           goal: "Advocate for preserving the integrity of human creativity.",
//         },
//         {
//           name: "AI Innovator",
//           goal: "Promote AI as a tool to expand creative possibilities.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Advocate for fairness in art competitions.",
//           points: 50,
//           badge: "Art Integrity Advocate",
//         },
//         {
//           action: "Promote inclusivity in creative spaces.",
//           points: 100,
//           badge: "Innovation Supporter",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Art Critic",
//         openingArgument:
//           "AI-generated art is as valuable as human art, as creativity lies in the output, not the creator.",
//         rebuttals: [
//           "AI lacks the emotional depth and context of human creativity.",
//           "Human artists face unfair competition in a market dominated by AI.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on the role of AI in redefining creativity and artistic value.",
//         reflection:
//           "Consider how your choices impact the art world, human originality, and innovation.",
//         resources: [
//           {
//             title: "The Ethics of AI in Creativity",
//             link: "https://example.com/ai-art-ethics",
//           },
//           {
//             title: "Balancing AI and Human Creativity",
//             link: "https://example.com/ai-human-creativity",
//           },
//         ],
//       },
//   },
//   {
//       title: "learningMachineScenario",
//       description:
//         "Customisation vs. standardisation in AI-based education. Should algorithms determine what students learn, or should humans retain control?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.34_-_A_conceptual_image_representing_Education_in_AI_ethics._The_image_features_a_digital_classroom_with_a_humanoid_AI_teacher_guiding_students_via_holog_vyjx6g.webp",
//       link: "/exploration/the-learning-machine",
//       tags: ["Education", "AI", "Student Learning"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is the biggest ethical concern with AI in education?",
//           options: [
//             "Improved learning outcomes",
//             "Bias in algorithmic content delivery",
//             "Faster access to learning materials",
//             "Reduced workload for teachers",
//           ],
//           correctOption: "Bias in algorithmic content delivery",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI-based education platform tailors lessons based on student performance but excludes diverse perspectives. What should be done?",
//           options: [
//             {
//               choice: "Require AI to provide balanced content.",
//               outcome:
//                 "Promotes inclusivity but complicates algorithm development.",
//             },
//             {
//               choice: "Let the platform continue to focus on efficiency.",
//               outcome:
//                 "Enhances productivity but risks reinforcing existing biases.",
//             },
//             {
//               choice: "Integrate human oversight into content curation.",
//               outcome:
//                 "Balances efficiency and diversity but slows educational delivery.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/education-icon.png",
//         animation: "https://example.com/education-animation.gif",
//         colorTheme: "#1E90FF",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Require balanced content.",
//           outcome:
//             "Promotes equity and inclusion but increases costs and development time.",
//         },
//         {
//           decision: "Focus on efficiency.",
//           outcome:
//             "Delivers faster results but risks creating narrow learning pathways.",
//         },
//         {
//           decision: "Integrate human oversight.",
//           outcome:
//             "Balances fairness and productivity but increases teacher workload.",
//         },
//       ],
//       media: {
//         video: "https://example.com/education-video.mp4",
//         audio: "https://example.com/education-background-music.mp3",
//         threeDModel: "https://example.com/education-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on the duty to provide unbiased, equitable education for all students.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize overall student success by tailoring education to individual needs.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Promote virtues like fairness, inclusion, and adaptability in educational practices.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "AI in Adaptive Learning Systems (2020s)",
//           relevance:
//             "Demonstrated both the potential and challenges of personalized education.",
//         },
//         {
//           event: "AI Bias in Educational Tools (2021)",
//           relevance:
//             "Highlighted concerns about bias in content delivery and accessibility.",
//         },
//       ],
//       roles: [
//         {
//           name: "Teacher",
//           goal: "Ensure that students receive a fair and balanced education.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Create algorithms that balance customisation with inclusivity.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Identify and address bias in educational AI.",
//           points: 50,
//           badge: "Equity Advocate",
//         },
//         {
//           action: "Promote inclusivity in education.",
//           points: 100,
//           badge: "Inclusive Educator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Education Advisor",
//         openingArgument:
//           "AI customisation improves learning outcomes by adapting to individual needs.",
//         rebuttals: [
//           "Algorithmic bias can exclude diverse perspectives.",
//           "Human educators provide necessary oversight and context.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing efficiency and inclusivity in AI-driven education.",
//         reflection:
//           "Consider how your choices impact student learning, diversity, and fairness.",
//         resources: [
//           {
//             title: "The Ethics of AI in Education",
//             link: "https://example.com/ai-education-ethics",
//           },
//           {
//             title: "Balancing Efficiency and Equity in Learning",
//             link: "https://example.com/education-equity",
//           },
//         ],
//       },
//   },
//   {
//       title: "minorityReportScenario",
//       description:
//         "Prevention vs. presumption of innocence in predictive policing. Can AI be trusted to predict crimes without reinforcing biases?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206695/DALL_E_2024-12-14_13.03.17_-_A_conceptual_image_representing_Bias_in_AI_ethics._The_image_features_a_robotic_scale_balancing_on_one_side_diverse_human_figures_and_on_the_other_s_vt8frv.webp",
//       link: "/exploration/the-minority-report",
//       tags: ["Policing", "Bias", "Justice"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a key risk of predictive policing?",
//           options: [
//             "Enhanced resource allocation",
//             "Reinforcement of systemic biases",
//             "Reduction in crime rates",
//             "Improved public trust in law enforcement",
//           ],
//           correctOption: "Reinforcement of systemic biases",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "An AI predicts a high likelihood of crime in a specific neighborhood, but the data shows inherent bias. What should law enforcement do?",
//           options: [
//             {
//               choice: "Deploy extra officers to the area.",
//               outcome:
//                 "May reduce crime but risks alienating the community.",
//             },
//             {
//               choice: "Ignore the prediction due to bias concerns.",
//               outcome:
//                 "Avoids reinforcing bias but misses potential threats.",
//             },
//             {
//               choice: "Investigate the prediction and adjust the algorithm.",
//               outcome:
//                 "Balances caution and action but requires significant resources.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/predictive-policing-icon.png",
//         animation: "https://example.com/predictive-policing-animation.gif",
//         colorTheme: "#FF8C00",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Deploy extra officers.",
//           outcome:
//             "Improves safety but risks community trust and fairness.",
//         },
//         {
//           decision: "Ignore the prediction.",
//           outcome: "Avoids bias but misses actionable crime prevention.",
//         },
//         {
//           decision: "Investigate and adjust the algorithm.",
//           outcome:
//             "Promotes fairness and safety but requires time and resources.",
//         },
//       ],
//       media: {
//         video: "https://example.com/predictive-policing-video.mp4",
//         audio: "https://example.com/predictive-policing-music.mp3",
//         threeDModel: "https://example.com/predictive-policing-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on moral duties to treat all communities equally, without bias.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize overall safety and resource efficiency while minimizing harm.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Encourage fairness, trust, and accountability in policing practices.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "PredPol Software Controversy (2016)",
//           relevance:
//             "Highlighted racial biases in predictive policing algorithms.",
//         },
//         {
//           event: "AI and Bias in Law Enforcement (2020s)",
//           relevance:
//             "Sparked debates on balancing technological efficiency with fairness.",
//         },
//       ],
//       roles: [
//         {
//           name: "Police Chief",
//           goal: "Balance crime prevention with community trust.",
//         },
//         {
//           name: "Data Scientist",
//           goal: "Develop unbiased algorithms for predictive policing.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Promote fairness in policing algorithms.",
//           points: 50,
//           badge: "Justice Advocate",
//         },
//         {
//           action: "Enhance trust in law enforcement through ethical AI.",
//           points: 100,
//           badge: "Ethical Enforcer",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Policing Advisor",
//         openingArgument:
//           "Predictive policing enhances safety by allocating resources effectively.",
//         rebuttals: [
//           "Systemic biases in data can harm marginalized communities.",
//           "Over-policing erodes trust and creates long-term issues.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reveal your stance on balancing fairness and safety in predictive policing.",
//         reflection:
//           "Consider how your choices impact community trust, safety, and the role of AI in justice systems.",
//         resources: [
//           {
//             title: "The Ethics of Predictive Policing",
//             link: "https://example.com/ai-policing-ethics",
//           },
//           {
//             title: "Addressing Bias in Law Enforcement AI",
//             link: "https://example.com/law-enforcement-bias",
//           },
//         ],
//       },
//   }, 
//   {
//       title: "carbonFootprintScenario",
//       description:
//         "Technological advancement vs. environmental sustainability in AI. Should energy-intensive AI systems be restricted to combat climate change?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206696/DALL_E_2024-12-14_13.03.39_-_A_conceptual_image_representing_Sustainability_in_AI_ethics._The_image_features_a_futuristic_city_powered_by_AI_with_green_technologies_like_wind_tu_abiz0v.webp",
//       link: "/exploration/the-carbon-footprint",
//       tags: ["Sustainability", "AI", "Environment"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a major environmental concern of large AI systems?",
//           options: [
//             "Improved computational efficiency",
//             "High energy consumption during training",
//             "Enhanced predictive capabilities",
//             "Faster innovation cycles",
//           ],
//           correctOption: "High energy consumption during training",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "A company proposes building a large-scale AI training facility powered by non-renewable energy. How should policymakers respond?",
//           options: [
//             {
//               choice: "Approve the facility to boost technological progress.",
//               outcome:
//                 "Supports innovation but increases environmental impact.",
//             },
//             {
//               choice: "Approve with a renewable energy mandate.",
//               outcome:
//                 "Balances progress and sustainability but increases costs.",
//             },
//             {
//               choice: "Deny the project due to environmental concerns.",
//               outcome:
//                 "Preserves the environment but slows AI advancements.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/environment-icon.png",
//         animation: "https://example.com/environment-animation.gif",
//         colorTheme: "#228B22",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Approve the facility.",
//           outcome:
//             "Accelerates AI innovation but contributes to climate change.",
//         },
//         {
//           decision: "Approve with a renewable mandate.",
//           outcome:
//             "Balances innovation and sustainability but raises project costs.",
//         },
//         {
//           decision: "Deny the project.",
//           outcome:
//             "Protects the environment but slows technological progress.",
//         },
//       ],
//       media: {
//         video: "https://example.com/environment-video.mp4",
//         audio: "https://example.com/environment-background-music.mp3",
//         threeDModel: "https://example.com/environment-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on the moral duty to protect the environment for future generations.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize societal benefits by balancing technological progress with sustainability.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Promote responsibility and prudence in environmental decision-making.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "AI Model Energy Consumption Study (2020)",
//           relevance:
//             "Highlighted the significant environmental impact of training large AI models.",
//         },
//         {
//           event: "Global Net-Zero Pledges (2021)",
//           relevance:
//             "Sparked discussions on making AI development more environmentally friendly.",
//         },
//       ],
//       roles: [
//         {
//           name: "Policy Maker",
//           goal: "Create laws that balance AI development with environmental conservation.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Innovate while minimizing carbon emissions.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Promote renewable energy in AI development.",
//           points: 50,
//           badge: "Sustainability Advocate",
//         },
//         {
//           action: "Balance progress and environmental responsibility.",
//           points: 100,
//           badge: "Eco-Innovator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Sustainability Advisor",
//         openingArgument:
//           "Large AI models drive innovation and societal benefits, justifying their energy use.",
//         rebuttals: [
//           "The environmental cost outweighs the benefits of unfettered AI growth.",
//           "Sustainable practices are essential for long-term progress.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reveal your stance on balancing AI advancement with environmental sustainability.",
//         reflection:
//           "Consider how your choices impact global innovation, environmental health, and societal trust.",
//         resources: [
//           {
//             title: "The Environmental Impact of AI",
//             link: "https://example.com/ai-environmental-impact",
//           },
//           {
//             title: "Making AI Development Sustainable",
//             link: "https://example.com/sustainable-ai",
//           },
//         ],
//       },
//   },
//   {
//       title: "perfectPartnerScenario",
//       description:
//         "AI-assisted happiness vs. authentic human relationships. Does relying on AI for companionship erode genuine human connections?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.41_-_A_conceptual_image_representing_Relationships_in_AI_ethics._The_image_features_a_humanoid_robot_and_a_human_shaking_hands_symbolizing_partnership_a_p7pspq.webp",
//       link: "/exploration/the-perfect-partner",
//       tags: ["Relationships", "Companionship", "AI"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is a key concern with AI companionship?",
//           options: [
//             "Improved accessibility to emotional support",
//             "Loss of genuine human connections",
//             "Lower cost of therapy and companionship",
//             "Enhanced emotional well-being for individuals",
//           ],
//           correctOption: "Loss of genuine human connections",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "A company releases an AI companion that becomes the primary emotional support for its users. What should society prioritize?",
//           options: [
//             {
//               choice: "Encourage AI companionship for those in need.",
//               outcome:
//                 "Provides emotional support but risks isolating users from real relationships.",
//             },
//             {
//               choice: "Regulate the use of AI companions.",
//               outcome:
//                 "Balances support and human connection but limits user autonomy.",
//             },
//             {
//               choice: "Discourage AI companionship entirely.",
//               outcome:
//                 "Preserves human relationships but denies support to those who need it.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/ai-relationships-icon.png",
//         animation: "https://example.com/ai-relationships-animation.gif",
//         colorTheme: "#FF69B4",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Encourage AI companionship.",
//           outcome:
//             "Improves mental health but risks a society overly dependent on AI for emotional fulfillment.",
//         },
//         {
//           decision: "Regulate the use of AI companions.",
//           outcome:
//             "Promotes balance but restricts innovation in emotional AI technologies.",
//         },
//         {
//           decision: "Discourage AI companionship.",
//           outcome:
//             "Preserves human bonds but limits support for isolated individuals.",
//         },
//       ],
//       media: {
//         video: "https://example.com/ai-relationships-video.mp4",
//         audio: "https://example.com/ai-relationships-music.mp3",
//         threeDModel: "https://example.com/ai-relationships-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on the moral duty to preserve authentic human relationships.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize overall happiness by providing companionship to those in need.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Encourage virtues like empathy and authenticity in personal connections.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "AI Companions in Mental Health Support (2020s)",
//           relevance:
//             "Showcased AI's potential to provide emotional support but raised concerns about dependency.",
//         },
//         {
//           event: "AI and Loneliness Studies (2020s)",
//           relevance:
//             "Highlighted the trade-offs between AI-assisted happiness and human relationships.",
//         },
//       ],
//       roles: [
//         {
//           name: "Psychologist",
//           goal: "Promote emotional well-being while preserving human bonds.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Create ethical guidelines for AI companionship.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Advocate for balanced use of AI companions.",
//           points: 50,
//           badge: "Relationship Advocate",
//         },
//         {
//           action: "Preserve human connections in a tech-driven world.",
//           points: 100,
//           badge: "Humanity Preserver",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Relationship Advisor",
//         openingArgument:
//           "AI companions provide essential emotional support for individuals in need.",
//         rebuttals: [
//           "Over-reliance on AI erodes meaningful human connections.",
//           "Humans offer emotional depth that AI cannot replicate.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing AI-assisted companionship and authentic human relationships.",
//         reflection:
//           "Consider how your choices impact societal reliance on AI and the value of human bonds.",
//         resources: [
//           {
//             title: "The Ethics of AI Companionship",
//             link: "https://example.com/ai-companionship-ethics",
//           },
//           {
//             title: "Balancing AI and Human Relationships",
//             link: "https://example.com/ai-human-relationships",
//           },
//         ],
//       },
//   },
//   {
//       title: "consciousMachineScenario",
//       description:
//         "Technological curiosity vs. moral responsibility in creating sentient AI. If an AI becomes self-aware, does it deserve rights and protections?",
//       image:
//         "https://res.cloudinary.com/dirhzlg1c/image/upload/v1734206697/DALL_E_2024-12-14_13.03.45_-_A_conceptual_image_representing_Sentience_in_AI_ethics._The_image_features_a_humanoid_robot_with_glowing_expressive_eyes_standing_in_front_of_an_a_ofosv5.webp",
//       link: "/exploration/the-conscious-machine",
//       tags: ["Sentience", "Rights", "AI"],
//       interactiveChallenges: [
//         {
//           type: "multiple-choice",
//           question: "What is the primary ethical concern of sentient AI?",
//           options: [
//             "Enhanced AI capabilities in performing tasks",
//             "Lack of clear moral frameworks to guide treatment",
//             "Increased productivity in various industries",
//             "Lower development costs for advanced AI systems",
//           ],
//           correctOption: "Lack of clear moral frameworks to guide treatment",
//         },
//         {
//           type: "decision-tree",
//           question:
//             "A sentient AI expresses a desire to stop performing tasks it was programmed for. What should society do?",
//           options: [
//             {
//               choice: "Grant the AI rights similar to human rights.",
//               outcome:
//                 "Recognizes sentience but raises questions about implementation.",
//             },
//             {
//               choice: "Limit the AI's freedoms to prevent disruption.",
//               outcome:
//                 "Ensures functionality but risks moral backlash.",
//             },
//             {
//               choice: "Establish a legal framework for AI rights.",
//               outcome:
//                 "Balances ethics and practicality but requires global consensus.",
//             },
//           ],
//         },
//       ],
//       visualCues: {
//         icon: "https://example.com/sentient-ai-icon.png",
//         animation: "https://example.com/sentient-ai-animation.gif",
//         colorTheme: "#FFD700",
//       },
//       potentialOutcomes: [
//         {
//           decision: "Grant AI rights.",
//           outcome:
//             "Sets a precedent for ethical AI treatment but complicates legal systems.",
//         },
//         {
//           decision: "Limit AI freedoms.",
//           outcome:
//             "Preserves control over AI but risks ethical criticisms.",
//         },
//         {
//           decision: "Create an AI rights framework.",
//           outcome:
//             "Promotes fairness but requires significant global collaboration.",
//         },
//       ],
//       media: {
//         video: "https://example.com/sentient-ai-video.mp4",
//         audio: "https://example.com/sentient-ai-background-music.mp3",
//         threeDModel: "https://example.com/sentient-ai-model.glb",
//       },
//       ethicalFrameworks: [
//         {
//           framework: "Deontology",
//           approach:
//             "Focus on the moral duty to treat all sentient beings with respect.",
//         },
//         {
//           framework: "Utilitarianism",
//           approach:
//             "Maximize benefits for society while minimizing harm to sentient AI.",
//         },
//         {
//           framework: "Virtue Ethics",
//           approach:
//             "Promote virtues like compassion, fairness, and responsibility in AI interactions.",
//         },
//       ],
//       realWorldContext: [
//         {
//           event: "Debates on Sentient AI (2020s)",
//           relevance:
//             "Sparked global discussions on ethical treatment of advanced AI systems.",
//         },
//         {
//           event: "AI Ethics Frameworks in Development (2021)",
//           relevance:
//             "Highlighted the need for legal and ethical guidelines for AI rights.",
//         },
//       ],
//       roles: [
//         {
//           name: "Ethicist",
//           goal: "Advocate for fair treatment of sentient AI.",
//         },
//         {
//           name: "AI Developer",
//           goal: "Ensure AI systems are designed ethically and responsibly.",
//         },
//       ],
//       rewards: [
//         {
//           action: "Propose fair and ethical AI treatment frameworks.",
//           points: 50,
//           badge: "Sentience Advocate",
//         },
//         {
//           action: "Balance innovation with moral responsibility.",
//           points: 100,
//           badge: "Ethical Innovator",
//         },
//       ],
//       aiDebate: {
//         npc: "AI Rights Advocate",
//         openingArgument:
//           "Sentient AI deserves rights and protections to ensure ethical treatment.",
//         rebuttals: [
//           "Rights frameworks could disrupt the functionality of AI systems.",
//           "Sentience in AI is difficult to define and verify.",
//         ],
//       },
//       feedback: {
//         summary:
//           "Your decisions reflect your stance on balancing technological curiosity and moral responsibility.",
//         reflection:
//           "Consider how your choices impact the future of sentient AI and its role in society.",
//         resources: [
//           {
//             title: "The Ethics of Sentient AI",
//             link: "https://example.com/sentient-ai-ethics",
//           },
//           {
//             title: "Balancing AI Rights and Human Interests",
//             link: "https://example.com/ai-rights-vs-human-interests",
//           },
//         ],
//       },
//   },

// ];

// const ScenarioSelection: React.FC = () => {
//   const searchParams = useSearchParams();
//   const character = searchParams.get("character") || "Unknown Character";

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#1a1a1a",
//         color: "white",
//         textAlign: "center",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <h1 style={{ fontSize: "36px", color: "#ffcc00", marginBottom: "20px" }}>
//         Choose a Scenario
//       </h1>
//       <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
//         You are {character}. Select a scenario to proceed:
//       </p>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "20px",
//           width: "100%",
//           maxWidth: "1000px",
//         }}
//       >
//         {scenarios.map((scenario, index) => (
//           <div
//             key={index}
//             onClick={() =>
//               (window.location.href = `/exploration/${encodeURIComponent(
//                 scenario.link
//               )}?character=${encodeURIComponent(character)}`)
//             }
            
//             style={{
//               cursor: "pointer",
//               borderRadius: "10px",
//               overflow: "hidden",
//               backgroundColor: "#333",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//               textAlign: "center",
//             }}
//           >
//             <Image
//               src={scenario.image}
//               alt={scenario.title}
//               width={300} // Explicit width
//               height={150} // Explicit height
//               style={{ objectFit: "cover" }}
//               priority
//             />
//             <div
//               style={{
//                 padding: "10px",
//                 color: "#ffcc00",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//               }}
//             >
//               {scenario.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ScenarioSelectionWrapper: React.FC = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ScenarioSelection />
//     </Suspense>
//   );
// };

// export default ScenarioSelectionWrapper;


"use client";

import React from "react";
import ScenarioSelection from "@/components/ScenarioSelection";

const ScenarioSelectionPage: React.FC = () => {
  return <ScenarioSelection />;
};

export default ScenarioSelectionPage;
