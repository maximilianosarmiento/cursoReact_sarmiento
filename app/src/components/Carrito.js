import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import {NavLink} from 'react-router-dom'
const Carrito = () => {

  const { carrito, borrarDelCarrito, cantidad, calcularTotalItems } = useContext(contexto)
  console.log(carrito)

  return (
    <>
      <h2>Carrito</h2>
      {carrito.length === 0 ? <p>No hay productos en el carrito. <NavLink to="/">Por favor volve al store</NavLink> y seleccionar tus productos </p> : <p>Cantidad de productos en carrito: {calcularTotalItems()}.</p>
      }{
        carrito.map(elemento => (
          <div key={elemento.producto.id}>
            <img src={elemento.producto.img} alt="" />
            <p>{elemento.producto.nombre}</p>
            <p>{elemento.producto.precio}</p>
            <p>Cantidad seleccionada: {cantidad}</p>
            <p>Precio total: {elemento.producto.precio *cantidad}</p>
            <button onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</button>
          </div>
        ))
      }
    

    </>
  )
}

export default Carrito
