import logo from "../assets/img/logo.png";
import React from "react";
import Flashcard from "./Flashcard";
import styled from "styled-components";

import { ReactComponent as Checkmark } from "../assets/img/checkmark.svg";
import { ReactComponent as Close } from "../assets/img/close.svg";
import { ReactComponent as Help } from "../assets/img/help.svg";

export default function Deck({ flashcard }) {
  const [focusCard, setFocusCard] = React.useState();
  const [showAnswerFocusCard, setShowAnswerFocusCard] = React.useState(false);
  const [listAnswerCards, setlistAnswerCards] = React.useState([]);

  const [queueAnswers, setQueueAnswers] = React.useState([]);
  const [hasAnswerAllCards, setHasAnswerAllCards] = React.useState(false);

  const checkMarkSVG = <Checkmark className="acerto" alt="acerto" />;
  const helpSVG = <Help className="help" alt="help" />;
  const closeSVG = <Close className="erro" alt="erro" />;

  function openSelectedCard(i) {
    setFocusCard(i);
    setShowAnswerFocusCard(false);
  }

  function showAnswerCard() {
    setShowAnswerFocusCard(true);
  }

  function getAnswerCard(idx) {
    const hasAnswer = listAnswerCards.find((a) => a.id === idx);
    if (hasAnswer) {
      return { isAnswered: true, typeOfAnswer: hasAnswer.answer };
    } else {
      return { isAnswered: false, typeOfAnswer: "" };
    }
  }

  function answerCard(ans) {
    if (focusCard === undefined) return;

    const newList = [...listAnswerCards, { id: focusCard, answer: ans }];
    setlistAnswerCards(newList);
    setFocusCard();

    const lengthLista = listAnswerCards.length + 1;
    if (lengthLista === flashcard.length) AnsweredAllCards(newList);
  }

  function AnsweredAllCards(list) {
    const ordenedList = list.sort((a, b) => a.id > b.id);
    const layoutQueue = ordenedList.map((ans) => {
      return (
        <div key={ans.id} class="icone">
          {ans.answer === "acerto"
            ? checkMarkSVG
            : ans.answer === "erro"
            ? closeSVG
            : helpSVG}
        </div>
      );
    });

    setHasAnswerAllCards(true);
    setQueueAnswers(layoutQueue);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Main>
        {flashcard.map((f, idx) => {
          return (
            <Flashcard
              key={idx}
              id={idx}
              content={f}
              isFocusCard={focusCard === idx ? true : false}
              showAnswerFocusCard={showAnswerFocusCard}
              showAnswerCard={showAnswerCard}
              openSelectedCard={openSelectedCard}
              answer={getAnswerCard(idx)}
              answerCard={answerCard}
            />
          );
        })}
      </Main>
      <Footer>
        <p data-identifier="flashcard-counter">
          {listAnswerCards.length}/{flashcard.length} CONCLUÍDOS
        </p>
        <Queue>{hasAnswerAllCards === true ? queueAnswers : ""}</Queue>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 36px;
  color: white;
  font-family: "Righteous";
  z-index: 1;
  background-color: var(--cor-fundo);

  img {
    width: 52px;
    height: 60px;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  min-height: 70px;
  padding: 14px 10px;
  font-size: 18px;
  color: black;
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Queue = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

  svg {
    &.acerto {
      fill: var(--cor-zap);
    }
    &.help {
      fill: var(--cor-quase-nao-lembrei);
    }
    &.erro {
      fill: var(--cor-nao-lembrei);
    }
  }
`;
