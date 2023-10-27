import React, { useState , useContext} from 'react';
import { Link, Navigate } from 'react-router-dom'
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

import { AuthContext } from '../../context/auth';


export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [secSenha, setSecSenha] = useState('');

    const [mensage, setMensage] = useState('');
    const [sucesso, setSucesso] = useState('');

    const {setLogado, setUsuario} = useContext(AuthContext);

    function cadastraUsuario() {
        if(secSenha !== senha){
            setMensage('Senhas diferentes');
            return 0;
        }else if(!senha || !secSenha || !email){
            setMensage('Algum campo vaziu!!');
            return 0;
        }
            
        createUserWithEmailAndPassword(auth, email, senha)
            .then(data => {
                const uid = data.user.uid;
                const docData = {
                    dieta: {
                        card1: {
                            id: 1,
                            dia: "segunda",
                            comidas: ["adicione uma dieta!"]
                        }
                    }
                };
                setDoc(doc(db, "users", uid), docData);

                localStorage.setItem("logado", true);
                localStorage.setItem("user", uid);
                setUsuario(uid);
                setLogado(true);
                setSucesso(true);
            })
            .catch(error => {
                if (error.code === 'auth/weak-password')
                    setMensage('A Senha deve ter pelo menos 6 caracteres!');
                else if (error.code === 'auth/email-already-in-use')
                    setMensage('Usuario já cadastrado!');
                else if (error.code === 'auth/invalid-email')
                    setMensage('Email ou senha invalida!');
                else
                    setMensage(error.code);
            });
    }


    return (
        <div>
            <main>
                <section className="container">
                    <div className='form-container'>
                        <form className='form'>
                            <div className='form-header'>
                                <Link to="../"><ArrowLeft color='#000000' /></Link>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Cadastro</h3>
                                </div>
                            </div>
                            {mensage.length > 0 ? <div className="form-item form-erro"> {mensage} </div> : null}
                            {sucesso === true ? <Navigate to="/home" /> : null}
                            <div className="form-1 active">
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input form-email' id='form-email' placeholder='name@example.com' />
                                    <label htmlFor="form-email">Email</label>
                                </div>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setSenha(e.target.value)} type="password" className='form-input form-password' id='form-password' placeholder='Password' />
                                    <label htmlFor="form-password">Senha</label>
                                </div>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setSecSenha(e.target.value)} type="password" className='form-input form-password' id='form-secPassword' placeholder='Password' />
                                    <label htmlFor="form-password">Repita senha</label>
                                </div>
                                <button onClick={cadastraUsuario} className='form-item form-button' type='button' >Cadastrar...</button>
                            </div>
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