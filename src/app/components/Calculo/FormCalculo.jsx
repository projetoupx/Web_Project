import React, { useState, useContext} from "react"
import "../Calculo/FormCalculo.css"

import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { AuthContext } from '../../context/auth';


export default function FormCalculo() {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [tipo, setTipo] = useState('ND');
    const { usuario } = useContext(AuthContext);


    function calcular(){
        const user = usuario;
        let numSexo = [];
        let casSexo =[];
        let numM
        
        if(sexo === "masculino"){
            numSexo = [88.36, 13.4, 4.8, 5.7];
            casSexo = [0.063, 2.896, 239];
            if(tipo === "ND"){
                numM=1.5;
            }else if(tipo === "AM"){
                numM=1.8;
            }else if(tipo === "AI"){
                numM =2.1;
            }

        }
        else if(sexo === "feminino"){
            numSexo = [447.593, 9.247, 3.098, 4.33];
            casSexo = [0.062,  2.036, 239];
            if(tipo === "ND"){
                numM=1.6;
            }else if(tipo === "AM"){
                numM=1.6;
            }else if(tipo === "AI"){
                numM =1.8;
            }
        }
        let resultCalo = numSexo[0]+(numSexo[1]*peso)+(numSexo[2]*altura)-(numSexo[3]*idade);

        let castoCalo = ((casSexo[0] * peso + casSexo[1])*casSexo[2])*numM

        const docData = {
            nome:nome,
            resultado:resultCalo.toFixed(2),
            castCalo:castoCalo.toFixed(2),
        };
        updateDoc(doc(db, "users", user), docData);
    }

    return (

        <form className="formCalculo">
            <div className="form-text">
                <h2>Vamos cadastrar suas informaçoes!!!</h2>
            </div>
            <div className="form-conteudos">
                <div className='form-item form-div'>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className='form-input form-email' id='form-email' placeholder='Ex: Guilherme' />
                    <label htmlFor="form-nome">Nome:</label>
                </div>
                <div className='form-item form-div'>
                    <div className="infoText">
                        <input onChange={(e) => setPeso(e.target.value)} type="text"  className='form-input form-peso' id='form-peso' placeholder='Ex: 70.6' num=''/>
                        <p>kg</p>
                    </div>
                    <label htmlFor="form-peso">Peso:</label>
                </div>
                <div className='form-item form-div'>
                    <div className="infoText">
                        <input onChange={(e) => setAltura(e.target.value)} type="text"  className='form-input form-altura' id='form-altura' placeholder='EX: 170' num=''/>
                        <p>cm</p>
                    </div>
                    <label htmlFor="form-altura">Altura:</label>
                </div>
                <div className='form-item form-div'>
                    <div className="infoText">
                        <input onChange={(e) => setIdade(e.target.value)} type="text" className='form-input form-idade' id='form-idade' placeholder='EX: 20' num=''/>
                        <p>anos</p>
                    </div>
                    <label htmlFor="form-idade">Idade:</label>
                </div>
                <div className='form-item form-div'>
                    <select onChange={(e) => setSexo(e.target.value)} id="sexo" name="sexo">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <label htmlFor="form-idade">Sexo:</label>
                </div>
                <div className='form-item form-div'>
                    <select onChange={(e) => setTipo(e.target.value)} id="exer" name="exer">
                        <option value="ND">Nenhuma atividade física</option>
                        <option value="AM">Atividade física moderada</option>
                        <option value="AI">Atividade física intensa</option>
                    </select>
                    <label htmlFor="form-idade">Exercicio Físico Semanal:</label>
                </div>
                <div className='form-item form-div'>
                    <button onClick={calcular} className='form-item form-button' type='button' >Calcular</button>
                </div>
            </div>
        </form>

    )
}