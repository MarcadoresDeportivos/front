import {Link,useNavigate} from 'react-router-dom'
import {useRef} from 'react'
import {url} from '../elements/Const'
import swal from 'sweetalert'

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

       fetch(url+'/usuario/',requestOptions)
        .then(response=>response.json())
        .then(data=>{
                console.log(data)
                if(data.token){
                    localStorage.setItem('token',data.token)
                    Navigate("/tablero");
                }
                swal({
                    //La alerta bonita
                    title: "Registro Exitoso",
                    text: "Usuario Registrado",
                    icon: 'success'
                })
            }
            )
        .catch(error=> {console.log("error accesar"+error)
                    swal({
                        title: "Registro Fallido",
                        text: error,
                        icon :'error'
                    })})
    }

    const handleSubmit = (ev)=>{
        ev.preventDefault()
        console.log("sb")
        
        //Validaciones
        if (refCorreo.current.value=="" || refContrasena.current.value==""){
            swal({
                title: "Validando Datos",
                text: "Digite todos los campos",
                icon: 'warning'
            })
        }else{
            registrar()
        }        
        
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