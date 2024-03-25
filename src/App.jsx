import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistroSamurai } from './components/RegistroSamurai';
import { Bando } from './components/Bando';
import { EstiloPelea } from './components/EstiloPelea';
import  Sexo  from './components/Sexo';
import RegistrosCreados from './components/RegistrosCreados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Sexo />} />
      <Route path="/registros-creados" element={<RegistrosCreados />} />
      <Route path="/bando" element={<Bando />} />
        <Route path="/registro-samurai" element={<RegistroSamurai />} />
        <Route path="/estilo-pelea" element={<EstiloPelea />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
