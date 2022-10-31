export function Evento(props){

    // return<>
    // <h3>Próximo evento: {props.fecha} : {props.rival1} vs {props.rival2}</h3>
    // </> 

    return <div>
    <div className="row align-items-center">
        <div className="col-3"><img src={"http://localhost:3000/images/Nacional.png"} className='img-thumbnail'/><h5 className="text-center">Nacional</h5></div>
        <div className="col"><h1 className="text-center">2</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">2</h1></div>
        <div className="col-3"><img src={"http://localhost:3000/images/Millonarios.png"} className='img-thumbnail'/><h5 className="text-center">Millonarios</h5></div>

        {/*<div className="col-3"><img src={process.env.PUBLIC_URL + '/images/01.png'} className='img-thumbnail'/><h5>Millonarios</h5></div>*/}        
    </div>

    <div className="row align-items-center">
        <div className="col-3"><img src={"http://localhost:3000/images/Colombia.png"} className='img-thumbnail'/><h5 className="text-center">Colombia</h5></div>
        <div className="col"><h1 className="text-center">0</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">1</h1></div>
        <div className="col-3"><img src={"http://localhost:3000/images/Espana.png"} className='img-thumbnail'/><h5 className="text-center">España</h5></div>
    </div>

    <div className="row align-items-center">
        <div className="col-3"><img src={"http://localhost:3000/images/Peru.png"} className='img-thumbnail'/><h5 className="text-center">Peru</h5></div>
        <div className="col"><h1 className="text-center">0</h1></div>
        <div className="col"><h3 className="text-center">vs</h3></div>
        <div className="col"><h1 className="text-center">4</h1></div>
        <div className="col-3"><img src={"http://localhost:3000/images/Canada.png"} className='img-thumbnail'/><h5 className="text-center">Canadá</h5></div>
    </div>
    
    </div>

    

}