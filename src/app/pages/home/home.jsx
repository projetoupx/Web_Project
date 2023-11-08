import React, { useEffect, useContext, useState } from 'react';
//import {Link} from 'react-router-dom';
import './home.css';
import NavBar from '../../components/navBar';
import ListaAlimentos from '../../components/ListaDietaHome/ListaAlimentos';
import FormCalculo from '../../components/Calculo/FormCalculo';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';
import SemanaDieta from '../../components/Semana/SemanaDieta';


export default function Home() {
    const [pag, setPag] = useState('dieta')
    const [nome,setNome] = useState('');
    const { usuario } = useContext(AuthContext);
    const user = usuario;

    
    useEffect(()=>{
        onSnapshot(doc(db, "users", user), (doc) => {
            let nome = doc.data().nome;
            setNome(nome)
        });
    })

    const setType = (childdata) => {
        setPag(childdata);
      }

    if(pag === "dieta")
        return (
        <div>
            <main>
                <NavBar setType={setType}/>
                <section className='home-container'>
                    <div className='home-conteudo'>
                        <h1>Hello {nome}</h1>
                        <FormCalculo/>
                    </div>
                    <ListaAlimentos />
                </section>
            </main>
        </div>
    );
    if(pag === "mont")
        return (
            <div>
                <main>
                    <NavBar setType={setType}/>
                    <section className='home-container'>
                        <div className='home-conteudo'>
                            <h1>Monte sua dieta!!!</h1>
                            <div className="cards">
                                <SemanaDieta dia="Segunda"/>
                                <SemanaDieta dia="Terça"/>
                                <SemanaDieta dia="Quarta"/>
                                <SemanaDieta dia="Quinta"/>
                                <SemanaDieta dia="Sexta"/>
                                <SemanaDieta dia="Sabado"/>
                                <SemanaDieta dia="Domingo"/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
}