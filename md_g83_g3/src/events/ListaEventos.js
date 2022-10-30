import {Evento} from '../Evento'
export function ListaEventos(){

    /* fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(data=>console.log(data))
     .catch(error=>{console.log('error: '+error)})*/

    return <div className='col-sm-6 offset-3'>
        <Evento fecha="2022-09-28" rival1="Equipo1" rival2="Equipo2"/>
    </div>
}