import HeaderPanel from "../../Components/HeaderPanel";
import { Link } from "react-router-dom";
import { Search, Plus } from "react-feather";

import NotFound from "../../Assets/img/NotFound.svg";

import "./styles.css";

function Panel() {
    return (
        <div>
            <HeaderPanel />
            <main className="container">
                <div className="columnPanel">
                    <div className="divGray">
                        <input type="text" className="search" placeholder="Pesquisar"/>
                        <button type="button" className="iconSearch"><span><Search /></span></button>
                    </div>
                    <div className="divGray">
                        <button className="addObjective"><span><Plus /></span>Adicionar Objetivo</button>
                    </div>
                    <div className="objectives">
                        <section className="notfound">
                            <img src={NotFound} alt="Nenhum resultado encontrado"/>
                            <h2>Seus Objetivos!</h2>
                            <p>
                                <b>Oiiii Eric,</b> aqui é onde você irá colocar os seus objetivos, 
                                e eu vou ajudar você a tentar alcançar eles. 
                                Entãoooo... Vamos começar, clique no botão “Adicionar Objetivo”.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Panel;