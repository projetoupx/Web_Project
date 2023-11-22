import React, { useContext, useEffect, useState } from "react";
import "../Page/Page.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';

export default function Infos() {
    const [result,setResult] = useState('');
    const [resultC,setResultC] = useState('');
    const { usuario } = useContext(AuthContext);
    const user = usuario;
    useEffect(()=>{
        onSnapshot(doc(db, "users", user), (doc) => {
            let resultr = doc.data().resultado;
            let call = doc.data().castCalo;
            
            setResult(resultr);
            setResultC(call)
        });
    })

    return (
        <div className="taxa">
            <h2>Resultados da taxa de metabolismo basal:</h2>
            <p>Sua taxa metabólica basal é de <strong>{result} Kcal</strong>.</p>
            <p>Sua necessidade energetica diaria é de <strong>{resultC} Kcal</strong>.</p><br />
            <p>Se deseja emagrecer deve seguir uma dieta com menos de <strong>{resultC} Kcal</strong> por dia.</p> 
            <p>- O ideal é que não se consumam menos calorias que o necessário para manter a
                 taxa de metabolismo basal por longos períodos.</p>
            <p>- Uma ótima opção para ajudar a emagrecer, é aumentar o seu gasto energético 
                com a prática regular de atividade física.</p><br />
            <p>Se deseja manter o peso deve seguir uma dieta com <strong>{resultC} Kcal</strong> por dia.</p><br />
            <p><strong>-- Os calculos são apenas uma média ilustrativa, 
                recomendamos que procure uma orientação profissional!!</strong></p>
        </div>
    );
}