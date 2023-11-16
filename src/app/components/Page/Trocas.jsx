import React, { useEffect, useState } from "react";
import "../Page/Page.css";
import { collection, getDocs, query , where, orderBy, limit} from "firebase/firestore";
import { db } from '../../config/firebase';


export default function Trocas() {
    const [results, setResults] = useState([])
    let lista = []

    const [resultsPesq, setResultsPesq] = useState([])
    let listapes = []

    const [pesquisa, setPesquisa] = useState('')
    const [tipo, setTipo] = useState('')
    const [nome, setNome] = useState('')

    const [valorAli, setValorAli] = useState('')

    const [TipoAli, setTipoAli] = useState('proteinas')
    
    const docRef = collection(db, "food")
    const docSnap = getDocs(docRef)

    

    useEffect(function(){
        docSnap.then(async function(resultado){
            await resultado.forEach(valor =>{
                if(valor.data().nome.indexOf(pesquisa) >= 0){
                    listapes.push({
                        id:valor.id,
                        nome:valor.data().nome,
                        proteinas:valor.data().proteinas,
                        carboidratos:valor.data().carboidratos,
                        calorias:valor.data().calorias,
                        tipo:valor.data().tipo
                }
                )}
            })
            setResultsPesq(listapes) 
        })
        
        docSnap.then(async function(resultado){
            await resultado.forEach(valor =>{
                if(valor.data().tipo === tipo){
                    lista.push({
                        id:valor.id,
                        nome:valor.data().nome,
                        proteinas:valor.data().proteinas,
                        carboidratos:valor.data().carboidratos,
                        calorias:valor.data().calorias,
                        tipo:valor.data().tipo
                    })
                }
            })
            setResults(lista)
            resultsPesq.map((valores, index) =>{
                if(index < 1){
                    setTipo(valores.tipo)
                    setNome(valores.nome)
                    let a = valores[TipoAli]
                    setValorAli(a)
                }
            }) 
            
        })
        
        
    }, [pesquisa, TipoAli])
    
    return(
        <section className="trocas">
            <h2>Suas trocas!!</h2>
            <div className="suasTrocas">
                <div className="userTrocas">
                    <h2>Pesquisa:</h2>
                    <div className="formPesq">
                        <input id="pesquisa" onChange={(e) => setPesquisa(e.target.value)} type="text" className="pesquisa"/>
                        <select onChange={(e) => setTipoAli(e.target.value)} id="esc" name="esc" className="pesquisa">
                            <option value="proteinas">Proteinas</option>
                            <option value="calorias">Calorias</option>
                            <option value="carboidratos">Carboidratos</option>
                        </select>
                    </div>
                    {
                        pesquisa
                        ?
                        resultsPesq.map((valores, index) =>{
                            if(index < 1){
                            return(
                                 <div key={valores.id} className="cardTrocas">
                                    <div className="name">
                                        <h3>{valores.nome}</h3>
                                        <p>(100g)</p>
                                    </div>
                                    <p>proteinas: {valores.proteinas}g</p>
                                    <p>calorias: {valores.calorias}cal</p>
                                    <p>carboidratos: {valores.carboidratos}g</p>
                                    <p>tipo: {valores.tipo}</p>
                                </div>
                            )}
                        })   
                        :
                        resultsPesq.map((valores, index) =>{
                            if(index < 6){
                            return(
                                 <div key={valores.id} className="cardTrocas">
                                    <div className="name">
                                        <h3>{valores.nome}</h3>
                                        <p>(100g)</p>
                                    </div>
                                    
                                </div>
                            )}
                        })  
                        
                    }
                    
                </div>
                <div className="todasTrocas">
                <h2>Substituiçoes:</h2>
                    <div className="results">
                        {
                            tipo && pesquisa
                            ?
                            results.map((valores, index) =>{
                                if(index < 6 && valores.tipo === tipo && valores.nome !== nome){
                                    let res = valores[TipoAli]
                                    let sub = Math.round((valorAli*100)/res)
                                    if(sub === Infinity){
                                        sub = 100;
                                    }
                                return(
                                     <div key={valores.id} className="cardTrocas">
                                        <div className="name">
                                            <h3>{valores.nome}</h3>
                                            <p>({sub}g)</p>
                                        </div>
                                        <p>proteinas: {((sub * valores.proteinas)/100).toFixed(2)}g</p>
                                        <p>calorias: {((sub * valores.calorias)/100).toFixed(2)}cal</p>
                                        <p>carboidratos: {((sub * valores.carboidratos)/100).toFixed(2)}g</p>
                                        <p>tipo: {valores.tipo}</p>
                                    </div>
                                )}
                            })
                            :
                            results.map((valores, index) =>{
                                if(index < 6){
                                return(
                                     <div key={valores.id} className="cardTrocas">
                                        <h3>{valores.nome}</h3>
                                        <p>proteinas: {valores.proteinas}g</p>
                                        <p>calorias: {valores.calorias}cal</p>
                                        <p>carboidratos: {valores.carboidratos}g</p>
                                        <p>tipo: {valores.tipo}</p>
                                    </div>
                                )}
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}