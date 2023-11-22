import React, { useEffect, useRef, useState } from "react";
import "../Page/Page.css";
import { collection, getDocs, query , where, orderBy, limit} from "firebase/firestore";
import { db } from '../../config/firebase';


export default function Trocas() {
    const [results, setResults] = useState([])
    let lista = []

    const [resultsPesq, setResultsPesq] = useState([])
    let listapes = []

    const [pesquisa, setPesquisa] = useState('')
    const [tipo, setTipo] = useState('carne')
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
                if(valor.data().tipo === tipo && pesquisa){
                    lista.push({
                        id:valor.id,
                        nome:valor.data().nome,
                        proteinas:valor.data().proteinas,
                        carboidratos:valor.data().carboidratos,
                        calorias:valor.data().calorias,
                        tipo:valor.data().tipo
                    })
                }else if(pesquisa === "")(
                    lista.push({
                        id:valor.id,
                        nome:valor.data().nome,
                        proteinas:valor.data().proteinas,
                        carboidratos:valor.data().carboidratos,
                        calorias:valor.data().calorias,
                        tipo:valor.data().tipo
                    })
                )
            })
            setResults(lista)
            resultsPesq.map((valores, index) =>{
                if(index < 1){ 
                    setNome(valores.nome)
                    let a = valores[TipoAli]
                    setValorAli(a)
                }
            }) 
            
        })

        }, [pesquisa, TipoAli, tipo])

        // useEffect(()=> {
        //     document.querySelector('.slider:last-child').remove();
        //     var copy = document.querySelector(".slider-slid").cloneNode(true);
        //     document.querySelector('.slider').appendChild(copy);

        // }, [results])


    
    return(
        <section className="trocas">
            <h2>Suas trocas!!</h2>
            <div className="suasTrocas">
                <div className="userTrocas">
                    <h2>Pesquisa:</h2>
                    <div className="formPesq">
                        <input id="pesquisa" onChange={(e) => setPesquisa(e.target.value)} type="text" className="pesquisa"/>
                        <select onChange={(e) => setTipoAli(e.target.value)} id="esc" name="esc" className="pesquisaS">
                            <option value="proteinas">Proteinas</option>
                            <option value="calorias">Calorias</option>
                            <option value="carboidratos">Carboidratos</option>
                        </select>
                        <select onChange={(e) => setTipo(e.target.value)} id="esc" name="esc" className="pesquisaS">
                            <option value="carne">Carne</option>
                            <option value="fruta">Fruta</option>
                            <option value="lanche">Lanche</option>
                            <option value="acomp">Acomp</option>
                        </select>
                    </div>
                    <div className="slider">   
                        <div id="slid" className="slider-slid">
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
                                    return(
                                         <div key={valores.id} className="cardTrocas" data-index={index}>
                                            <div className="name">
                                                <h3>{valores.nome}</h3>
                                                <p>(100g)</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    
                </div>
                <div className="todasTrocas">
                <h2>Substituiçoes:</h2>
                    <div className="results">
                        {
                            pesquisa
                            ?
                            results.map((valores) =>{
                                if(valores.tipo === tipo && valores.nome !== nome){
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
                                if(index < 9){
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
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}