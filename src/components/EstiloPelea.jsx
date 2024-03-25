import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const EstiloPelea = () => {
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
            // Limpiar el campo de texto después de enviar el formulario
            setFormData({ ...formData, nombre_estilo: '' });
            // Puedes añadir código para mostrar un mensaje de éxito o redirigir a otra página.
        } catch (error) {
            console.error('Error al crear el registro:', error);
            // Puedes añadir código para mostrar un mensaje de error al usuario.
        }
    };

    return (
        <div className="container">
            <form className="formulario" onSubmit={handleSubmit}>
                <h1>Crea tu estilo de pelea</h1>
                <label>
                    Nombre del estilo:
                    <input type="text" className="form-control" name="nombre_estilo" value={formData.nombre_estilo} onChange={handleChange} />
                </label>

                <button type="submit" className="btn btn-primary">Crear Estilo</button>
            </form>
            {/* Agrega el botón "Registros de Peleas" con un enlace a la ruta correspondiente */}
            <Link to="/registrosestilopelea" className="btn btn-secondary mt-3">Registros de Peleas</Link>
        </div>
    );
};

export default EstiloPelea;


