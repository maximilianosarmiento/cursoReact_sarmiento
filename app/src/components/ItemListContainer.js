import ItemList from "./ItemList";
import productosIniciales from "./ProductosIniciales";
import {toast} from "react-toastify";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

 // Armo array de productos solo para probar, generalmente esto se trae de Base de Datos o API Rest
    
function ItemListContainer() {
 

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();

    useEffect( () => {
        setLoading(true);
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        promesa.then((res)=>{
            if (categoria){
                const productoPorCategoria = productosIniciales.filter(producto => producto.categoria === categoria);
                setProductos(productoPorCategoria)
            }else{
                setProductos(productosIniciales)
            }
            //setProductos(productosIniciales)
        })
        .catch((error)=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false);
        })
    },[categoria])


    return (
        <div className="contenedorContador">
            <p>{loading && "Cargando por favor espere..."}</p>
            <ItemList productos={productos}/>
        </div>
    )
    
}


export default ItemListContainer;