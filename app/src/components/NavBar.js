import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "./CartContext";


const NavBar = () => {

    const {carrito} = useContext(contexto);
    console.log(carrito)
    
    return (
        <>
            <Navbar id ="navContainer">
                    <Link to="/" id="marca">Nombre a definir</Link>
                    <Nav className="NavBar">
                        <Link  to="/">Home</Link>
                        <Link  to="/categoria/Tecnologia">Tecnología</Link>
                        <Link  to="/categoria/Moda">Moda</Link>
                        {carrito.length > 0 && <CartWidget/>}
                    </Nav>
                    
            </Navbar>
        </>
    )
}

export default NavBar;