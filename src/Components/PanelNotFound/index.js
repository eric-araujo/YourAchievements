import NotFound from "../../Assets/img/NotFound.svg";

import "./styles.css";

const PanelNotFound = () => {
    return (
        <div className="objectivesNotFound">
            <section className="notfound">
                <img src={NotFound} alt="Nenhum resultado encontrado"/>
                <h2>Seus Objetivos!</h2>
                <p>
                    <b>Oiiii Eric,</b> aqui é onde você irá colocar os seus objetivos, 
                    e eu vou ajudar você a tentar alcançar eles. 
                    Entãoooo... Vamos começar, clique no botão <b>“Adicionar Objetivo”</b>.
                </p>
            </section>
        </div>
    );
}

export default PanelNotFound;