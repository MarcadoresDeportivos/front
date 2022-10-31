import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
//import React,{useRef} from 'react';
import React, { useState, useEffect, useRef } from 'react'
import {url} from '../elements/Const'
import swal from 'sweetalert'
export function EquipoCreate(){

    const refNombre = useRef(null)
    const [categoria, setCategoria] = useState()
    
    //Consultar categorias
    const [ categorias, setCategorias] = useState()
    const [ loader, setloader] = useState(false)
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
    useEffect(()=>{
        fetch('http://localhost:3000/api/categoria', requestOptions)
        .then(respuesta => respuesta.json())
        .then((categorias) =>  setCategorias(categorias))
        .catch(err => console.error(err))
        .finally(()=> setloader(true))
    },[])
    
    //Function para obtener el valor de la categoria
    const seleccionar = (e) =>{
        setCategoria(e.target.value)
        console.log(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        

        //Validaciones
        if (refNombre.current.value==""){
            swal({
                title: "Validando Datos",
                text: "Digita la equipo",
                icon: 'warning'
            })
        }else{
            console.log("LA CATE: "+JSON.stringify(categorias))
            //const dep = String('Baloncesto')
            //console.log(JSON.stringify({"nombre": dep}))
            const token = localStorage.getItem("token")
            const requestOptions = {
                method:"POST",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Headers': 'Authorization, X-API-KEY,Origin, X-Requested-with, Content-type,Accept, Access-Control-Allow-Request-Method',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                    'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
                    "Content-Type":"application/json; charset=utf-8",
                    'x-auth-token': token
                },
                //body:JSON.stringify({nombre: refNombre.current.value})
                body : JSON.stringify({ nombre : refNombre.current.value, categoria : categoria})
            }
            fetch(url+'/equipo/',requestOptions)
            .then(response=>response.json())
            .then(data=>{console.log("data: "+data)
                swal({
                    //La alerta bonita
                    title: "Equipo",
                    text: data.msj,
                    icon: 'success'
                })
            })
            .catch(error=>{console.log("error: "+error)            
                swal({
                    title:"Error",
                    text :"Error en la plataforma",
                    icon :'error'
                })
            })
        }
    }
    return <div className="container-fluid">
         <div className="row">
            <div className="col-md-4 offset-4">
                <form role="form" onSubmit ={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Ingresar el nombre del equipo
                        </label>
                        <input type="text" className="form-control" placeholder="Equipo" onChange={function(){console.log("ds")}} ref={refNombre}/>
                    </div>
                    <div>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={seleccionar}>
                        {loader && categorias.map((item)=><option value={item.nombre}>{item.nombre}</option>)}
                    </select>
                    </div>
                    <div className="form-group my-4">
                        <button type="submit" className="btn btn-primary" >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}