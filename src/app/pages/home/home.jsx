import React, { useEffect, useContext, useState } from 'react';
//import {Link} from 'react-router-dom';
import './home.css';
import NavBar from '../../components/navBar';
import ListaAlimentos from '../../components/ListaDietaHome/ListaAlimentos';
import FormCalculo from '../../components/Calculo/FormCalculo';
import { doc, onSnapshot, updateDoc} from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';
import SemanaDieta from '../../components/Semana/SemanaDieta';
import Infos from '../../components/Page/Infos';
import Trocas from '../../components/Page/Trocas';


export default function Home() {
    const [pag, setPag] = useState('dieta')
    const [nome,setNome] = useState('');
    const [result,setResult] = useState('');
    const { usuario } = useContext(AuthContext);
    const user = usuario;
    let horaAtual = new Date();
    let hello;

    useEffect(()=>{
        onSnapshot(doc(db, "users", user), (doc) => {
            let nomer = doc.data().nome;
            let resultr = doc.data().resultado;
            setNome(nomer);
            setResult(resultr);
        });
    })

    if(horaAtual.getHours() < 6){
        hello = `Good Night ${nome}!!`
    }else if(horaAtual.getHours() < 12){
        hello = `Good Morning ${nome}!!`
    }else if(horaAtual.getHours() < 18 ){
        hello = `Good Afternoon ${nome}!!`
    }else{
        hello = `Good Evining ${nome}!!`
    }
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
                        <h1>{hello}!!</h1>
                        

                        {result
                        ?
                        null
                        :
                        <FormCalculo/>
                        }

                        <Trocas/>
                        
                        {result
                        ?
                        <Infos/>
                        :
                        null
                        }
                        
                        
                    </div>
                    <div className='lestDiv'>
                        {result
                            ?
                            <button className='trocaInfos' onClick={() => {
                                const docData = {
                                    nome:nome,
                                    resultado:0,
                                    castCalo:0,
                                };
                                updateDoc(doc(db, "users", user), docData);
                            }}>Novo Cadastro</button>
                            :
                            null
                        }
                        <ListaAlimentos />
                    </div>
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