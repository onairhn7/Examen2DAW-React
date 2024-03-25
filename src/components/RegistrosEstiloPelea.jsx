import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrosEstiloPelea = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/estilo');
        setRegistros(response.data);
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };

    fetchRegistros();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Registros de Estilos de Pelea</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Estilo</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(estilo => (
            <tr key={estilo.id}>
              <td>{estilo.id}</td>
              <td>{estilo.nombre_estilo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botón de navegación */}
      <div className="d-flex justify-content-end">
        <Link to="/estilo">
          <button className="btn btn-secondary">Atrás</button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrosEstiloPelea;
