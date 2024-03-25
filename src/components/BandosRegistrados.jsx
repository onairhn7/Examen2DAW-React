import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BandosRegistrados = () => {
  const [bandos, setBandos] = useState([]);

  useEffect(() => {
    const fetchBandos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/bando');
        setBandos(response.data);
      } catch (error) {
        console.error('Error al obtener los bandos:', error);
      }
    };

    fetchBandos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/bando/${id}`);
      setBandos(bandos.filter(bando => bando.id !== id));
      console.log('Registro eliminado');
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registros de Bandos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {bandos.map(bando => (
            <tr key={bando.id}>
              <td>{bando.id}</td>
              <td>{bando.nombre}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(bando.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botones de navegación */}
      <div className="d-flex justify-content-end">
        <Link to="/bando">
          <button className="btn btn-secondary">Atrás</button>
        </Link>
        <Link to="/estilo-pelea">
          <button className="btn btn-primary ml-2">Elegir Estilo de pelea</button>
        </Link>
      </div>
    </div>
  );
};

export default BandosRegistrados;

