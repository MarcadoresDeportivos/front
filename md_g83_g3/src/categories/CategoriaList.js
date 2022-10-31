import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {url} from '../elements/Const'

export function CategoriaList(){
   const [categorias,setCategorias] = useState([])
   const [token,setToken] = useState([])

    // const requestOptions={
    //     method : "GET",
    //     header:{
    //         "Content-Type": "application/json"
    //     },

    // }
    
    useEffect(()=>{
        //const tokenR = localStorage.getItem("token")
        //setToken(tokenR)
        const token = localStorage.getItem("token")
        //console.log("THE: "+token)
        const requestOptions = {
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Authorization, X-API-KEY,Origin, X-Requested-with, Content-type,Accept, Access-Control-Allow-Request-Method',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
                "Content-Type":"application/json; charset=utf-8",
                'x-auth-token': token
            },
            // body:JSON.stringify({nombre: refNombre.current.value}),
        }

        fetch(url+'/categoria/',requestOptions)
            .then(response=>response.json())
            .then(data=>{setCategorias(data)})
            .catch(error=>console.log("error: "+error+""))
    },[])
    // const requestOptions = {
    //     method:"GET",
    //     headers:{
            
    //         "Content-Type":"application/json"
    //     },
    //     // body:JSON.stringify({nombre: refNombre.current.value}),
    // }
    // fetch('http://localhost:3000/api/categoria/',requestOptions).
    // then(response=>response.json()).
    // then(data=>{setCategorias(data)}).
    // catch(error=>console.log("error: "+error+""))

    // fetch("http://localhost:3000/api/categoria/",requestOptions).
    //     then(response=>{response.json();res = response[0]}).
    //     then(data=>{console.log("datacT : "+data)}).
    // catch(error=>console.log("error categoría listar: "+error))

    return <div>
        <div className="text-center">
            <Link to="/tablero/categoriaCreate" className="btn btn-success">Crear Nueva Categoria</Link>
        </div>
        <table className='table'>
            <thead>
            <tr>
                <th>Categoria</th>
            </tr>
            </thead>            
            <tbody>
                {
                    categorias.map(dato=>(
                        <tr key = {dato.id}>
                            <td>{dato.nombre}</td>
                            <td>{dato.response}</td>
                            <td><Link to={`/tablero/categoriaEdit/${dato._id}`} className="btn btn-warning">Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}