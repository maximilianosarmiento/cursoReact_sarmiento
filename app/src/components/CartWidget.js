import { Link } from "react-router-dom";
const CartWidget =() =>{
    return(
        <div className="contenedorCarrito">
            <Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
    );
}

export default CartWidget;