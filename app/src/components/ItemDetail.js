import ItemCount from "./ItemCount";



function ItemDetail(props) {
    const detalle = props.detalle || {}
    console.log(props)
    
    const onAdd = (valorDelContador) =>{
        console.log(valorDelContador)
        
    };
    return (
        <div className="contenedorDetalle">
            <img className="imagenDetalle" src={detalle?.img} />
            <div className="textoDetalle">
                <h2>{detalle?.producto}</h2>
                <h3>Precio: {detalle?.precio}</h3>
                <p>Detalles: {detalle?.descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                
            </div>
        </div>
    )
}

export default ItemDetail;