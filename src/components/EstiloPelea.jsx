import { useState } from 'react';
import axios from 'axios';
import './RegistroSamurai.css';



export const EstiloPelea = () => {

    const [formData, setFormData] = useState({
        nombre_estilo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/estilo', formData);
            console.log('Registro creado:', response.data);
            // Puedes añadir código para mostrar un mensaje de éxito o redirigir a otra página.
        } catch (error) {
            console.error('Error al crear el registro:', error);
            // Puedes añadir código para mostrar un mensaje de error al usuario.
        }
    };







    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h1>Crea tu estilo de pelea</h1>
            <label>
                Nombre del estilo de pelea:
                <input type="text" name="nombre" value={formData.nombre_estilo} onChange={handleChange} />
            </label>

            <button type="submit">Crear Estilo de pelea</button>
        </form>
    );
}

export default EstiloPelea;