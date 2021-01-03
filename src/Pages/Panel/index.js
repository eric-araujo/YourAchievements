import HeaderPanel from "../../Components/HeaderPanel";
import { Link } from "react-router-dom";
import { Search, Plus } from 'react-feather';

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
                </div>
            </main>
        </div>
    );
}

export default Panel;