import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { React } from "react";
import { CategoriaCreate } from "../categories/CategoriaCreate";
import { CategoriaList } from "../categories/CategoriaList";
import { CategoriaEdit } from "../categories/CategoriaEdit";

import { EquipoCreate } from '../equipos/EquipoCreate';
import { EquipoList } from '../equipos/EquipoList';
import { EquipoEdit } from '../equipos/EquipoEdit';

import { EquipoImagen } from "../teams/EquipoImagen";

export function Tablero() {
  return <div className="row">
      <div className="col-3">
        
        <h1>Menú</h1>
        <ul>
          <li>
            {/*<Link to="/tablero/categoriaList">Categorias</Link>*/}
            <a href="/tablero/categoriaList" class="btn btn-primary" role="button" aria-pressed="true">Categorias</a>
          </li>
          <br></br>
          <li>        
            <a href="/tablero/equipoList" class="btn btn-primary" role="button" aria-pressed="true">Equipos</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row align-center">
          <div className="col-9">
            <Routes>
              <Route path="/categoriaCreate" element={<CategoriaCreate />} ></Route>
              <Route path="/categoriaList" element={<CategoriaList />} ></Route>
              <Route path="/categoriaEdit/:id" element={<CategoriaEdit />} ></Route>
              
              <Route path='/equipoCreate' element={ < EquipoCreate/>}></Route>
              <Route path='/equipoList' element={ < EquipoList/>}></Route>                            
              <Route path='/equipoEdit/:id' element={ < EquipoEdit/>}></Route>

              <Route path="/equipoImagen/:id" element = {<EquipoImagen/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
}
