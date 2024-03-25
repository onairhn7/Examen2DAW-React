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

  // Función para eliminar un registro por ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/estilo/${id}`);
      // Actualizar la lista de registros después de eliminar
      setRegistros(registros.filter(estilo => estilo.id !== id));
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registros de Estilos de Pelea</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Estilo</th>
            <th>Acciones</th> {/* Agrega una columna para las acciones */}
          </tr>
        </thead>
        <tbody>
          {registros.map(estilo => (
            <tr key={estilo.id}>
              <td>{estilo.id}</td>
              <td>{estilo.nombre_estilo}</td>
              <td>
                {/* Botón para eliminar el registro */}
                <button className="btn btn-danger" onClick={() => handleDelete(estilo.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botón de navegación */}
      <div className="d-flex justify-content-end">
        <Link to="/bando" className="btn btn-secondary mr-2">Atrás</Link>
        <Link to="/registro-samurai">
          <button className="btn btn-primary">Registrar Samurai</button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrosEstiloPelea;

