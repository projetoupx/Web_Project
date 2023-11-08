import React, { useState, useEffect, useContext } from 'react';
import "../Semana/SemanaDieta.css"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';

export default function SemanaDieta(props) {

    const [diet, setDiet] = useState();
    const { usuario } = useContext(AuthContext);
    const user = usuario;
    useEffect(function () {
        onSnapshot(doc(db, "users", user), (doc) => {
            const cards = Object.values(doc.data().dieta);
            cards.map((dia) => {
                if (props.dia === dia.dia)
                    setDiet(dia)
            })
        });

    }, []);

    function Dados() {
        let allText = document.querySelectorAll(`.${props.dia}.horario`);
        allText.forEach((text) => {
            console.log(text.value)
        })
    }

    return (
        <div className="semana-card">
            <h3>{props.dia}</h3>

            <form>
                <label>Horarios:</label>
                <div id="conteudo">
                    {
                        diet ? Object.keys(diet.horarios).map((text, index) => {
                            return  (
                            <div className='card-inputs'>
                                <input key={index} className={`${props.dia} horario`} type="text" placeholder='exemplo: almoço' value={text}/>
                                <div className="card-content">
                                    {
                                        Object.values(diet.horarios).map((rec, indexs) => {
                                            return(
                                                <input  key={indexs} className={`${props.dia} horario`} type="text" placeholder='exemplo: comidas' />
                                            );
                                    
                                        })
                                    }
                                </div>
                            </div>
                            );
                        }) : null
                    }
                </div>

                <input className={`${props.dia} horario`} type="text" placeholder='exemplo: almoço' />
                {/* <div className="form-horarios">
                    <input className="horario" type="text" placeholder='almoço'/>
                    <button type="button">adicionar horario!</button>
                </div> */}
                <button onClick={Dados} type="button">Salvar Dados!</button>
            </form>
        </div>
    );
}