import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';

export function CategoriaEdit(){
    const [categoriaId, setCategoriaId] = useState(null);
    const [categoriaNombre, setCategoriaNombre] = useState(null);

    const {id} = useParams()
    console.log("id seleccionada:"+id)

    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: id, nombre: 'NUEVO NOMBRE' })
        };
        fetch('http://localhost:3000/api/categoria/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setCategoriaId(id)
                setCategoriaNombre('NUEVO NOMBRE'); 
            });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">Actualización de categoría deportiva </h5>
            <div className="card-body">
                <p><span style={{"font-weight": "bold"}}>Categoría Id:</span> {categoriaId}</p>
                <p><span style={{"font-weight": "bold"}}>Nombre de categoría </span>{categoriaNombre}</p>
            </div>
        </div>
    );
}