import playOutline from "../assets/img/play-outline-icon.svg"
import setinha from "../assets/img/setinha.png"



export default function Flashcard({id, content, isFocusCard, showAnswerFocusCard, showAnswerCard, openSelectedCard}) {
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
        } else {
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