import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const handleBorrarRegistro = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/sexo/${id}`);
      setRegistros(registros.filter(registro => registro.id !== id));
    } catch (error) {
      console.error('Error al borrar el registro:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registros de Sexo</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sexo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(registro => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.sexo}</td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => handleBorrarRegistro(registro.id)}>Borrar Registro</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botones de navegación */}
      <div className="d-flex justify-content-between">
        <Link to="/">
          <button className="btn btn-secondary">Atrás</button>
        </Link>
        <Link to="/bando">
          <button className="btn btn-primary">Elegir Bando</button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrosCreados;




