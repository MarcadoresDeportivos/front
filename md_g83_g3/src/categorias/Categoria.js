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
    const [categoriaId, setCategoriaId] = useState(null);
    const [categoriaNombre, setCategoriaNombre] = useState(null);

    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: '634a07a5c3d19c8b6d499783', nombre: 'Futbol de salón' })
        };
        fetch('http://localhost:3000/api/categoria/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setCategoriaId('634a07a5c3d19c8b6d499783')
                setCategoriaNombre('Fútbol de salón'); 
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


