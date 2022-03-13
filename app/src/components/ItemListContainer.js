import ItemList from "./ItemList";
import iphone13 from "./images/Iphone13.jpg"
import {useState, useEffect} from "react";

 // Armo array de productos solo para probar, generalmente esto se trae de Base de Datos o API Rest
   let productosIniciales = [
    {
        id: 1,
        producto: "Producto 1",
        precio: 100,
        img: <img src={iphone13}/> 
    },
    {
        id: 2,
        producto: "Producto 2",
        precio: 200,
        img: <img src={iphone13}/>
    },
    {
        id: 3,
        producto: "Producto 3",
        precio: 300,
        img: <img src={iphone13}/>
    }
];
function ItemListContainer() {
 

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        },[])

        promesa.then((res)=>{
            setProductos(productosIniciales)
        })
        .catch((error)=>{
            console.log ("Error")
        })
        .finally(()=>{
            setLoading(false);
        })
    })


    return (
        <div className="contenedorContador">
            <p>{loading && "Cargando por favor espere..."}</p>
            <ItemList productos={productos}/>
        </div>
    )
    
}


export default ItemListContainer;