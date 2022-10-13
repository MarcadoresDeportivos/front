import './style.css'
export function Equipo(props) {

    const etiqueta ={
        display:"block",
        border:"1px solid salmon",
        heigth:"340px",
        padding:"10px",
        width:"250px"

    }
  return (
    <div style={etiqueta}>
      <ul>
        <li>nombre : <p style={{color:'red'}}>{props.nombre}</p></li>
        <li>partidos jugados : {props.jugados}</li>
        <li>promedio: {props.promedio}</li>
        <li>último partido : {props.ultimo}</li>
        <li>
          record: {props.record[0]}/{props.record[1]}
        </li>
        <li>juega internacional : {props.internacional ? "Sí" : "No"}</li>
        <li>
          ubicado en : ({props.ubicado.pais} - {props.ubicado.ciudad})
        </li>
      </ul>
    </div>
  );
}
 