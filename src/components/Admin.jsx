import React from 'react'
import {Link, Outlet} from "react-router-dom"

function Admin() {
  return (
    <div className='routerAdmin'>
        <h4><Link to="/agregarPeli">Agregar Pelicula</Link></h4>
        <h4><Link to="/borrarPeli">Borrar Pelicula</Link></h4>
        <h4><Link to="/buscarPeli">Modificar Pelicula</Link></h4>
        <Outlet></Outlet>
    </div>

   
  )
}

export default Admin