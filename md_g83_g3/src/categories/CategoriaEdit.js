import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert'
import {url} from '../elements/Const'

export function CategoriaEdit(){
    const refNombre = useRef(null)
    const [categoriaId, setCategoriaId] = useState(null);
    const [categoriaNombre, setCategoriaNombre] = useState(null);

    const {id} = useParams()
    console.log("id seleccionada:"+id)

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
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ _id: id, nombre: refNombre.current.value })
            };
            fetch(url+'/categoria/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setCategoriaId(id)
                    setCategoriaNombre(refNombre.current.value); 
                    swal({
                        //La alerta bonita
                        title: "Categoria Modificada",
                        text: "Cambio realizado con éxito a "+refNombre.current.value,
                        icon: 'success'
                    })
                })
                .catch(error=>{console.log("error: "+error)            
                swal({
                    title:"Error",
                    text :"Error en la plataforma",
                    icon :'error'
                })
            });
        }
    }

    return <div className="container-fluid">
    <div className="row">
       <div className="col-md-4 offset-4">
           <form role="form" onSubmit ={handleSubmit}>
               <div className="form-group">
                   <label for="exampleInputEmail1">
                       Nuevo nombre de categoria
                   </label>
                   <input type="text" className="form-control" placeholder="Editar nombre" onChange={function(){console.log("ds")}} ref={refNombre}/>
               </div>
               <div className="form-group my-4">
                   <button type="submit" className="btn btn-primary" >
                       Editar
                   </button>
               </div>
           </form>
       </div>
   </div>
</div>

}