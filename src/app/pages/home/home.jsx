import React from 'react';
//import {Link} from 'react-router-dom';
import './home.css';
import NavBar from '../../components/navBar';
import ListaAlimentos from '../../components/ListaDietaHome/ListaAlimentos';
import FormCalculo from '../../components/Calculo/FormCalculo';

export default function Home() {
    return (
        <div>
            <main>
                <NavBar />
                <section className='home-container'>
                    <div className='home-conteudo'>
                        <h1>Hello</h1>
                        <FormCalculo/>
                    </div>
                    <ListaAlimentos/>
                </section>
            </main>
        </div>
    );
}