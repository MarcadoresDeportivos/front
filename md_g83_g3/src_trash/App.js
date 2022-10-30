import logo from './logo.svg';
import './App.css';

function Mensaje(){
  const evento = {
    nombre : "Partido",
    marcador : 2,
    marcador2 : 3
  }

  function msj(){
    return <h4>Hoy hay partido</h4>

  }

  function ganador(r1,r2){
    if(r1 ==r2)
    return <div><h2>Empate</h2></div>
    else
    if(r1>r2)
    return <div><h2>Rival 1 ganador</h2></div>
    else
    return <div><h2>Rival 2 ganador</h2></div>
  }

  return <div>
    <h1>Evento</h1>
    <h3>{evento.nombre}</h3>
    <h3>{evento.marcador} - {evento.marcador2}</h3>
    <div>{ganador(evento.marcador,evento.marcador2)}</div>
  </div>

}

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return Mensaje();
}

export default App;
