import React from 'react';

export default function AboutUs() {
    return (
        <section className="container">
            <div className="about" id="about">
                <h2>oque somos:</h2>
                <p>Grupo de estudantes em desenvolvimento de sistemas na facens.</p>
                <h2>Objetivos:</h2>
                <p>Grupo de estudantes em desenvolvimento de sistemas na facens.</p>
                <h2>nossa equipe:</h2>
                <div className='about-conteudo'>
                    <div className='about-card'>
                        <img src="../../imgs/fotosGrupo/fotoNathan.jpg" alt="#" className='about-card-img'/>
                        <div className="about-card-text">
                            <h3>Nathan Tanzi</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="#" alt="#" className='about-card-img'/>
                        <div className="about-card-text">
                            <h3>Marisol</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="#" alt="#" className='about-card-img'/>
                        <div className="about-card-text">
                            <h3>Guilherme</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="#" alt="#" className='about-card-img'/>
                        <div className="about-card-text">
                            <h3>Giulia</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="#" alt="#" className='about-card-img'/>
                        <div className="about-card-text">
                            <h3>Caio</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}