import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistroSamurai } from './components/RegistroSamurai';
import  Bando  from './components/Bando';
import EstiloPelea  from './components/EstiloPelea';
import  Sexo  from './components/Sexo';
import RegistrosCreados from './components/RegistrosCreados';
import BandosRegistrados from './components/BandosRegistrados';
import RegistrosEstiloPelea from './components/RegistrosEstiloPelea';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Sexo />} />
      <Route path="/registros-creados" element={<RegistrosCreados />} />
      <Route path="/bando" element={<Bando />} />
      <Route path="/bandos-registrados" element={<BandosRegistrados />} />
      <Route path="/registro-samurai" element={<RegistroSamurai />} />
      <Route path="/estilo-pelea" element={<EstiloPelea />} />
      <Route path="/registrosestilopelea" element={<RegistrosEstiloPelea />} />
      
      
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
