import React, { useContext, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Site from './site/site.jsx';
import Login from './app/pages/login/login.jsx';
import Cadastro from './app/pages/cadastro/cadastro.jsx';
import NovaSenha from './app/pages/resetSenha/novaSenha.jsx';
import Home from './app/pages/home/home.jsx';
import { AuthContext } from './app/context/auth.jsx';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const { logado } = useContext(AuthContext);
  const user = logado;
  
  useEffect(()=>{

    const myObserver = new IntersectionObserver( (entries) =>{
        entries.forEach( (entry) =>{
            entry.target.classList.toggle('animate', entry.isIntersecting)
        }) 
    },
    {
        threshold:.5,
    })

    const elements = document.querySelectorAll('[data-anime]')
    elements.forEach((element) => myObserver.observe(element))
    
})
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Site />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/novasenha' element={<NovaSenha />} />
          <Route exact path='/home' element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;