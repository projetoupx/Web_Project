import React from 'react';
import { Link } from 'react-router-dom';
import {LinkedinLogo} from '@phosphor-icons/react';
import {GithubLogo}  from '@phosphor-icons/react';

export default function AboutUs() {
    return (
        <section className="container">
            <div className="about" id="about">
                <h2>quem somos:</h2>
                <p>Um grupo de estudantes de Engenharia da Computação pela Faculdade de Engenharia de Sorocaba (FACENS).</p>
                <h2>nossa equipe:</h2>
                <div className='about-conteudo'>
                    <div className='about-card'>
                        <img src="../../imgs/fotosGrupo/fotoNathan.jpg" alt="Foto Nathan" className='about-card-img' />
                        <div className="about-card-text">
                            <h3>Nathan Tanzi</h3>
                            <p>20 anos, técnico em Desenvolvimento de Sistemas e apaixonado por música.</p>
                            <div className='about-button'>
                                <Link to="https://www.linkedin.com/in/nathan-tanzi/" className='button'><LinkedinLogo size={32}/>LinkedIn </Link>
                                <Link to="https://github.com/Ntanzi07" className='button'><GithubLogo size={32} />GitHub</Link>
                            </div>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="../../imgs/fotosGrupo/fotoMarisol.jpg" alt="Foto Marisol" className='about-card-img' />
                        <div className="about-card-text">
                            <h3>Marisol Marques</h3>
                            <p>19 anos, técnica em Serviços Jurídicos e falo pelos cotovelos. </p>
                            <div className='about-button'>
                                <Link to="https://www.linkedin.com/in/marisol-marques04/" className='button'><LinkedinLogo size={32}/>LinkedIn</Link>
                                <Link to="https://github.com/thomazzsol" className='button'><GithubLogo size={32} />GitHub</Link>
                            </div>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="../../imgs/fotosGrupo/fotoGuilherme.jpg" alt="#" className='about-card-img' />
                        <div className="about-card-text">
                            <h3>Guilherme Campos</h3>
                            <p>21 anos, fluente em inglês e cursando Engenharia da Computação. Saúde em 1° lugar!</p>
                            <div className='about-button'>
                                <Link to="https://www.linkedin.com/in/guilherme-de-campos-915960297 " className='button'><LinkedinLogo size={32}/>LinkedIn</Link>
                                <Link to="https://github.com/GuiCamposSS" className='button'><GithubLogo size={32} />GitHub</Link>   
                            </div>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="#" alt="#" className='about-card-img' />
                        <div className="about-card-text">
                            <h3>Giulia Albuquerque</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                            <div className='about-button'>
                                <Link to="https://www.linkedin.com/in/marisol-marques04/" className='button'><LinkedinLogo size={32}/>LinkedIn</Link>
                                <Link to="https://github.com/thomazzsol" className='button'><GithubLogo size={32} />GitHub</Link>
                            </div>
                        </div>
                    </div>
                    <div className='about-card'>
                        <img src="../../imgs/fotosGrupo/fotoCaio.jpg" alt="Foto Caio" className='about-card-img' />
                        <div className="about-card-text">
                            <h3>Caio Pohlmann</h3>
                            <p>Veritas semper una est. Fallacia alia aliam trudit. Maior dolor obscurat minorem.</p>
                            <div className='about-button'>
                                <Link to="https://www.linkedin.com/in/marisol-marques04/" className='button'><LinkedinLogo size={32}/>LinkedIn</Link>
                                <Link to="https://github.com/thomazzsol" className='button'><GithubLogo size={32} />GitHub</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}