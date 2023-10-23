import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import '../../form.css';
import { ArrowLeft } from '@phosphor-icons/react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [secSenha, setSecSenha] = useState('');
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');


    const [mensage, setMensage] = useState('');
    const [sucesso, setSucesso] = useState('');

    const [isRight, setIsRight]= useState(true);
    const [className1, setClassName1]= useState('form-1 active');
    const [className2, setClassName2]= useState('form-2 no-active');

    const toggleProxi = () => { 
        setMensage('');
        setIsRight(!isRight);
        if(isRight){
            if (!email || !senha || !secSenha) {
                setMensage('Informe um Email e Senha!!!');
                return;
            } else if (senha !== secSenha) {
                setMensage('Senhas diferentes!!');
                return;
            }
            setClassName1("form-1 no-active");
            setClassName2("form-2 active");
        }else{
            setClassName1("form-2 no-active");
            setClassName2("form-1 active");
        }
      }; 

    function cadastraUsuario() {

        if (!nome || !peso || !altura || !idade || !sexo) {
            setMensage('Informe os campos!!!');
            return;
        }
        createUserWithEmailAndPassword(auth, email, senha)
            .then(data => {
                const uid = data.user.uid;
                const docData = {
                    nome:nome,
                    peso:peso,
                    altura:altura,
                    idade:idade,
                    sexo:sexo,
                    dieta: {
                        card1: {
                            id: 1,
                            dia: "segunda",
                            comidas: ["adicione uma dieta!"]
                        }
                    }
                };
                setDoc(doc(db, "users", uid), docData);

                setSucesso(true);
            })
            .catch(error => {
                setIsRight(!isRight);
                setClassName1("form-2 active");
                setClassName2("form-1 no-active");
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
                        <form>
                            <div className='form-header'>
                                <Link to="../"><ArrowLeft color='#000000' /></Link>
                                <div className='form-header-text'>
                                    <h1>Nutriview</h1>
                                    <h3>Cadastro</h3>
                                    {sexo}
                                </div>
                            </div>
                            {mensage.length > 0 ? <div className="form-item form-erro"> {mensage} </div> : null}
                            {sucesso === true ? <Navigate to="/home" /> : null}
                            <div className={className1}>
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
                                <button onClick={toggleProxi} className='form-item form-button' type='button' >Proximo...</button>
                            </div>

                            <div className={className2}>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setNome(e.target.value)} type="text" className='form-input form-email' id='form-email' placeholder='seu nome!!' />
                                    <label htmlFor="form-nome">nome</label>
                                </div>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setPeso(e.target.value)} type="number"  min="0"className='form-input form-peso' id='form-peso' placeholder='seu peso!!' />
                                    <label htmlFor="form-peso">peso</label>
                                </div>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setAltura(e.target.value)} type="number" min="0" className='form-input form-altura' id='form-altura' placeholder='sua altura!!' />
                                    <label htmlFor="form-altura">altura</label>
                                </div>
                                <div className='form-item form-div'>
                                    <input onChange={(e) => setIdade(e.target.value)} type="number" range="" min="0" className='form-input form-idade' id='form-idade' placeholder='sua idade!!' />
                                    <label htmlFor="form-idade">idade</label>
                                </div>
                                <div className='form-item form-div'>
                                <select onChange={(e) => setSexo(e.target.value)} id="sexo" name="sexo">
                                    <option value="Homem">Homem</option>
                                    <option value="Mulher">Mulher</option>
                                    <option value="none">none</option>
                                    <option value="fiat Unp">Fiat Uno</option>
                                </select>
                                </div>
                                <button onClick={cadastraUsuario} className='form-item form-button' type='button' >Cadastrar!</button>
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