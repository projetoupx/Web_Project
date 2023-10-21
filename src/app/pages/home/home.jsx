import React from 'react';
//import {Link} from 'react-router-dom';
import './home.css';
import NavBar from '../../components/navBar';
import ListaAlimentos from '../../components/ListaDietaHome/listaAlimentos';

export default function Home() {
    return (
        <div>
            <main>
                <NavBar />
                <section className='home-container'>
                    <h1>bom dia</h1>
                    <ListaAlimentos/>
                </section>
            </main>
        </div>
    );
}