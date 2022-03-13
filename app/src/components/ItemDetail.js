function ItemDetail(props) {
    console.log(props)
    return (
        <div className="contenedorDetalle">
            <img className="imagenDetalle" src={props.producto.img} />
            <div className="textoDetalle">
                <h2>{props.producto.producto}</h2>
                <h3>Precio: {props.producto.precio}</h3>
                <p>Iphone 13, color blanco</p>
            </div>
        </div>
    )
}

export default ItemDetail;