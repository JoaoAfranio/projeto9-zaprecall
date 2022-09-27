import logo from "../assets/img/logo.png"
import playOutline from "../assets/img/play-outline-icon.svg"
import setinha from "../assets/img/setinha.png"
import React from "react";

const flashcards = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
    {pergunta: "O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
    {pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula"},
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões"},
];


export default function Deck(){

    const [openFlashCard, setOpenFlashCard] = React.useState([false,false,false,false])
    const [openAnswerCard, setOpenAnswerCard] = React.useState([false,false,false,false])

    function openSelectedCard(i) {

        const newArrayOpenCards = openFlashCard
        newArrayOpenCards[i] = true;

        setOpenFlashCard([...newArrayOpenCards])
    }
    
    function showAnswer(i) {
        console.log("chegou aq")
        const newArrayAnswerCards = openAnswerCard
        newArrayAnswerCards[i] = true;

        setOpenAnswerCard([...newArrayAnswerCards])
    }

    return (
        <div class="deck">
            <div class="header">
                <img src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            <div class="main">

                {flashcards.map((f, idx) => {
                    if(openFlashCard[idx] === true) {
                        return (
                            <div key={idx} class="flashcard aberto"> 
                                    {openAnswerCard[idx] === true ? f.resposta : f.pergunta}
                                    <div>
                                        <img src={setinha} alt="play" onClick={() => {showAnswer(idx)}}></img>
                                    </div>
                            </div>
                        )
                    } else {
                        return (
                            <div onClick={() => {openSelectedCard(idx)}} key={idx} class="flashcard"> 
                                {openFlashCard[idx] === true ? f.pergunta : `Pergunta ${idx + 1}` }
                                <img class="icone" src={playOutline} alt="play"></img>
                            </div>
                        )
                    }

                })}

            </div>
            <div class="footer">
                <div class="action">
                    <span class="button error">Não lembrei</span>
                    <span class="button almost">Quase não lembrei</span>
                    <span class="button zap">Zap!</span>
                </div>
            </div>
        </div>
    );
}