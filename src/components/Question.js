import React from "react";
import setinha from "../assets/img/setinha.png";

export default function Question({ question, showAnswerCard }) {
  return (
    <>
      <span data-identifier="flashcard-question">{question}</span>
      <div>
        <img data-identifier="flashcard-turn-btn" src={setinha} alt="play" onClick={() => showAnswerCard()}></img>
      </div>
    </>
  );
}
