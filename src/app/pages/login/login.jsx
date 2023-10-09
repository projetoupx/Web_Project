import React from 'react';
import {Link} from 'react-router-dom'
import '../../form.css';

export default function Login() {
    return (
        <div>
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form>
                            <div className='form-header'>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Please sign in</h3>
                                </div>
                            </div>
                            <div className='form-item form-div'>
                                <input type="email" className='form-input form-email' id='form-email' placeholder='name@example.com' />
                                <label htmlFor="form-email">Email address</label>
                            </div>
                            <div className='form-item form-div'>
                                <input type="password" className='form-input form-password' id='form-password' placeholder='Password' />
                                <label htmlFor="form-password">Password</label>
                            </div>
                            <button className='form-item form-button'>Sing in</button>
                            <div className='form-item form-links'>
                                <Link to="../novasenha">Esqueci minha senha</Link>
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