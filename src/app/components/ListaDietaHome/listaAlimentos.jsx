import React, { useState, useEffect } from 'react';
import './Lista.css';
import Semana from './semana';
import { doc, getDoc, collection} from "firebase/firestore";
import { db } from '../../config/firebase';

const usuario = "Z0jgtfxzXxah4GcCYsE9aCJmpF22";

const usersRef = collection(db, "users");
const docRef =  doc(usersRef, usuario);
const docSnap = await getDoc(docRef);
const cards = Object.values(docSnap.data().dieta);

export default function ListaAlimentos() {
    const [dietas, setDietas] = useState([]);


    
    useEffect(function () {
        

        console.log("aqui", cards.sort());

        setDietas(cards.sort(function(a,b){
            if(a.id>b.id) return 1;
            if(a.id<b.id) return -1;
            return 0;
        }));

    }, []);

    return (
        <div className='dieta'>
            <h2>Suas dietas:</h2>
            {
                dietas.map(dieta => {
                    return  <Semana key={dieta.id} dia={dieta.dia} text={dieta.comidas} />
                })
            }
            
        </div>
    );
}