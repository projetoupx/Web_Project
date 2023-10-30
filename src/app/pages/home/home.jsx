import React, { useEffect, useContext, useState } from 'react';
//import {Link} from 'react-router-dom';
import './home.css';
import NavBar from '../../components/navBar';
import ListaAlimentos from '../../components/ListaDietaHome/ListaAlimentos';
import FormCalculo from '../../components/Calculo/FormCalculo';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';


export default function Home() {
    const [nome,setNome] = useState('');
    const { usuario } = useContext(AuthContext);
    const user = usuario;

    
    useEffect(()=>{
        onSnapshot(doc(db, "users", user), (doc) => {
            let nome = doc.data().nome;
            setNome(nome)
        });
    })

    return (
        <div>
            <main>
                <NavBar />
                <section className='home-container'>
                    <div className='home-conteudo'>
                        <h1>Hello {nome}</h1>
                        <FormCalculo />
                    </div>
                    <ListaAlimentos />
                </section>
            </main>
        </div>
    );
}