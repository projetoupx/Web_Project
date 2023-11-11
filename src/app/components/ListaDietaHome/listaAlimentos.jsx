import React, { useState, useEffect, useContext} from 'react';
import './Lista.css';
import Semana from './semana';
import { doc, onSnapshot} from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';


export default function ListaAlimentos() {
    const [dietas, setDietas] = useState([]);
    const { usuario } = useContext(AuthContext);
    const user = usuario;
    useEffect(function () {
        onSnapshot(doc(db, "users", user), (doc) => {
            const cards = Object.values(doc.data().dieta);
            setDietas(cards.sort(function(a,b){
                if(a.id>b.id) return 1;
                if(a.id<b.id) return -1;
                return 0;
            }));
        });
    }, []);

    return (
        <div className='dieta'>
            <h2>Suas dietas:</h2>
            {
                dietas.map((dieta, index) => {
                    return  <Semana data-anime key={index} dia={dieta.dia} text={dieta.horarios} />
                })
            }
            
        </div>
    );
}