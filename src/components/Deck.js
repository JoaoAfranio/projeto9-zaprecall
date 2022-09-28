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

    function openSelectedCard(i) {
        setFocusCard(i)
        setShowAnswerFocusCard(false);
    }

    function showAnswerCard() {
        setShowAnswerFocusCard(true)
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
                                />
                    // if(focusCard === idx) {
                    //     return (
                    //         <div key={idx} className="flashcard aberto"> 
                    //                 {showAnswerFocusCard === true ? f.resposta : f.pergunta}
                    //                 <div>
                    //                     <img src={setinha} alt="play" onClick={() => {setShowAnswerFocusCard(true)}}></img>
                    //                 </div>
                    //         </div>
                    //     )
                    // } else {
                    //     return (
                    //         <div onClick={() => {openSelectedCard(idx)}} key={idx} className="flashcard"> 
                    //             Pergunta {idx + 1}
                    //             <img className="icone" src={playOutline} alt="play"></img>
                    //         </div>
                    //     )
                    // }

                })}

            </div>
            <div className="footer">
                <div className="action">
                    <span className="button error">Não lembrei</span>
                    <span className="button almost">Quase não lembrei</span>
                    <span className="button zap">Zap!</span>
                </div>
            </div>
        </div>
    );
}