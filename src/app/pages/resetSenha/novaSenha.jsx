import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

import { sendPasswordResetEmail} from 'firebase/auth';
import { auth } from '../../config/firebase'

export default function NovaSenha() {
    const [email, setEmail] = useState('');
    const [sucesso, setSucesso] = useState('');
    function Recuperar(){
        sendPasswordResetEmail(auth, email)
        .then(result =>{
            alert(result);
            setSucesso(true);
            result.code === 'undefined' ? setSucesso(false) : setSucesso(true);
        }).catch(erro =>{
            alert(erro);
        })

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
                                    <h3>Recuperar Senha</h3>
                                    {email !== ''? <p>enviando email para: {email}</p> : null}
                                </div>
                            </div>
                            {sucesso === false ? <div className='form item form-erro'> Este Email é invalido!!! </div> : null}
                            <div className='form-item form-div'>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input form-email' id='form-email' placeholder='name@example.com'/>
                                <label htmlFor="form-email">Email</label>
                            </div>
                            <button onClick={Recuperar} className='form-item form-button' type="button">Enviar</button>
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