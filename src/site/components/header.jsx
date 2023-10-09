import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/" id="logo">NutriView</Link>
                <div className= "button-a">
                    <a href="#features">saude</a>
                    <a href="#infos">troca</a>
                    <a href="#about">about us</a>
                    <Link to="/login" className='button'>entrar</Link>
                </div>
            </nav>
        </header>
    );
}