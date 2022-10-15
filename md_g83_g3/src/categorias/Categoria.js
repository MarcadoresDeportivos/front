import React, { useState, useEffect, useRef } from 'react'
export function CategoriaListar(){
    const [ categorias, setCategorias] = useState()
    const [ loader, setloader] = useState(false)
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }


    useEffect(()=>{
        fetch('http://localhost:3000/api/categoria', requestOptions)
        .then(respuesta => respuesta.json())
        .then((categorias) =>  setCategorias(categorias))
        .catch(err => console.error(err))
        .finally(()=> setloader(true))
    },[])
   
    //return <div>{ loader ? console.log(categorias): <p>cargando...</p>} </div>
    return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-4">
                    {console.log(categorias)}
                    <h1>Categorías deportivas </h1>
                    
                    <ul>
                        {loader && categorias.map((item)=><li>{item.nombre}</li>)}
                    </ul>
                    </div>
                </div>
            </div> 
}

export function CategoriaCrear(){
    const inputCategoria = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se esta guardado la categoria')
            const requestOptions = {
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({ nombre : inputCategoria.current.value})
    
        }
        fetch('http://localhost:3000/api/categoria/', requestOptions)
            .then(respuesta => respuesta.json())
            .then(datos => console.log(datos))
            .catch(err => console.error(err))
    }

     return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Crear categoría deportiva</label>
                                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Ingresa tu categoría" ref={inputCategoria}/>
                            </div>  
                            <div className="form-group my-4">
                                <button type='submit' className="btn btn-primary" >
                                    Guardar
                                </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div> 
}

export function CategoriaEditar(){
    
}


