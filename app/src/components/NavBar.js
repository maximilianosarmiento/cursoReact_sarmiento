import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to='/' className="nombre"><h1>E-commerce</h1></Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/categoria/Tecnologia'>Tecnología</Link>
                <Link to='/categoria/Moda'>Moda</Link>
                <Link className="btn" to='/carrito'><CartWidget /></Link>
            </nav>
        </>
    );
}

export default NavBar;