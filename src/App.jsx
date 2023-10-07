import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import Cadastro from './app/cadastro/cadastro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Site />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;