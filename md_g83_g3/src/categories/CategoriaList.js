import React from 'react';

export function CategoriaList(){
    let res ;

    const requestOptions={
        method : "GET",
        header:{
            "Content-Type": "application/json"
        },

    }

    fetch("http://localhost:3000/api/categoria",requestOptions).
        then(response=>{response.json();res = response}).
        then(data=>{console.log("datacT : "+data)}).
    catch(error=>console.log("error categoría listar: "+error))

    return <>
        <table>
            <tr>
                <th>Categoria</th>
            </tr>
            {res}
        </table>
    </>
}