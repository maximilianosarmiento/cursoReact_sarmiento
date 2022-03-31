import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";
const CartWidget =() =>{
    const {calcularTotalItems} = useContext(contexto)
    return(
        <>
        {calcularTotalItems() > 0 && <div className="contenedorCarrito">
            <Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>}
        </>
        
    );
}

export default CartWidget;