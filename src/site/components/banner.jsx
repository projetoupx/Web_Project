import React from 'react';

export default function Banner() {
    return (
        <section className="container">
            <div id="banner">
                <div className="banner-text">
                    <div className='text'>
                        <h1>Sua alimentação nunca mais será largada</h1>
                        <h4>Saude em primeiro lugar</h4>
                        <div>
                            <button type='button'>cadastrar</button>
                            <button type='button'>fazer login</button>
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