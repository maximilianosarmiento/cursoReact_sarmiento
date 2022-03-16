import Items from "./Items";
function ItemList(props) {
    console.log(props)

    return (
        <>
            <div className="cardsContainer">
                {props.productos.map((producto) => {
                    return (
                        <Items propItems={producto} key={producto.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemList;