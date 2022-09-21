import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

//BrowserRouter precisa ficar por volta de todas rotas para que o roteamento funcione
//Route para definir cada uma das rotas
//Routes garante que apenas uma rota seja chamada por vez

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routesf() {
  return (
    <BrowserRouter>
      <Routes >
       <Route path='/' exact element={<Logon/>} />
       <Route path='/register' element={<Register/>} />

        <Route path='/profile' element={<Profile/>} />
        <Route path='/incidents/new' element={<NewIncident/>} />
      </Routes>
    </BrowserRouter>
  );
}