import Button from "react-bootstrap/Button";
function ItemDetail(props) {
    const detalle = props.detalle || {}
    console.log(props)
    return (
        <div className="contenedorDetalle">
            <img className="imagenDetalle" src={detalle?.img} />
            <div className="textoDetalle">
                <h2>{detalle?.producto}</h2>
                <h3>Precio: {detalle?.precio}</h3>
                <p>Detalles: {detalle?.descripcion}</p>
                <Button>Añadir al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemDetail;