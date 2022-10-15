import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import { CategoriaCreate } from "../categories/CategoriaCreate";

export function Tablero(){
     
    return (
      <div className="row">
        <div className="col-3">
            Menu
            <ul>
                <li><Link to="/tablero/categoriaCreate">Categorias</Link></li>
                <li>Equipos</li>
            </ul>
          
        </div>
        <div className="col-9">
            <Routes>
                <Route path="/categoriaCreate" element={<CategoriaCreate/>}></Route>
            </Routes>

        </div>
      </div>
    );
    // <div className="row">
    //     <div className="col-3">
    //         Menu
    //     </div>
    //     <div className="col-9">
    //         Datos
    //     </div>
    // </div>
    

  
}