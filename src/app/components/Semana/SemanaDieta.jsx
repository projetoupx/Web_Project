import React, { useState, useEffect, useContext } from 'react';
import "../Semana/SemanaDieta.css"
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';

export default function SemanaDieta(props) {
    const [horar, setHorar] = useState([]);
    const [diet, setDiet] = useState();
    let lista = [];
    const { usuario } = useContext(AuthContext);
    const user = usuario;



    useEffect(function () {
        onSnapshot(doc(db, "users", user), (doc) => {
            const cards = Object.values(doc.data().dieta);
            cards.map((dia) => {
                if (props.dia === dia.dia) {
                    setDiet(dia);
                    lista = [dia.horarios, ...lista];
                    setHorar(lista)
                }

            })
        });
    }, []);

    function Dados() {
        let princ = document.querySelectorAll(".princ")

        princ.forEach((values, index) => {
            let num = 0;
            const hora_comida = {};
            
            if (num === 0 && values.value !== '') {
                hora_comida[values.value] = [{ nome: "", gramas: "" }, { nome: "", gramas: "" }];
                lista = [...horar, hora_comida];
                setHorar(lista);
            }

        })
    }

    function DadosComida() {

    }

    function SalvarDados() {
        // const docData = {
        //     dieta: [{
        //         dia: props.dia,
        //         horarios: {
        //             almoco: [{ nome: "maça", gramas: "200g" }]
        //         }
        //     }]


        // };
        // updateDoc(doc(db, "users", user), docData);

        console.log(horar)
    }

    return (
        <div className="semana-card">
            <h3>{props.dia}</h3>
            <label>Horarios:</label>
            <form>
                <div className={`${props.dia} conteudo`}>
                    {
                        horar.length !== 0 ?
                            <div className='card-inputs'>
                                <div className="cards">
                                    {
                                        horar.map((values, index) => {
                                            return (
                                                <div key={index} className="card-content card-hora">
                                                    {
                                                        Object.keys(values).map((itenName, index) => {
                                                            return (
                                                                <div className="comida" key={index}>
                                                                    <div className="card-row">
                                                                        <h3>{itenName}:</h3>
                                                                    </div>
                                                                    {
                                                                    Object.values(values).map((itens, index) => {
                                                                        return(
                                                                        itens.map((text, index) => {
                                                                            return (
                                                                                <div key={index}>
                                                                                    <label>- Comida {index +1}:</label>
                                                                                    <div className="card-row">
                                                                                        <label>-- nome:</label>
                                                                                        <input key={index} className={`card-input nome`} type="text" placeholder='exemplo: comidas' />
                                                                                    </div>
                                                                                    <div className="card-row">
                                                                                        <label>-- gramas:</label>
                                                                                        <input key={index} className={`card-input gramas`} type="text" placeholder='exemplo: comidas' />
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })
                                                                        )
                                                                    })
                                                                    }
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                    <button onClick={DadosComida} type="button">adicionar comida!</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="card-row">
                                    <input className={`${props.dia} card-input princ`} type="text" placeholder='almoço' />
                                    <button onClick={Dados} type="button">adicionar horario!</button>
                                </div>
                            </div>

                            : <div className="card-row">
                                <input className={`${props.dia} card-input princ`} type="text" placeholder='almoço' />
                                <button onClick={Dados} type="button">adicionar horario!</button>
                            </div>
                    }
                </div>
                <button onClick={SalvarDados} type="button">Salvar Dados!</button>
            </form>
        </div>
    );
}