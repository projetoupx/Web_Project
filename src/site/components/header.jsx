import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {

    const [cabecalhoStyle, setCabecalhoStyle] = useState('header-fixed');


    return (
        <header>
            <div className='header-space' />
            <nav className={cabecalhoStyle}>
                <Link to="/" id="logo">NutriView</Link>
                <div className="button-a">
                    <a href="#features">saude</a>
                    <a href="#infos">troca</a>
                    <a href="#about">about us</a>
                    <Link to="/login" className='button'>entrar</Link>
                </div>
            </nav>
        </header>
    );
}