import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from '../src/App';
import Header,{Menu} from './elements/Header';
//import {Evento} from './Evento';
//import {Equipo} from './Equipo';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css'
import { ListaEventos } from './events/ListaEventos';

import {Tablero} from './dashboard/Tablero'
import { Login } from './users/Login';
import { Registro } from './users/Registro';
import { CategoriaCreate } from './categories/CategoriaCreate';

import { CategoriaList} from "./categories/CategoriaList";
import { CategoriaListar, CategoriaCrear, CategoriaEditar } from './categories/Categoria';
import { EquipoListar, EquipoCrear, EquipoEditar } from './equipos/Equipos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  {/* //<React.StrictMode> */}        
    <Menu/>    <div className='container'>
      <div className='row align-center'>
        <div className='col m-5'>
        <Routes>
          <Route path="/"  element={<ListaEventos/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          <Route path="/register"  element={<Registro/>}></Route>
          <Route path="/tablero/*"  element={<Tablero/>}></Route>
          <Route path="/categoriaCreate"  element={<CategoriaCreate/>}></Route>
          <Route path="/tablero/categorialist"  element={<CategoriaList/>}></Route>

          <Route path='/categorias' element={ < CategoriaListar/>}></Route>
          <Route path='/categoria/crear' element={ < CategoriaCrear/>}></Route>
          <Route path='/categoria/editar' element={ < CategoriaEditar/>}></Route>
          <Route path='/equipos' element={ < EquipoListar/>}></Route>
          <Route path='/equipo/crear' element={ < EquipoCrear/>}></Route>
          <Route path='/equipo/editar' element={ < EquipoEditar/>}></Route>
        </Routes>
          {/* <ListaEventos/> */}
        </div>

      </div>

    </div>       
  {/* //</React.StrictMode> */}
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
