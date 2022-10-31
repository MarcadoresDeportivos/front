import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { React } from "react";
import { CategoriaCreate } from "../categories/CategoriaCreate";
import { CategoriaList } from "../categories/CategoriaList";
import { CategoriaEdit } from "../categories/CategoriaEdit";
import { EquipoImagen } from "../teams/EquipoImagen";
import { EquipoListar, EquipoCrear, EquipoEditar } from '../equipos/Equipos';

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
            <a href="/equipos" class="btn btn-primary" role="button" aria-pressed="true">Equipos</a>
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
              <Route path="/equipoImagen/:id" element = {<EquipoImagen/>}></Route>
              <Route path='/equipos' element={ < EquipoListar/>}></Route>
              <Route path='/equipo/crear' element={ < EquipoCrear/>}></Route>
              <Route path='/equipo/editar' element={ < EquipoEditar/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  {
    /* // <div className="row">
    //     <div className="col-3">
    //         Menu
    //     </div>
    //     <div className="col-9">
    //         Datos
    //     </div>
    // </div>
     */
  }
}
