import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Site from './site/site.jsx';
import Login from './app/login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Site />} />
        <Route exact path='/app' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;