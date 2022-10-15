import {Link} from 'react-router-dom'
export function Login(){

    const handleBoton = ()=>{
        console.log("pb")
    }

    const handleSubmit = (ev)=>{
        ev.preventDefault()
        console.log("sb")
    }
    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 offset-4">
                <form role="form" onSubmit ={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Email address
                        </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={function(){console.log("ds")}}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">
                            Password
                        </label>
                        <input type="email" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group my-4">
                        <button type="submit" className="btn btn-primary" onClick={handleBoton}>
                            Acceder
                        </button>
                        <Link to="/tablero">Tablero</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
}