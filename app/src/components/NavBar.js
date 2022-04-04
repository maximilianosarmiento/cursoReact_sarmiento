import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";


const NavBar = () => {

    const {carrito} = useContext(contexto);
    console.log(carrito)
    
    return (
        <>
            <Link to='/' className="nombre"><h1>E-commerce</h1></Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/categoria/Tecnologia'>Tecnología</Link>
                <Link to='/categoria/Moda'>Moda</Link>
                {carrito.length > 0 && <CartWidget />}
            </nav>
        </>
    );
}

export default NavBar;