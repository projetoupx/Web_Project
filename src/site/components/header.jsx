import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

export default function Header() {

    const [styleHeader, setStyleHeader] = useState('header-fixed')

    
    return (
        <header>
            <div id="topPage" className='header-space' />
            <nav className={styleHeader}>
                <Scroll to="topPage" spy={true} smooth={true} offset={0} duration={500} id="logo">NutriView</Scroll>
                <div className="button-a">
                    <Scroll className='header-button' to="features" activeClass="onActive"  spy={true} smooth={true} offset={-50} duration={500} >Saúde</Scroll>
                    <Scroll className='header-button' to="infos" activeClass="onActive" spy={true} smooth={true} offset={0} duration={500} >Saiba mais</Scroll>
                    <Scroll className='header-button' to="about" activeClass="onActive" spy={true} smooth={true} offset={0} duration={500} >Sobre nós</Scroll>
                    <Link to="/login" className='header-button'>Entrar</Link>
                </div>
            </nav>
        </header>
    );
}