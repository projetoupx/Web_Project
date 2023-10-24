import React, { useState } from "react";

const AuthContext = React.createContext({});

function AuthProvider(props){
    let isLogado = localStorage.getItem("logado");
    let isUser = localStorage.getItem("user");
    const [logado, setLogado] = useState(!isLogado ? true : false);
    const [usuario, setUsuario] = useState(isUser ? isUser : "");
    return (
        <AuthContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};