import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "./CartContext";


const NavBar = () => {

    const {carrito} = useContext(contexto);
    
    return (
        <>
            <Navbar id ="navContainer">
<<<<<<< HEAD
                    <Link to="/" id="marca">Reacstore</Link>
=======
                    <Link to="/" id="marca">Guiño Commerce</Link>
>>>>>>> a1da4001b50c0832e505b4b77a3ed0218f3d9970
                    <Nav className="NavBar">
                        <Link  to="/">Home</Link>
                        <Link  to="/categoria/Comestibles">Comestibles</Link>
                        <Link  to="/categoria/Bebidas">Bebidas</Link>
                        {carrito.length > 0 && <CartWidget/>}
                    </Nav>
                    
            </Navbar>
        </>
    )
}

export default NavBar;