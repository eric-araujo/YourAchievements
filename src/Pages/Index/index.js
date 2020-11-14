import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { LogIn } from 'react-feather';

import ImagemSlogan from '../../Assets/img/ImagemSlogan.svg';

import './styles.css';

function Index() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <img id="slogan" src={ImagemSlogan} alt="Imagem Slogan"></img>
          <section className="sectionSlogan">
            <h2 className="subTitle">
              Conheça o <b className="yachi">Yachi!</b>
            </h2>
            <p className="textSlogan">
              <b className="yachi">Yachi!</b> é um aplicativo para controle de
              suas finanças, ele faz isso com o intuito de lhe ajudar a alcançar
              seus objetivos.
            </p>
          </section>
          <Link to="/" className="btn btn-sign-in">
            <span><LogIn /></span> <b>Acessar</b>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Index;
