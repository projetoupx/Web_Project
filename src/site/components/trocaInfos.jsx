import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function TrocaInfos() {

    return (
        <section className="container">
            <div className="infos" id="infos">
                <div className='infos-cards' data-anime="left">
                    <h2>Cálculo Basal (TMB)</h2>
                    <p>Te auxiliamos a calcular suas necessidades energéticas básicas para atingir seu objetivo.</p>
                </div>
                <div className='infos-cards' data-anime="right">
                    <h2>Substituição de Alimentos</h2>
                    <p> Não fure a dieta! Aqui você encontra diversas substituições para incluir no cardápio.</p>
                </div>
                <div className='infos-cards' data-anime="left">
                    <h2>Totalmente Gratuito</h2>
                    <p>Acompanhe seu progresso de forma simples e gratuíta. Cadastre-se já!</p>
                </div>
                <div className='infos-button'>
                    <Link to="/login" className='button'>Entrar</Link>
                    <Link to="/cadastro" className='button'>Cadastrar</Link>
                </div>
            </div>
                
        </section>
    );
}