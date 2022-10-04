import React from "react";
import Action from "./Action";

export default function Answer({ answer, answerCard }) {
  return (
    <>
      <span data-identifier="flashcard-answer">{answer}</span>
      <Action answerCard={answerCard} />
    </>
  );
}
