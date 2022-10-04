import styled from "styled-components";
import { Checkmark, Help, Close, PlayOutline } from "../assets";

import Answer from "./Answer";
import Question from "./Question";

export default function Flashcard({ id, content, isFocusCard, showAnswerFocusCard, showAnswerCard, openSelectedCard, answer, answerCard }) {
  return (
    <>
      {isFocusCard === true && (
        <Content data-identifier="flashcard" className="aberto">
          {showAnswerFocusCard === true ? (
            <Answer answerCard={answerCard} answer={content.resposta} />
          ) : (
            <Question question={content.pergunta} showAnswerCard={showAnswerCard} />
          )}
        </Content>
      )}

      {answer.isAnswered === true && (
        <Content data-identifier="flashcard" className={answer.typeOfAnswer}>
          <span data-identifier="flashcard-index-item">Pergunta {id + 1}</span>
          <div className="icone">
            {answer.typeOfAnswer === "acerto" ? (
              <Checkmark data-identifier="flashcard-status" className="acerto" alt="acerto" />
            ) : answer.typeOfAnswer === "erro" ? (
              <Close data-identifier="flashcard-status" className="erro" alt="erro" />
            ) : (
              <Help data-identifier="flashcard-status" className="help" alt="help" />
            )}
          </div>
        </Content>
      )}

      {!isFocusCard === true && !answer.isAnswered === true && (
        <Content data-identifier="flashcard">
          <span data-identifier="flashcard-index-item">Pergunta {id + 1}</span>
          <PlayOutline
            onClick={() => {
              openSelectedCard(id);
            }}
            data-identifier="flashcard-show-btn"
            className="icone"
          />
        </Content>
      )}
    </>
  );
}

const Content = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: "Recursive", cursive;

  &.aberto {
    min-height: 130px;
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px;

    &.resposta div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    img {
      cursor: pointer;
    }
  }

  &.acerto {
    color: var(--cor-zap);
    fill: var(--cor-zap);
    text-decoration: line-through;
  }

  &.help {
    color: var(--cor-quase-nao-lembrei);
    fill: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
  }

  &.erro {
    color: var(--cor-nao-lembrei);
    fill: var(--cor-nao-lembrei);
    text-decoration: line-through;
  }
`;
