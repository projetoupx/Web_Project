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
                    lista = [...dia, lista];
                    // console.log(lista)
                }

            })
        });
    }, []);

    function Dados() {
        let princ = document.querySelectorAll(".princ")
        
        princ.forEach((values, index) => {
            let num = 0;
            lista.forEach((value) => {
                if (values.value === value) {
                    console.log(value)
                    num = 1;
                }
            })
            if (num === 0 && values.value !== '') {
                lista = [...horar, values.value]
                // console.log("lista:",lista);
                setHorar(lista);
            }
    
    
            // horar.forEach((text, index) => {
    
            //     console.log(index, text)
            //     // const docData = {
            //     //     dieta:[{
            //     //         horarios:{
            //     //             text:[{nome:"maça",gramas:"200g"}]
            //     //         }
            //     //     }]
            //     // };
            //     // updateDoc(doc(db, "users", user), docData);
            // })
        })
    }

    function SalvarDados() {
        const docData = {
            dieta: [{
                dia: props.dia,
                horarios: {
                    almoco: [{ nome: "maça", gramas: "200g" }]
                }
            }]


        };
        updateDoc(doc(db, "users", user), docData);
    }

    return (
        <div className="semana-card">
            <h3>{props.dia}</h3>
            <form>
                <label>Horarios:</label>
                <div className={`${props.dia} conteudo`}>
                    {
                        horar.length !== 0 ?
                            <div className='card-inputs'>
                                {
                                    horar.map((text, index) => {
                                        return (
                                            <div key={index} className="card-content card-hora">
                                                <div className="card-row">
                                                    <h3>{text}:</h3>
                                           
                                                </div>

                                                <label>- Comida {index + 1}:</label>
                                                <div className="card-row">
                                                    <label>-- nome:</label>
                                                    <input key={index} className={`horario`} type="text" placeholder='exemplo: comidas' />
                                                </div>
                                                <div className="card-row">
                                                    <label>-- gramas:</label>
                                                    <input key={index} className={`horario`} type="text" placeholder='exemplo: comidas' />
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                                <div className="card-row">
                                    <input className={`${props.dia} horario princ`} type="text" placeholder='almoço' />
                                    <button onClick={Dados} type="button">adicionar horario!</button>
                                </div>
                            </div>

                            : <div className="card-row">
                                <input className={`${props.dia} horario princ`} type="text" placeholder='almoço' />
                                <button onClick={Dados} type="button">adicionar horario!</button>
                            </div>
                    }
                </div>
                <button type="button">Salvar Dados!</button>
            </form>
        </div>
    );
}