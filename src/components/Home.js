import Deck from "./Deck";
import styled from "styled-components";
import Login from "./Login";
import { decks } from "./decks";

import React from "react";

export default function Home() {
  const [navigation, setNavigation] = React.useState("Login");
  const [selectedDeck, setSelectedDeck] = React.useState();
  const [selectedGoal, setSelectedGoal] = React.useState();

  return (
    <Container>
      {navigation === "Login" ? (
        <Login setSelectedGoal={setSelectedGoal} setSelectedDeck={setSelectedDeck} setNavigation={setNavigation} />
      ) : (
        <Deck selectedGoal={selectedGoal} flashcard={decks[selectedDeck].flashcards} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
  }

  button {
    width: 246px;
    height: 54px;
    padding: 16px 22px;
    border-radius: 5px;
    color: #d70900;
    border: 1px;
    font-size: 18px;
    cursor: pointer;
  }

  button:hover {
    background-color: #cea2a0;
  }
`;
