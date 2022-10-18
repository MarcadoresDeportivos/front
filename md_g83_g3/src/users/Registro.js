import {Link,useNavigate} from 'react-router-dom'
import {useRef} from 'react'
export function Registro(){
    const refCorreo = useRef(null)
    const refContrasena = useRef(null)
    const Navigate = useNavigate()

    const handleBoton = ()=>{
        console.log("pb")
    }

    function registrar(){
       const requestOptions = {
        method : "POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email : refCorreo.current.value, password: refContrasena.current.value})
       }

       fetch('http://localhost:3000/api/usuario/',requestOptions).
       then(response=>response.json()).
       then(data=>{
            console.log(data)
            if(data.token){
                localStorage.setItem('token',data.token)
                Navigate("/tablero");
            }
        }).
       catch(error=> console.log("error accesar"+error))
    }

    const handleSubmit = (ev)=>{
        ev.preventDefault()
        console.log("sb")
        registrar()
    }
    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 offset-4">
                <form role="form" onSubmit ={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Email address
                        </label>
                        <input type="email" ref={refCorreo} className="form-control" id="exampleInputEmail1" onChange={function(){console.log("ds")}}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">
                            Password
                        </label>
                        <input type="password" ref={refContrasena} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group my-4">
                        <button type="submit" className="btn btn-primary" onClick={handleBoton}>
                            Registrarse
                        </button>
                        {/* <Link to="/tablero">Tablero</Link> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
}