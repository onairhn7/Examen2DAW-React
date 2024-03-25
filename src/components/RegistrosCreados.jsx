import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrosCreados = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/sexo'); 
        setRegistros(response.data);
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };

    fetchRegistros();
  }, []);

  return (
    <div>
      <h2>Registros de Sexo</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sexo</th>
          
          </tr>
        </thead>
        <tbody>
          {registros.map(registro => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.sexo}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrosCreados;

