import React, { useState } from "react"
import "../Calculo/FormCalculo.css"
export default function FormCalculo() {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    return (
        <section className="main">
            <div className="">
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
                        <option value="Homem">Homem</option>
                        <option value="Mulher">Mulher</option>
                        <option value="none">none</option>
                        <option value="fiat Unp">Fiat Uno</option>
                    </select>
                </div>
                <button onClick="" className='form-item form-button' type='button' >Cadastrar!</button>
            </div>
        </section>
    )
}