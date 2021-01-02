import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

import SignIn from "../../Assets/img/SignIn.svg";

import "./styles.css";

function Register() {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="columnLogin">
                    <article className="sectionSlogan">
                        <p className="textSloganLogin letsGo">
                            <b className="yachi">Opa! Vamos começar!</b> acesse ou crie sua conta para eu te ajudar a alcançar seus objetivos :) 
                        </p>
                        <img id="imageCreateSession" src={SignIn} alt="Criar Sessão"></img>
                    </article>
                    <form className="formLogin" action="">
                        <input className="input" type="email" placeholder="E-mail" />
                        <input className="input" type="password" placeholder="Senha" />
                        <div className="forgotPassword">
                            <Link to="/" className="link linkForgotPassword">
                                Esqueceu a senha?
                            </Link>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-login" type="submit">Entrar</button>
                            <Link to="/register" className="btn btn-new-user">
                                Criar Conta
                            </Link>
                            {/* <button className="btn btn-new-user" type="button">Criar Conta</button> */}
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Register;