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
            <Link to="/tablero/categoriaList" class="btn btn-primary" role="button" aria-pressed="true">Categorias</Link>
          </li>
          <br></br>
          <li>        
            <Link to="/tablero/equipoList" class="btn btn-primary" role="button" aria-pressed="true">Equipos</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row align-center">
          <div className="col-9">
            <Routes>
              <Route path="/tablero/categoriaCreate" element={<CategoriaCreate />} ></Route>
              <Route path="/tablero/categoriaList" element={<CategoriaList />} ></Route>
              <Route path="/tablero/categoriaEdit/:id" element={<CategoriaEdit />} ></Route>
              
              <Route path='/tablero/equipoCreate' element={ < EquipoCreate/>}></Route>
              <Route path='/tablero/equipoList' element={ < EquipoList/>}></Route>                            
              <Route path='/tablero/equipoEdit/:id' element={ < EquipoEdit/>}></Route>

              <Route path="/tablero/equipoImagen/:id" element = {<EquipoImagen/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
}
