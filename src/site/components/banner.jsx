import React from 'react';
import {Link} from 'react-router-dom'

export default function Banner() {
    return (
        <section className="container">
            <div id="banner">
                <div className="banner-text">
                    <div className='text'>
                        <h1 typing-animation="2.8" >Dieta não precisa ser ruim.</h1>
                        <h4>Sua alimentação descomplicada.</h4>
                        <div className='banner-button'>
                            <Link to="/login" className='button'>Entrar</Link>
                            <Link to="/cadastro" className='button'>Cadastrar</Link>
                        </div>
                    </div>
                </div>
                <div className="banner-img">
                    <div className='banner-img-fundo1'></div>
                    <div className='banner-img-fundo2'></div>
                    <img src="imgs/banner_img1.png" alt="imagem do prato" />
                </div>
            </div>
        </section>
    );
}