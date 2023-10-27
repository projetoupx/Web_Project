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
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const { usuario } = useContext(AuthContext);

    

    function calcular(){
        const user = usuario;
        let numSexo = [];
        
        if(sexo === "masculino")
            numSexo = [88.36, 13.4, 4.8, 5.7];
        else if(sexo === "feminino")
            numSexo = [447.593, 9.247, 3.098, 4.33];
        
        let resultCalo = numSexo[0]+(numSexo[1]*peso)+(numSexo[2]*altura)-(numSexo[3]*idade);
        alert(resultCalo);

        const docData = {
            nome:nome,
            resultado:resultCalo,

        };
        updateDoc(doc(db, "users", user), docData);
    }

    return (

        <form className="formCalculo">
            <div className="form-text">
                <h2>Bora cadastrar suas informaçoes!</h2>
            </div>
            <div className="form-conteudos">
                <div className='form-item form-div'>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className='form-input form-email' id='form-email' placeholder='seu nome!!' />
                    <label htmlFor="form-nome">nome</label>
                </div>
                <div className='form-item form-div'>
                    <input onChange={(e) => setPeso(e.target.value)} type="number" min="0" className='form-input form-peso' id='form-peso' placeholder='seu peso!!' />
                    <label htmlFor="form-peso">peso</label>
                </div>
                <div className='form-item form-div'>
                    <input onChange={(e) => setAltura(e.target.value)} type="number" min="0" className='form-input form-altura' id='form-altura' placeholder='sua altura!!' />
                    <label htmlFor="form-altura">altura</label>
                </div>
                <div className='form-item form-div'>
                    <input onChange={(e) => setIdade(e.target.value)} type="number" range="" min="0" className='form-input form-idade' id='form-idade' placeholder='sua idade!!' />
                    <label htmlFor="form-idade">idade</label>
                </div>
                <div className='form-item form-div'>
                    <select onChange={(e) => setSexo(e.target.value)} id="sexo" name="sexo">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <label htmlFor="form-idade">sexo</label>
                </div>
                <div className='form-item form-div'>
                    <select onChange={(e) => setTipo(e.target.value)} id="sexo" name="sexo">
                        <option value="Homem">perder massa</option>
                        <option value="Mulher">ganhar massa</option>
                        <option value="none">se matar</option>
                        <option value="fiat Unp">Fiat Uno</option>
                    </select>
                    <label htmlFor="form-idade">objetivo</label>
                </div>
                <div className='form-item form-div'>
                    <button onClick={calcular} className='form-item form-button' type='button' >Calcular</button>
                </div>
            </div>
        </form>

    )
}