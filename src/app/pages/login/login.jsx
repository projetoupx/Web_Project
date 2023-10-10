import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');

    function loginUsuario() {

        // Conectar com google...

        // const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        // .then((result) => {
        //     console.log(result);
        //     alert('sucesso');
        // })
        // .catch((error) => {
        //     console.log(error);
        //     alert('erro');
        // });

        // Conectar com email e senha...

        signInWithEmailAndPassword(auth, email, senha)
            .then((result) => {
                setSucesso(true);
                alert('sucesso');
            })
            .catch((error) => {
                setSucesso(false);
            });
    }

    function alterarEmail(event) {
        setEmail(event.target.value);
    }

    function alterarSenha(event) {
        setSenha(event.target.value);
    }

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
                                    <h3>Please sign in</h3>
                                </div>
                            </div>
                            {
                                sucesso === false ? <div className='form item form-erro'> Email ou senha invalida!!! </div> : null
                            }
                            <div className='form-item form-div'>
                                <input onChange={alterarEmail} type="email" className='form-input form-email' id='form-email' placeholder='name@example.com' />
                                <label htmlFor="form-email">Email address</label>
                            </div>
                            <div className='form-item form-div'>
                                <input onChange={alterarSenha} type="password" className='form-input form-password' id='form-password' placeholder='Password' />
                                <label htmlFor="form-password">Password</label>
                            </div>
                            <button onClick={loginUsuario} className='form-item form-button' type="button">Sing in</button>
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