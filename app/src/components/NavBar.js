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
                    <Link to="/" id="marca">Reacstore</Link>
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