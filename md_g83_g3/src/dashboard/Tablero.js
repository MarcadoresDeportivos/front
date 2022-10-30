import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { React } from "react";
import { CategoriaCreate } from "../categories/CategoriaCreate";
import { CategoriaList } from "../categories/CategoriaList";
import { CategoriaEdit } from "../categories/CategoriaEdit";
import { EquipoImagen } from "../teams/EquipoImagen";

export function Tablero() {
  return <div className="row">
      <div className="col-3">
        Menu
        <ul>
          <li>
            <Link to="/tablero/categoriaList">Categorias</Link>
          </li>
          <li>
            <Link to="/categoriaCreate">Equipos</Link>
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
