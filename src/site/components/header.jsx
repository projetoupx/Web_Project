import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

export default function Header() {
 
    return (
        <header>
            <div id="topPage" className='header-space' />
            <nav className='header-fixed'>
                <Scroll to="topPage" spy={true} smooth={true} offset={0} duration={500} id="logo">NutriView</Scroll>
                <div className="button-a">
                    <Scroll className='header-button' to="features" spy={true} smooth={true} offset={-50} duration={500}>saude</Scroll>
                    <Scroll className='header-button' to="infos" spy={true} smooth={true} offset={0} duration={500}>troca</Scroll>
                    <Scroll className='header-button' to="about" spy={true} smooth={true} offset={0} duration={500} >about us</Scroll>
                    <Link to="/login" className='header-button'>entrar</Link>
                </div>
            </nav>
        </header>
    );
}