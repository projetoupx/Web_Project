import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../app/context/auth';

export default function NavBar() {
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
                    <Link className='header-button' to="#">sua dieta</Link>
                    <Link className='header-button' to="#">suas trocas</Link>
                    <Link onClick={sair} className='header-button' to="../">sair</Link>
                </div>
            </nav>
        </header>
    );
}