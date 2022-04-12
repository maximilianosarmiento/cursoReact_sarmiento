import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { db } from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

const Carrito = () => {

  const { carrito, borrarDelCarrito, precioTotal, totalItems } = useContext(contexto)

  const btnConfirmarCompra = () => {
    toast.success("Compra realizada con éxito, Muchas gracias!")
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
    const pedido = addDoc(ventasCollection, pedidoVenta)
    
  }
  return (
    <>
      <div className='carritoTextContainer'>
        <h2>Carrito</h2>
        {carrito.length === 0 ? <p>No hay productos en el carrito. <NavLink to="/">Por favor volve al store</NavLink> y selecciona tus productos </p> : <p>Cantidad de productos en carrito:{totalItems} .  Precio Total: ${precioTotal}</p>
        }</div>
      {
        carrito.map((elemento) => {
          return( 
          <div key={elemento.producto.id} className='carritoItemContainer'>
            <div key={elemento.producto.id} id="cards">
              <img src={elemento.producto.img} alt="" />
              <div className="cardTxt">
                <p>{elemento.producto.nombre}</p>
                <p>{elemento.producto.precio}</p>
                <p>Cantidad seleccionada: {elemento.cantidad}</p>
                <p>Precio total: {elemento.producto.precio * elemento.cantidad}</p>
              </div>
              <Button className="btnDetalle" onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</Button>

            </div>
          </div>) 
        }
        )}
      {carrito.length > 0 && <Button className="btn" onClick={() => { btnConfirmarCompra()}}>Finalizar Compra</Button>}
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default Carrito
