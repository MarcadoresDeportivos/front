import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
export function CategoriaCreate(){

    const handleSubmit = (ev)=>{
        ev.preventDefault()
        
        const dep = String('Baloncesto')
        console.log(JSON.stringify({"nombre": dep}))
        const requestOptions = {
            method:"POST",
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Authorization, X-API-KEY,Origin, X-Requested-with, Content-type,Accept, Access-Control-Allow-Request-Method',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify({nombre: dep}),
        }
        fetch('http://localhost:3002/api/categoria/',requestOptions).
        then(response=>response.json()).
        then(data=>console.log(data)).
        catch(error=>console.log("error: "+error+""))
    }
    return <div className="container-fluid">
         <div className="row">
            <div className="col-md-4 offset-4">
                <form role="form" onSubmit ={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Categoria Nombre
                        </label>
                        <input type="text" className="form-control" placeholder="Categoría" onChange={function(){console.log("ds")}}/>
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