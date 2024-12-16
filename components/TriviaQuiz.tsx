import React from "react";

interface TriviaQuizProps {
  question: string;
  options: string[];
  correctOption: string;
  onAnswer: (isCorrect: boolean) => void;
}

const TriviaQuiz: React.FC<TriviaQuizProps> = ({
  question,
  options,
  correctOption,
  onAnswer,
}) => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#ffcc00", fontSize: "20px" }}>{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option === correctOption)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#ffcc00",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TriviaQuiz;
