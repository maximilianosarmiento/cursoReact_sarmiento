import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" id ="navbar">
                <Container>
                    <Link to="/" id="marca">Nombre a definir</Link>
                    <Nav className="me-auto">
                        <Link  to="/">Home</Link>
                        <Link  to="/categoria/pc">Pc</Link>
                        <Link  to="/categoria/celular">Celular</Link>
                        <Link  to="/categoria/electrodomestico">Electrodomésticos</Link>
                    </Nav>
                    <NavLink to="/Carrito">
                    <CartWidget/>
                    </NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;