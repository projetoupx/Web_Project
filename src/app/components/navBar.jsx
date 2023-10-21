import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link className='header-button' to="../home" id="logo">NutriView</Link>
                <div className= "button-a">
                    <Link className='header-button' to="#">sua dieta</Link>
                    <Link className='header-button' to="#">suas trocas</Link>
                    <Link className='header-button' to="../">sair</Link>
                </div>
            </nav>
        </header>
    );
}