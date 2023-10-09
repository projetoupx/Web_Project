import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Site from './site/site.jsx';
import Login from './app/pages/login/login.jsx';
import Cadastro from './app/pages/cadastro/cadastro.jsx';
import NovaSenha from './app/pages/resetSenha/novaSenha.jsx';
import Home from './app/pages/home/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Site />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cadastro' element={<Cadastro />} />
        <Route exact path='/novasenha' element={<NovaSenha />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;