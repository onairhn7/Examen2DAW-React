import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SamuraisCreados = () => {
    const [samurais, setSamurais] = useState([]);

    useEffect(() => {
        const fetchSamurais = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/samurai');
                setSamurais(response.data);
            } catch (error) {
                console.error('Error al obtener los samuráis:', error);
            }
        };

        fetchSamurais();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Registros de Samuráis</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ataque</th>
                        <th>ID Bando</th>
                        <th>ID Estilo Pelea</th>
                        <th>ID Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {samurais.map(samurai => (
                        <tr key={samurai.id}>
                            <td>{samurai.id}</td>
                            <td>{samurai.nombre}</td>
                            <td>{samurai.ataque}</td>
                            <td>{samurai.idBando}</td>
                            <td>{samurai.idEstiloPelea}</td>
                            <td>{samurai.idSexo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Botón de navegación */}
            <div className="d-flex justify-content-end">
                <Link to="/registro-samurai" className="btn btn-secondary mr-2">Atrás</Link>
            </div>
        </div>
    );
};

export default SamuraisCreados;
