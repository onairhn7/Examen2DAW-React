import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bando = () => {
  const [formData, setFormData] = useState({
    nombre: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/bando', formData);
      console.log('Registro creado:', response.data);
      // Reiniciar el estado del formulario después de enviarlo
      setFormData({ nombre: '' });
      // Puedes añadir código para mostrar un mensaje de éxito o redirigir a otra página.
    } catch (error) {
      console.error('Error al crear el registro:', error);
      // Puedes añadir código para mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Crea tu bando</h1>
        <label>
          Nombre del bando:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>

        <button type="submit">Crear Bando</button>
      </form>
      
      <Link to="/bandos-registrados">
        <button className="btn btn-primary mt-3">Mostrar Registros de bando</button>
      </Link>
    </div>
  );
};

export default Bando;
