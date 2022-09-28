import logo from "../assets/img/logo.png"
import React from "react";
import Flashcard from "./Flashcard";


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
        setlistAnswerCards([...listAnswerCards, {id: focusCard, answer: ans}])
        setFocusCard();
    }


    return (
        <div className="deck">
            <div className="header">
                <img src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            <div className="main">

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

            </div>
            <div className="footer">
                <div className="action">
                    <span onClick={() => {answerCard("erro")}} className="button error">Não lembrei</span>
                    <span onClick={() => {answerCard("help")}} className="button almost">Quase não lembrei</span>
                    <span onClick={() => {answerCard("acerto")}} className="button zap">Zap!</span>
                </div>
            </div>
        </div>
    );
}