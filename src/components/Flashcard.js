import playOutline from "../assets/img/play-outline-icon.svg"
import setinha from "../assets/img/setinha.png"



export default function Flashcard({id, content, isFocusCard, showAnswerFocusCard, showAnswerCard, openSelectedCard, answer}) {
    function renderFlashcard() {
        console.log(answer)

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
                    <img className="icone" src={playOutline} alt="play"></img>
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