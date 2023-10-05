import React from 'react';
export default function Header(){
    return (
        <header>
            <nav>
                <a href="/" id="logo">NutriView</a>
                <div className= "button-a">
                    <a href="/app">troca</a>
                    <a href="#">saude</a>
                    <a href="#">about us</a>
                </div>
            </nav>
        </header>
    );
}