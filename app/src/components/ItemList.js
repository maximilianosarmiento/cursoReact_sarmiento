import Items from "./Items";
function ItemList(props) {

    return (
        <>
            <ul>
                {props.productos.map((producto, index) => {
                    return (
                        <Items producto={producto.producto} key={producto.id}/>
                    )
                })}
            </ul>
        </>
    )
}

export default ItemList;