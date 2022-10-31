import React,{useRef} from 'react';
import {url} from '../elements/Const'
import swal from 'sweetalert'

export function CategoriaCreate(){

    const refNombre = useRef(null)
    const handleSubmit = (ev)=>{
        ev.preventDefault()
        
        //Validaciones
        if (refNombre.current.value==""){
            swal({
                title: "Validando Datos",
                text: "Digita la categoria",
                icon: 'warning'
            })
        }else{
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
                body:JSON.stringify({nombre: refNombre.current.value})
            }
            fetch(url+'/categoria/',requestOptions)
            .then(response=>response.json())
            .then(data=>{console.log("data: "+data)
                swal({
                    //La alerta bonita
                    title: "Categoria",
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
                            Ingresar el nombre de la categoria
                        </label>
                        <input type="text" className="form-control" placeholder="Categoría" onChange={function(){console.log("ds")}} ref={refNombre}/>
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