import { useState } from 'react';
import axios from 'axios';
import './RegistroSamurai.css';



export const RegistroSamurai = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        ataque: '',
        idBando: '',
        idEstiloPelea: '',
        idSexo: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/samurai', formData);
          console.log('Registro creado:', response.data);  
          // Puedes añadir código para mostrar un mensaje de éxito o redirigir a otra página.
        } catch (error) {
          console.error('Error al crear el registro:', error);
          // Puedes añadir código para mostrar un mensaje de error al usuario.
        }
      };


    


 

      return (
        <form className="formulario" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </label>
          <label>
            Ataque:
            <input type="text" name="ataque" value={formData.ataque} onChange={handleChange} />
          </label>
          <label>
            ID Bando:
            <input type="text" name="idBando" value={formData.idBando} onChange={handleChange} />
          </label>
          <label>
            ID Estilo Pelea:
            <input type="text" name="idEstiloPelea" value={formData.idEstiloPelea} onChange={handleChange} />
          </label>
          <label>
            ID Sexo:
            <input type="text" name="idSexo" value={formData.idSexo} onChange={handleChange} />
          </label>
          <button type="submit">Crear</button>
        </form>
      );
}

export default RegistroSamurai;