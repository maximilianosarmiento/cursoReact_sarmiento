import { useContext } from "react";
import { cartContext } from "./CartContext";


function Carrito() {

    const { carrito, borrarDelCarrito } = useContext(cartContext);



    return (
        <>
            <h2>Carrito</h2>
            <p>Productos en carrito: {carrito.length}</p>
            {carrito.map(item =>(
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p> precio ${item.precio} x {item.cantidad}</p>
                    <p>Total: ${item.precio * item.cantidad}</p>
                    <button onClick={()=>{borrarDelCarrito(item.id)}}>Eliminar</button>
                </div>
            )
            )
            }
        </>
    )
}

export default Carrito; 