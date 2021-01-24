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
                                <input type="checkbox" name="notDone" id="notDone"/>
                                <label for="notDone">Objetivos não concluídos</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="completed" id="completed"/>
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
                        <div className="page first activePaginete">
                            <a href="#1">1</a>
                        </div>
                        <div className="page">
                            <a href="#2">2</a>
                        </div>
                        <div className="page">
                            <a href="#3">3</a>
                        </div>
                        <div className="page">
                            <a href="#4">4</a>
                        </div>
                        <div className="page activePaginete">
                            <a href="#5">5</a>
                        </div>
                        <div className="page">
                            <a href="#6">6</a>
                        </div>
                        <div className="page">
                            <a href="#7">7</a>
                        </div>
                        <div className="page">
                            <a href="#8">8</a>
                        </div>
                        <div className="page">
                            <a href="#9">9</a>
                        </div>
                        <div className="page activePaginete">
                            <a href="#10">10</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Panel;