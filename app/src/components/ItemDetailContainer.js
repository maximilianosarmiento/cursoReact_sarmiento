import ItemDetail from "./ItemDetail";
import productosIniciales from "./ProductosIniciales";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { productoId } = useParams();

    useEffect(() => {
        setLoading(true)
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })


        promesa.then((data) => {
            let productoDetalle = data.find(producto => producto.id.toString() === productoId) 
            setProductos(productoDetalle)
        })
            .catch((error) => {
                console.log("Error")
            })
            .finally(() => {
                setLoading(false);
            })
    }, [productoId])
    return (
        <div className="itemDetailContainer">
            {loading ? <>Loading...</> : (
                productos ? <ItemDetail detalle={productos} /> : <p>No se encontraron objetos</p>

            )}
        </div>
    )

}

export default ItemDetailContainer;