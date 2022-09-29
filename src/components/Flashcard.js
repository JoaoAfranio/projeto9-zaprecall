import styled from "styled-components";

import setinha from "../assets/img/setinha.png";

import Action from "./Action";

import { ReactComponent as PlayOutline } from "../assets/img/play-outline-icon.svg";
import { ReactComponent as Checkmark } from "../assets/img/checkmark.svg";
import { ReactComponent as Close } from "../assets/img/close.svg";
import { ReactComponent as Help } from "../assets/img/help.svg";

export default function Flashcard({
  id,
  content,
  isFocusCard,
  showAnswerFocusCard,
  showAnswerCard,
  openSelectedCard,
  answer,
  answerCard,
}) {
  const layoutResposta = [content.resposta, <Action answerCard={answerCard} />];
  const layoutPergunta = [
    content.pergunta,
    <div>
      {" "}
      <img
        src={setinha}
        alt="play"
        onClick={() => {
          showAnswerCard();
        }}
      ></img>
    </div>,
  ];

  const checkMarkSVG = <Checkmark className="acerto" alt="acerto" />;
  const helpSVG = <Help className="help" alt="help" />;
  const closeSVG = <Close className="erro" alt="erro" />;

  function renderFlashcard() {
    if (isFocusCard === true) {
      return (
        <Content className="aberto">
          {showAnswerFocusCard === true ? layoutResposta : layoutPergunta}
        </Content>
      );
    } else if (answer.isAnswered === true) {
      return (
        <Content className={answer.typeOfAnswer}>
          Pergunta {id + 1}
          <div class="icone">
            {answer.typeOfAnswer === "acerto"
              ? checkMarkSVG
              : answer.typeOfAnswer === "erro"
              ? closeSVG
              : helpSVG}
          </div>
        </Content>
      );
    } else {
      return (
        <Content
          onClick={() => {
            openSelectedCard(id);
          }}
        >
          Pergunta {id + 1}
          <PlayOutline className="icone" />
        </Content>
      );
    }
  }

  return renderFlashcard();
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
