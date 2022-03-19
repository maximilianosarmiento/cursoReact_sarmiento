import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemCount(props) {

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

    function agregarAlCarrito() {
        props.onAdd(contador);
        setAgregado(true)
    }

    return (
        <>
            <p>Items: {contador}</p>
            <Button onClick={restar} disabled={contador === 0}>-</Button>
            {agregado ? <Button> <Link to="/Carrito">Ir al Carrito</Link> </Button>:<Button onClick={agregarAlCarrito} disabled={contador === 0}>Agregar al Carrito</Button>}
            <Button onClick={aumentar} disabled={contador === props.stock}>+</Button>
        </>
    )

}

export default ItemCount;