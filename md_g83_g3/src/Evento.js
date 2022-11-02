import {urlimg} from './elements/Constimg'

export function Evento(props){

    return <div>
    <div className="row align-items-center">
        <div className="col-3"><img src={urlimg+"/Nacional.png"} className='img-thumbnail'/><h5 className="text-center">Nacional</h5></div>
        {/*<div className="col-3"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Escudo_de_Atl%C3%A9tico_Nacional.png/418px-Escudo_de_Atl%C3%A9tico_Nacional.png"} className='img-thumbnail'/><h5 className="text-center">Nacional</h5></div>*/}
        <div className="col"><h1 className="text-center">2</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">2</h1></div>
        <div className="col-3"><img src={urlimg+"/Millonarios.png"} className='img-thumbnail'/><h5 className="text-center">Millonarios</h5></div>
        {/*<div className="col-3"><img src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Escudo_de_Millonarios_temporada_1997-1999.png"} className='img-thumbnail'/><h5 className="text-center">Millonarios</h5></div>*/}
    </div>

    <div className="row align-items-center">
    <div className="col-3"><img src={urlimg+"/Colombia.png"} className='img-thumbnail'/><h5 className="text-center">Colombia</h5></div>
        {/*<div className="col-3"><img src={"https://seeklogo.com/images/S/seleccion-colombia-logo-3937EB9528-seeklogo.com.png"} className='img-thumbnail'/><h5 className="text-center">Colombia</h5></div>*/}
        <div className="col"><h1 className="text-center">1</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">0</h1></div>
        <div className="col-3"><img src={urlimg+"/Espana.png"} className='img-thumbnail'/><h5 className="text-center">España</h5></div>
        {/*<div className="col-3"><img src={"https://seeklogo.com/images/S/seleccion-espanola-de-futbol-corregido-logo-DCEE2ABDB7-seeklogo.com.png"} className='img-thumbnail'/><h5 className="text-center">España</h5></div>*/}
    </div>

    <div className="row align-items-center">
        <div className="col-3"><img src={urlimg+"/Peru.png"} className='img-thumbnail'/><h5 className="text-center">Peru</h5></div>
        {/*<div className="col-3"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/FPF.svg/1200px-FPF.svg.png"} className='img-thumbnail'/><h5 className="text-center">Peru</h5></div>*/}
        <div className="col"><h1 className="text-center">0</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">4</h1></div>
        <div className="col-3"><img src={urlimg+"/Canada.png"} className='img-thumbnail'/><h5 className="text-center">Canadá</h5></div>
        {/*<div className="col-3"><img src={"https://i.pinimg.com/originals/a3/f6/b6/a3f6b6bb3e3ef3405d723be9b3572d90.png"} className='img-thumbnail'/><h5 className="text-center">Canadá</h5></div>*/}
    </div>
    
</div>

}