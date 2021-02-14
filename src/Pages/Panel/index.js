import HeaderPanel from "../../Components/HeaderPanel";
import PanelNotFound from "../../Components/PanelNotFound";
import { Link } from "react-router-dom";
import { Search, Plus, XCircle } from "react-feather";

import "./styles.css";

function Panel() {
    return (
        <div>
            <HeaderPanel />
            <main className="container">
                <div className="columnPanel">
                    <div className="divGray divSearch">
                        <input type="text" className="search" placeholder="Pesquisar"/>
                        <button type="button" className="iconSearch">
                            <span>
                                <Search />
                            </span>
                        </button>
                    </div>
                    <div className="divGray divAddObjective">
                        <button className="addObjective"><span><Plus /></span>Adicionar Objetivo</button>
                    </div>
                    
                       {/* <PanelNotFound /> */}
                    <div className="objectives">
                        <div className="menuHeader">
                            <div className="checkbox">
                                <input type="radio" name="notDone" id="notDone"/>
                                <label for="notDone">Objetivos não concluídos</label>
                            </div>
                            <div className="checkbox">
                                <input type="radio" name="completed" id="completed"/>
                                <label for="completed">Objetivos concluídos</label>
                            </div>
                        </div>
                        <div className="gridObjectives">
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                            <div className="objective">
                                <div className="headerObjective">
                                        <h4>Perder 15kg</h4>
                                        <button type="button" className="iconDelete">
                                            <span>
                                                <XCircle />
                                            </span>
                                        </button>
                                </div>
                                    
                                <p>
                                    Item a ser concluído: <b className="yachi">Perder 10kg</b>
                                </p>
                                <div className="barProgress">
                                    <div className="progress">
                                        <b>50%</b>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="pagination">
                        <a  href="#1" className="page first activePage">1</a>
                        <a  href="#2" className="page">2</a>
                        <a  href="#3" className="page">3</a>
                        <a  href="#4" className="page">4</a>
                        <a  href="#5" className="page">5</a>
                        <a  href="#6" className="page">6</a>
                        <a  href="#7" className="page">7</a>
                        <a  href="#8" className="page">8</a>
                        <a  href="#9" className="page">9</a>
                        <a  href="#10" className="page last">10</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Panel;