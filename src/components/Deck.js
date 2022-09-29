import logo from "../assets/img/logo.png"
import React from "react";
import Flashcard from "./Flashcard";
import styled from "styled-components";
import Action from "./Action";



const flashcards = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
    {pergunta: "O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
    {pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula"},
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões"},
];


export default function Deck(){

    const [focusCard, setFocusCard] = React.useState();
    const [showAnswerFocusCard, setShowAnswerFocusCard] = React.useState(false);
    const [listAnswerCards, setlistAnswerCards] = React.useState([]);

    function openSelectedCard(i) {
        setFocusCard(i)
        setShowAnswerFocusCard(false);
    }

    function showAnswerCard() {
        setShowAnswerFocusCard(true)
    }
    
    function getAnswerCard(idx) {
        const hasAnswer = listAnswerCards.find((a) => a.id === idx);
        if(hasAnswer) {
            return {isAnswered: true, typeOfAnswer: hasAnswer.answer}
        } else {
            return {isAnswered: false, typeOfAnswer: ""}
        }
    }

    function answerCard(ans) {
        if(focusCard === undefined) return;
        setlistAnswerCards([...listAnswerCards, {id: focusCard, answer: ans}])
        setFocusCard();
        console.log(listAnswerCards);
    }


    return (
        <Container>
            <Header>
                <img src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
            </Header>
            <Main>

                {flashcards.map((f, idx) => {
                    return <Flashcard 
                                id={idx}
                                content={f} 
                                isFocusCard={focusCard === idx ? true : false}
                                showAnswerFocusCard={showAnswerFocusCard}
                                showAnswerCard={showAnswerCard}
                                openSelectedCard={openSelectedCard}
                                key={idx}
                                answer={getAnswerCard(idx)}
                                />
                })}

            </Main>
            <Footer>
                <Action answerCard={answerCard}/>
                <p>{listAnswerCards.length}/{flashcards.length} CONCLUÍDOS</p>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

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
`

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
`

