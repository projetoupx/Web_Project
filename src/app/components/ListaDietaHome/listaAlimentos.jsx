import React, { useState, useEffect } from 'react';
import './Lista.css';
import Semana from './semana';
import { doc, getDoc, onSnapshot, query, collection} from "firebase/firestore";
import { db } from '../../config/firebase';

const usuario = "Z0jgtfxzXxah4GcCYsE9aCJmpF22";

const docRef = doc(db, "users", usuario);
const docSnap = await getDoc(docRef);
const cards = docSnap.data().dieta;

// console.log(docSnap.data());
// console.log(cards);

export default function ListaAlimentos() {
    const [dietas, setDietas] = useState([]);
    let listaDietas = [];


    useEffect(function () {
        const q = query(collection(db, "users"));
        onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
                listaDietas.push(doc.data().nome);
        });
        console.log("Current cities in CA: ", listaDietas.join(", "));
        setDietas(listaDietas);
        });

    //     docSnap(async function(result){
    //         await result.forEach(function(doc){
    //             listaDietas.push({
    //                 dia: doc.dia,
    //                 horarios: doc.horarios
    //              });
    //         });
    //         setDietas(listaDietas);
    //     })

    }, []);

    return (
        <div className='dieta'>
            <h2>Suas dietas:</h2>
            {
                dietas.map((dieta) => {
                    return  <Semana dia={dieta.nome} texto={dieta.text} />
                })
            }
            
        </div>
    );
}