import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Sexo = () => {
  const [formData, setFormData] = useState({
    sexo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/sexo', formData);
      console.log('Registro creado:', response.data);
      // Puedes añadir código para mostrar un mensaje de éxito o redirigir a otra página.
    } catch (error) {
      console.error('Error al crear el registro:', error);
      // Puedes añadir código para mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Crea el sexo de tu samurai</h1>
        <label>
          Escribe el Sexo:
          <input type="text" name="sexo" value={formData.sexo} onChange={handleChange} placeholder='Femenino o masculino'/>
        </label>
        <button type="submit">Crear Sexo</button>
      </form>
      {/* Agrega el botón de "Registros Creados" con un enlace a la ruta correspondiente */}
      <Link to="/registros-creados">
  <button className="registros-creados-btn">Registros Creados</button>
</Link>
    </div>
  );
};

export default Sexo;










