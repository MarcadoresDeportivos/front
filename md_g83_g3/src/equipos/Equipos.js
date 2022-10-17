import React, { useState, useEffect, useRef } from 'react'
export function EquipoListar(){
    const [ equipos, setEquipos] = useState()
    const [ loader, setloader] = useState(false)
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }


    useEffect(()=>{
        fetch('http://localhost:3000/api/equipo', requestOptions)
        .then(respuesta => respuesta.json())
        .then((equipos) =>  setEquipos(equipos))
        .catch(err => console.error(err))
        .finally(()=> setloader(true))
    },[])
   
    //return <div>{ loader ? console.log(categorias): <p>cargando...</p>} </div>
    return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-4">
                    {console.log(equipos)}

                    <table className="table table-striped table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                            <th scope="col">#</th>    
                            <th scope="col">Equipo</th>
                            <th scope="col">Categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loader && equipos.map((item, i=0)=><tr>
                                <td>{i + 1 }</td>
                                <td> {item.nombre}</td>   
                                <td> {item.categoria}</td>   
                                </tr>)}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div> 
}

export function EquipoCrear(){
    const inputNombre = useRef('')
    const [categoria, setCategoria] = useState()
    
    //Consultar categorias
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
    
    //Function para obtener el valor de la categoria
    const seleccionar = (e) =>{
        setCategoria(e.target.value)
        console.log(e.target.value)
    }
    //Enviar equipo a  la base de datos
    const handleSubmit = (e) => {
        console.log("guardando equipo: valor de la categoría" + categoria)
        e.preventDefault();
        console.log('Se esta guardado el equipo y su categoría')
            const requestOptions = {
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({ nombre : inputNombre.current.value, categoria : categoria})
    
        }
        fetch('http://localhost:3000/api/equipo', requestOptions)
            .then(respuesta => respuesta.json())
            .then(datos => console.log(datos))
            .catch(err => console.error(err))
    }

     return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputNombre">Equipo</label>
                                <input type="text" className="form-control" id="exampleInputNombre" placeholder="Ingresa tu equipo" ref={inputNombre}/>
                            </div>  
                            <div className="form-group">
                            <select className="form-select" aria-label="Default select example" onChange={seleccionar}>
                                <option defaultValue>Selecciona la categoría</option>

                                {loader && categorias.map((item)=><option value={item.nombre}>{item.nombre}</option>)}
                            </select>
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

export function EquipoEditar(){
    const [equipoId, setEquipoId] = useState(null);
    const [equipoNombre, setEquipoNombre] = useState('Caballeros');

    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: '634a9f60c4aaf04805cb78b1', nombre: 'Caballeros' })
        };
        fetch('http://localhost:3000/api/equipo', requestOptions)
            .then(response => response.json())
            .then(data => {
                setEquipoId('634a9f60c4aaf04805cb78b1')
                setEquipoNombre('Caballeros'); 
            });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">Se ha realizado la actualización para el equipo </h5>
            <div className="card-body">
                <p><span style={{"font-weight": "bold"}}>Categoría Id:</span> {equipoId}</p>
                <p><span style={{"font-weight": "bold"}}>Nombre del equipo </span>{equipoNombre}</p>
            </div>
        </div>
    );
}