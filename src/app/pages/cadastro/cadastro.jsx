import React from 'react';
import {Link} from 'react-router-dom'
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

export default function Cadastro() {
    return (
        <div>
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form>
                            <div className='form-header'>
                                <Link to="../"><ArrowLeft color='#000000'/></Link>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Cadastro</h3>
                                </div>
                            </div>
                            <div className='form-item form-div'>
                                <input type="text" className='form-input form-text' id='form-text' placeholder='Seu nome'/>
                                <label htmlFor="form-text">Nome</label>
                            </div>
                            <div className='form-item form-div'>
                                <input type="email" className='form-input form-email' id='form-email' placeholder='name@example.com'/>
                                <label htmlFor="form-email">Email</label>
                            </div>
                            <div className='form-item form-div'>
                                <input type="password" className='form-input form-password' id='form-password' placeholder='Password'/>
                                <label htmlFor="form-password">Senha</label>
                            </div>
                            <div className='form-item form-div'>
                                <input type="password" className='form-input form-password' id='form-password' placeholder='Password'/>
                                <label htmlFor="form-password">Repita senha</label>
                            </div>
                            <button className='form-item form-button'>Cadastrar</button>
                            <div className='form-item form-links'>
                                <Link to="../login">Já tenho uma conta</Link>
                            </div>
                            <p>&copy; Desenvolvido por Nutriview</p>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}