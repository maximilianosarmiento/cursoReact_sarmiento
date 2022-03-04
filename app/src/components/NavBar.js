import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

function Header() {
    return (
        <>
            <Navbar bg="light" variant="light" id ="navbar">
                <Container>
                    <Navbar.Brand href="#home" id="marca">Nombre a definir</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link  href="#quienesSomos">¿Quienes somos?</Nav.Link>
                        <Nav.Link  href="#contacto">Contacto</Nav.Link>
                    </Nav>

                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;