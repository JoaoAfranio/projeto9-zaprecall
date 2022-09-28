import styled from "styled-components"

import playOutline from "../assets/img/play-outline-icon.svg"
import setinha from "../assets/img/setinha.png"

import checkmark from "../assets/img/checkmark.svg"
import close from "../assets/img/close.svg"
import help from "../assets/img/help.svg"



export default function Flashcard({id, content, isFocusCard, showAnswerFocusCard, showAnswerCard, openSelectedCard, answer}) {
    function renderFlashcard() {
        if(isFocusCard === true){
            return (
                <Content className="aberto"> 
                        {showAnswerFocusCard === true ? content.resposta : content.pergunta}
                        <div>
                            <img src={setinha} alt="play" onClick={() => {showAnswerCard()}}></img>
                        </div>
                </Content>
            )
        } else if(answer.isAnswered === true) {
            


            return (
                <Content className={answer.typeOfAnswer}> 
                    Pergunta {id + 1}
                    <div class="icone">
                        <img className={answer.typeOfAnswer} src={
                            answer.typeOfAnswer === "acerto" ? checkmark : answer.typeOfAnswer === "erro" ? close : help} 
                        alt={answer.typeOfAnswer}></img>
                    </div>

                </Content>
            )
        } 
        else {
            return (
                <Content onClick={() => {openSelectedCard(id)}}> 
                    Pergunta {id + 1}
                    <img className="icone" src={playOutline} alt="play"></img>
                </Content>
            )
        }
    }

    return (
        renderFlashcard()
    )
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
    font-family: 'Recursive', cursive;

    &.aberto {
        min-height: 130px;
        display: flex;
        flex-direction: column;
        background-color: var(--cor-fundo-card);
        cursor: default;
        padding: 20px 10px;

        &.resposta div{
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
        text-decoration: line-through;
    }

    &.help {
        color: var(--cor-quase-nao-lembrei);
        text-decoration: line-through;
    }

    &.erro {
        color: var(--cor-nao-lembrei);
        text-decoration: line-through;  
    }
`;