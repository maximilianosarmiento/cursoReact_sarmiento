import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext} from "react";
import { cartContext } from "./CartContext";

function ItemCount(props) {
    console.log(props)

    
    const {agregarAlCarrito} = useContext(cartContext);

    const [contador, setContador] = useState(props.initial);

    function aumentar() {
        if (contador < props.stock) {
            setContador(contador + 1)
        };
    }

    function restar() {
        if (contador > 0) {
            setContador(contador - 1)
        };
    }

    const [agregado, setAgregado] = useState(false)

    function confirmarCompra() {
        props.onAdd(contador);
        setAgregado(true)
        console.log("Agregado")
    }

    return (
        <>
            <p>Items: {contador}</p>
            <Button onClick={restar} disabled={contador === 0}>-</Button>
            {agregado ? <Button> <Link onClick={()=>{agregarAlCarrito()}} to="/Carrito">Ir al Carrito</Link> </Button>:<Button onClick={confirmarCompra} disabled={contador === 0}>Confirmar Compra</Button>}
            <Button onClick={aumentar} disabled={contador === props.stock}>+</Button>
        </>
    )

}

export default ItemCount;