import './styles.css';

import { LogOut } from "react-feather";

const HeaderPanel = () => {
  return (
    <header id='headerPanel'>
      <div className="divLogo">
        <h1 id='logoPanel'>Yachi!</h1>
      </div>
      <div className="welcome">
        <p className="textWelcome">
          <span className="yachi">Bem vindo</span>, Eric!
        </p>
        <button className="btn exit">
          <span className="logout"><LogOut /></span>Sair
        </button>
      </div>
    </header>
  );
}

export default HeaderPanel;