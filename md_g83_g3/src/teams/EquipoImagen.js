import {urlimg} from '../elements/Constimg'

export function EquipoImagen(){
    return <>
        <h2>Subir imagen</h2>
        <form>
            <img src={urlimg+"/4.jpg"}></img>
            <input type="file"></input>
        </form>
    </>
}