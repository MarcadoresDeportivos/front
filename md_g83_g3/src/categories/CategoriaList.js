import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export function CategoriaList(){
   const [categorias,setCategorias] = useState([])

    // const requestOptions={
    //     method : "GET",
    //     header:{
    //         "Content-Type": "application/json"
    //     },

    // }
    useEffect(()=>{
        const requestOptions = {
            method:"GET",
            headers:{
                
                "Content-Type":"application/json"
            },
            // body:JSON.stringify({nombre: refNombre.current.value}),
        }
        fetch('http://localhost:3000/api/categoria/',requestOptions).
        then(response=>response.json()).
        then(data=>{setCategorias(data)}).
        catch(error=>console.log("error: "+error+""))

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
                            <td><Link to={`/tablero/categoriaEdit/${dato._id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}