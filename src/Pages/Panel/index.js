import HeaderPanel from "../../Components/HeaderPanel";
import { Link } from "react-router-dom";
import { Search } from 'react-feather';

import "./styles.css";

function Panel() {
    return (
        <div>
            <HeaderPanel />
            <main className="container">
                <div className="columnPanel">
                    <div className="divSearch">
                        <input type="text" className="search" placeholder="Pesquisar"/>
                        <button type="button" className="iconSearch"><span><Search /></span></button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Panel;