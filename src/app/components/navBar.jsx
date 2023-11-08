import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../app/context/auth';

export default function NavBar({setType}) {
    const {setLogado, setUsuario} = useContext(AuthContext);
    
    function sair(){
        localStorage.setItem("logado", false);
        localStorage.setItem("user", "");
        setUsuario("");
        setLogado(false);
    }

    return (
        <header>
            <nav>
                <Link className='header-button' to="../home" id="logo">NutriView</Link>
                <div className= "button-a">
                    <button className='header-button' onClick={() => setType("dieta")}>sua dieta</button>
                    <button className='header-button' onClick={() => setType("mont")}>suas trocas</button>
                    <Link onClick={sair} className='header-button' to="../">sair</Link>
                </div>
            </nav>
        </header>
    );
}