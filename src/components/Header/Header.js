/**
 * Header component.
 */

import React from 'react';
import './Header.css';
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import search from "../../assets/icons/search.png";

export default function Header() {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda para voltar"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita para voltar"/>
                </button>
                <div className="header__search">
                    <img src={search} alt=""/>
                    <input type="text" id="search-input"placeholder="O que você quer ouvir?" maxength="800"/>
                </div>
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );  
};
