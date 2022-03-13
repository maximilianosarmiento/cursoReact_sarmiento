import { useState, useEffect } from "react";
//import productosIniciales from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import iphone13 from "./images/Iphone13.jpg"


const prod1 = {
    id: 1,
    producto: "Producto 1",
    precio: 100,
    img: iphone13
}
function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(prod1)
            }, 2000)
        })
        promesa.then((data) => {
                setProducto(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <div className="itemDetailContainer">
            {loading ? <></> : <ItemDetail producto={producto} />}
            
        </div>
    )

}

export default ItemDetailContainer;