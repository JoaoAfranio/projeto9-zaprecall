import logo from "../assets/img/logo.png"
import playOutline from "../assets/img/play-outline-icon.svg"

const flashcards = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
    {pergunta: "O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
    {pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula"},
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões"},
];

export default function Deck(){
    return (
        <div class="deck">
            <div class="header">
                <img src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            <div class="main">

                {flashcards.map((f, idx) => {
                    return <div key={idx} class="flashcard"> Pergunta {idx + 1} <img class="icone" src={playOutline} alt="play"></img></div>
                })}

                {/* <div class="flashcard acerto">O que é JSX?</div>
                <div class="flashcard erro">O que é JSX? </div>
                <div class="flashcard help"> O que é JSX?</div>
                <div class="flashcard aberto">O que é JSX? </div> */}
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