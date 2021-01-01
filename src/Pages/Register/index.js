import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

import "./styles.css";

function Register() {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="columnRegister">
                    <section className="sectionSlogan">
                        <h2 className="subTitle">
                            <b className="yachi">Hey!</b> Quase Esqueci...
                        </h2>
                        <p className="textSlogan">
                            Para eu ajudar você a alcançar seus objetivos,
                            preciso que você tenha um cadastro.
                            Se cadastra, é rapidinho :)
                        </p>
                    </section>
                    <form className="form" action="/login">
                        <input className="input" type="text" placeholder="Nome" />
                        <input className="input" type="email" placeholder="E-mail" />
                        <input className="input" type="password" placeholder="Senha" />
                        <input className="input" type="password" placeholder="Confirmar Senha" />
                        <Link to="/" className="link">
                            Já tem cadastro?
                        </Link>
                        <button className="btn btn-register" type="submit">Cadastrar</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Register;