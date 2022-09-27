import logo from "../assets/img/logo.png"

export default function App(){
    return (
        <div class="home">
            <div class="deck">
                <div class="header">
                    <img src={logo} alt="logo"/>
                    Zaprecall
                </div>
                <div class="main">
                    <div class="flashcard"> </div>
                    <div class="flashcard"> </div>
                    <div class="flashcard"> </div>
                    <div class="flashcard"> </div>
                </div>
                <div class="footer">
                    <div class="action">
                        <span class="button error">dsads</span>
                        <span class="button almost">dsads</span>
                        <span class="button zap">dsads</span>
                    </div>
                </div>
            </div>


        </div>
    );
}