import Deck from "./Deck";
import styled from "styled-components";
import Login from "./Login";

import React from "react";

export default function Home() {
  const [navigation, setNavigation] = React.useState("Login");
  const [selectedDeck, setSelectedDeck] = React.useState();
  const flashcards = [
    [
      {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
      },
      {
        pergunta: "O React é __ ",
        resposta: "Uma biblioteca JavaScript para construção de interfaces",
      },
      {
        pergunta: "Componentes devem iniciar com __",
        resposta: "Letra maiúscula",
      },
      { pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões" },
    ],
    [
      {
        pergunta: "When do you have to travel?",
        resposta: "Quando você tem que viajar?",
      },
      {
        pergunta: "What did you eat?",
        resposta: "Oque você comeu?",
      },
      {
        pergunta: "Where do you work?",
        resposta: "Onde você trabalha?",
      },
      {
        pergunta: "How do you go to work?",
        resposta: "Como você vai ao trabalho?",
      },
      {
        pergunta: "How often do you exercise?",
        resposta: "Com que frequência você se exercita?",
      },
    ],
    [
      {
        pergunta: "Bienvenue!",
        resposta: "Bem-vindo!",
      },
      {
        pergunta: "Je m'appelle...",
        resposta: "Meu nome é...",
      },
      {
        pergunta: "Enchanté",
        resposta: "Prazer em conhecê-lo.",
      },
      { pergunta: "Ça va?", resposta: "Como você está?" },
      { pergunta: "Le poisson", resposta: "Peixe" },
      { pergunta: "Le pain", resposta: "Pão" },
    ],
  ];

  return (
    <Container>
      {navigation === "Login" ? (
        <Login
          setSelectedDeck={setSelectedDeck}
          setNavigation={setNavigation}
        />
      ) : (
        <Deck flashcard={flashcards[selectedDeck]} />
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
