import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { db } from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Carrito = () => {

  const { carrito, borrarDelCarrito, cantidad, calcularTotalItems, calcularPrecioTotal, precioTotal, totalItems  } = useContext(contexto)
  console.log(carrito)
  console.log(totalItems)
  console.log(precioTotal)

  
  const btnConfirmarCompra = () => {

      const pedidoVenta = {
        buyer: {
          nombre: 'Maxi Sarmiento',
          telefono: '123456789',
          email: "MaxiSarmiento@cursoReact.com"
        },
        items: totalItems,
        date: serverTimestamp(),
        total: precioTotal,
      } 
      const ventasCollection = collection(db, "ventas");
      const pedido = addDoc(ventasCollection, pedidoVenta )
      console.log(pedido);
    }
  

  return (
    <>
    {calcularPrecioTotal()} {calcularTotalItems()}
      <div className='carritoTextContainer'>
        <h2>Carrito</h2>
        {carrito.length === 0 ? <p>No hay productos en el carrito. <NavLink to="/">Por favor volve al store</NavLink> y selecciona tus productos </p> : <p>Cantidad de productos en carrito:{totalItems} .  Precio Total: ${precioTotal}</p>
        }</div>
      {
        carrito.map(elemento => (

          <div key={elemento.producto.id} id="cards">
            <img src={elemento.producto.img} alt="" />
            <p>{elemento.producto.nombre}</p>
            <p>{elemento.producto.precio}</p>
            <p>Cantidad seleccionada: {elemento.cantidad}</p>
            <p>Precio total: {elemento.producto.precio * elemento.cantidad}</p>
            <Button className="btnDetalle" onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</Button>
          </div>
        )
        )}
      {carrito.length > 0 && <Button className="btn" onClick={()=>{btnConfirmarCompra()}}>Finalizar Compra</Button>} 
    </>
  )
}

export default Carrito
