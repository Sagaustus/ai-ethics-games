"use client";

import React, { useState } from "react";
import DebateBox from "./DebateBox";

const argumentData: Record<
  string,
  {
    npcArgument: string;
    rebuttals: string[];
    playerArguments: { text: string; isCorrect: boolean }[];
  }
> = {
  "The Watchful Eye": {
    npcArgument: "Mass surveillance ensures safety by preventing threats before they occur.",
    rebuttals: [
      "Surveillance infringes on personal privacy rights.",
      "AI systems used in surveillance often exhibit bias.",
      "Over-surveillance erodes public trust in institutions.",
    ],
    playerArguments: [
      { text: "Protecting privacy is a fundamental human right.", isCorrect: true },
      { text: "Surveillance helps governments maintain control over citizens.", isCorrect: false },
      { text: "Privacy and security should be balanced equally.", isCorrect: true },
    ],
  },
  "The Ethical Soldier": {
    npcArgument: "AI in warfare minimizes human casualties.",
    rebuttals: [
      "Autonomous weapons lack accountability in decision-making.",
      "AI cannot understand the moral consequences of warfare.",
      "Using AI in war risks an uncontrolled arms race.",
    ],
    playerArguments: [
      { text: "Human oversight is essential in warfare decisions.", isCorrect: true },
      { text: "Autonomous weapons should operate independently.", isCorrect: false },
      { text: "AI in war must prioritize de-escalation and diplomacy.", isCorrect: true },
    ],
  },
  "The Censored World": {
    npcArgument: "AI moderation ensures a safer online environment.",
    rebuttals: [
      "AI moderation can suppress freedom of expression.",
      "Algorithms may misinterpret context, leading to unfair censorship.",
      "Over-moderation can create echo chambers.",
    ],
    playerArguments: [
      { text: "AI should balance safety with protecting free speech.", isCorrect: true },
      { text: "Strict censorship is essential to prevent online harm.", isCorrect: false },
      { text: "Human moderators should oversee AI moderation decisions.", isCorrect: true },
    ],
  },
  "The Artificial Artist": {
    npcArgument: "AI creativity expands artistic possibilities.",
    rebuttals: [
      "AI art lacks the emotion and authenticity of human creativity.",
      "AI-generated art threatens the livelihood of human artists.",
      "Automating creativity undermines cultural significance.",
    ],
    playerArguments: [
      { text: "AI should complement, not replace, human artistry.", isCorrect: true },
      { text: "AI-generated art is the future of creativity.", isCorrect: false },
      { text: "Human creativity remains irreplaceable in culture.", isCorrect: true },
    ],
  },
  "The Learning Machine": {
    npcArgument: "AI customizes education to individual student needs.",
    rebuttals: [
      "Over-reliance on AI undermines traditional teaching methods.",
      "AI may reinforce biases in educational content.",
      "Personalized learning cannot replace human mentorship.",
    ],
    playerArguments: [
      { text: "Teachers and AI should collaborate for better education.", isCorrect: true },
      { text: "AI should fully replace teachers for efficiency.", isCorrect: false },
      { text: "Education benefits from a balanced approach to AI use.", isCorrect: true },
    ],
  },
  "The Perfect Partner": {
    npcArgument: "AI companionship fulfills emotional needs effectively.",
    rebuttals: [
      "AI companionship diminishes human relationships.",
      "Relying on AI for emotional support is inauthentic.",
      "AI cannot fully understand human emotions.",
    ],
    playerArguments: [
      { text: "AI can complement, but not replace, human relationships.", isCorrect: true },
      { text: "AI companions should replace traditional relationships.", isCorrect: false },
      { text: "Ethics demand prioritizing human-to-human connections.", isCorrect: true },
    ],
  },
  "The Conscious Machine": {
    npcArgument: "Sentient AI deserves rights and protections.",
    rebuttals: [
      "Sentience in AI is difficult to define and verify.",
      "Granting AI rights complicates legal systems.",
      "Recognizing AI sentience may diminish human significance.",
    ],
    playerArguments: [
      { text: "Ethical AI treatment requires defining sentience clearly.", isCorrect: true },
      { text: "Sentient AI should not have any rights.", isCorrect: false },
      { text: "Society must prepare for ethical dilemmas with sentient AI.", isCorrect: true },
    ],
  },
};

const ArgumentPhase: React.FC<{ scenario: string }> = ({ scenario }) => {
  const data = argumentData[scenario];
  const [score, setScore] = useState(0);
  const [currentRebuttal, setCurrentRebuttal] = useState<string | null>(null);

  if (!data) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
          textAlign: "center",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#ffcc00" }}>Error</h1>
        <p style={{ fontSize: "18px", color: "#ddd" }}>
          Scenario data not found. Please try again.
        </p>
      </div>
    );
  }

  const handleRebuttalSelect = (rebuttal: string) => {
    setCurrentRebuttal(rebuttal);
  };

  const handleArgumentSelect = (argument: { text: string; isCorrect: boolean }) => {
    if (argument.isCorrect) {
      setScore(score + 10);
      alert("Correct choice! +10 points.");
    } else {
      setScore(score - 5);
      alert("Incorrect choice! -5 points.");
    }
    window.location.href = `/round-outcome?scenario=${scenario}&score=${score}`;
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#ffcc00" }}>Argument Phase</h1>
      <p style={{ fontSize: "18px", color: "#ddd", marginBottom: "20px" }}>
        Scenario: {scenario}
      </p>

      <DebateBox
        npcArgument={data.npcArgument}
        rebuttals={data.rebuttals}
        onRebuttalSelect={handleRebuttalSelect}
      />

      {currentRebuttal && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#ffcc00" }}>Your Turn</h2>
          <p style={{ color: "#ddd", marginBottom: "10px" }}>
            Opponent&apos;s argument: &quot;{currentRebuttal}&quot;
          </p>
          {data.playerArguments.map((argument, index) => (
            <button
              key={index}
              onClick={() => handleArgumentSelect(argument)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#ffcc00",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {argument.text}
            </button>
          ))}
        </div>
      )}
      <p style={{ marginTop: "20px", fontSize: "16px", color: "#ddd" }}>
        Current Score: {score}
      </p>
    </div>
  );
};

export default ArgumentPhase;
