import playOutline from "../assets/img/play-outline-icon.svg"
import setinha from "../assets/img/setinha.png"

import checkmark from "../assets/img/checkmark.svg"
import close from "../assets/img/close.svg"
import help from "../assets/img/help.svg"



export default function Flashcard({id, content, isFocusCard, showAnswerFocusCard, showAnswerCard, openSelectedCard, answer}) {
    function renderFlashcard() {
        if(isFocusCard === true){
            return (
                <div className="flashcard aberto"> 
                        {showAnswerFocusCard === true ? content.resposta : content.pergunta}
                        <div>
                            <img src={setinha} alt="play" onClick={() => {showAnswerCard()}}></img>
                        </div>
                </div>
            )
        } else if(answer.isAnswered === true) {
            


            return (
                <div className={"flashcard " + answer.typeOfAnswer}> 
                    Pergunta {id + 1}
                    <div class="icone">
                        <img className={answer.typeOfAnswer}src={
                            answer.typeOfAnswer === "acerto" ? checkmark : answer.typeOfAnswer === "erro" ? close : help} 
                        alt="play"></img>
                    </div>

                </div>
            )
        } 
        else {
            return (
                <div onClick={() => {openSelectedCard(id)}} className="flashcard"> 
                    Pergunta {id + 1}
                    <img className="icone" src={playOutline} alt="play"></img>
                </div>
            )
        }
    }

    return (
        renderFlashcard()
    )
}