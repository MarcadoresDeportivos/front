import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header,{Menu} from './Header';
import {Evento} from './Evento';
import {Equipo} from './Equipo';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css'
import { ListaEventos } from './events/ListaEventos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    {/* <Header/>
    <Evento fecha="2022-09-28" rival1="Equipo1" rival2="Equipo2"/>
<Equipo nombre="Cali" jugados={12} promedio={3.4} ultimo="2022-09-15" record={[5,2]} internacional={true} ubicado={{pais: "Colombia", ciudad:"Cali"}}/>

    <App /> */}

    <div className='container'>
      <div className='row align-center'>
        <div className='col m-5'>
          <ListaEventos/>
        </div>

      </div>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
