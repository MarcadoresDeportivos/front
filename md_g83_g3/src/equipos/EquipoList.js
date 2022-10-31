import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {url} from '../elements/Const'

export function EquipoList(){
    const [equipos,setEquipos] = useState([])
    const [token,setToken] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        const requestOptions = {
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Authorization, X-API-KEY,Origin, X-Requested-with, Content-type,Accept, Access-Control-Allow-Request-Method',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
                "Content-Type":"application/json; charset=utf-8",
                'x-auth-token': token
            }
        }

        fetch(url+'/equipo/',requestOptions)
            .then(response=>response.json())
            .then(data=>{setEquipos(data)})
            .catch(error=>console.log("error: "+error+""))
    },[])

    return <div>
        <div className="text-center">
            <Link to="/tablero/equipoCreate" className="btn btn-success">Crear Nuevo Equipo</Link>
        </div>
        <table className='table'>
            <thead>
            <tr>
                <th>Equipo</th>
                <th>Categoría</th>
            </tr>
            </thead>            
            <tbody>
                {
                    equipos.map(dato=>(
                        <tr key = {dato.id}>
                            <td>{dato.nombre}</td>                            
                            <td>{dato.categoria}</td>
                            <td><Link to={`/tablero/equipoEdit/${dato._id}`} className="btn btn-warning">Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}