import React from 'react';
import {Link} from 'react-router-dom'
import '../../form.css';

export default function NovaSenha() {
    return (
        <div>
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form>
                            <div className='form-header'>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Recuperar Senha</h3>
                                </div>
                            </div>
                            <div className='form-item form-div'>
                                <input type="email" className='form-input form-email' id='form-email' placeholder='name@example.com'/>
                                <label htmlFor="form-email">Email</label>
                            </div>

                            <button className='form-item form-button'>Enviar</button>
                            <div className='form-item form-links'>
                                <Link to="../cadastro">Crie sua conta</Link>
                            </div>
                            <p>&copy; Desenvolvido por Nutriview</p>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}