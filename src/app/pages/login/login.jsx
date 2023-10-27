import React, { useState, useContext } from 'react';
import { Link , Navigate} from 'react-router-dom';
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

import { AuthContext } from '../../context/auth';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');
    const {setLogado, setUsuario} = useContext(AuthContext);

    function loginUsuario() {
        signInWithEmailAndPassword(auth, email, senha)
            .then(data => {
                const uid = data.user.uid;

                localStorage.setItem("logado", true);
                localStorage.setItem("user", uid);
                setUsuario(uid);
                setLogado(true);
                setSucesso(true);
            })
            .catch(error => {
                setSucesso(false);
            });
    }

    return (
        <div>
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form className='form'>
                            <div className='form-header'>
                                <Link to="../"><ArrowLeft color='#000000'/></Link>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Please sign in</h3>
                                </div>
                            </div>
                            {sucesso === false ? <div className='form item form-erro'> Email ou senha invalida!!! </div> : null}
                            <div className='form-item form-div'>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input form-email' id='form-email' placeholder='name@example.com' />
                                <label htmlFor="form-email">Email address</label>
                            </div>
                            <div className='form-item form-div'>
                                <input onChange={(e) => setSenha(e.target.value)} type="password" className='form-input form-password' id='form-password' placeholder='Password' />
                                <label htmlFor="form-password">Password</label>
                            </div>
                            <button onClick={loginUsuario} className='form-item form-button' type="button">Sing in</button>
                            {sucesso === true ? <Navigate to="/home"/> : null}
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