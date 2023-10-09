import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link to="../home" id="logo">NutriView</Link>
                <div className= "button-a">
                    <Link to="#">Inicio</Link>
                    <Link to="#">Suas trocas</Link>
                    <Link to="../">Sair</Link>
                </div>
            </nav>
        </header>
    );
}