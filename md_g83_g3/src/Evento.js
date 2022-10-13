export function Evento(props){

    // return<>
    // <h3>Próximo evento: {props.fecha} : {props.rival1} vs {props.rival2}</h3>
    // </> 

    return <div className="row">
        <div className="col-3">
            <img src={process.env.PUBLIC_URL + '/images/01.png'} className='img-thumbnail'/><h5>Equipo 1</h5>
        </div>
        <div className="col"><h1>4</h1></div>
        <div className="col"><h3>vs</h3></div>
        <div className="col"><h1>6</h1></div>
        <div className="col-3">
            <img src={process.env.PUBLIC_URL + '/images/01.png'} className='img-thumbnail'/><h5>Equipo 2</h5>
        </div>
    </div>
}