import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

function MiProvider({ children }) {

    const [carrito, setCarrito ] = useState([{
        id:1,
        nombre: "Libro",
        precio: 200,
        categoria: "Electrodomestico",
        cantidad: 2
    },
    {
        id:2,
        nombre: "Plancha",
        precio: 250,
        categoria: "Electrodomestico",
        cantidad: 3,
    },{
        id:3,
        nombre: "Celular",
        precio: 300,
        categoria: "Pc",
        cantidad: 1
    }]);
    const [total, setTotal] = useState(0)
    console.log(carrito)

    const borrarDelCarrito = (id) => {
        console.log("Borrando desde provider",id);
        console.log(id)
    };

    const agregarAlCarrito = (producto, cantidad) => {
        if (!isInCart()){
            const copia = carrito.slice(0);
            copia.push({...producto, cantidad});
            setCarrito(copia);
        }
    }; 

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const isInCart = () => {
        //busca en el carrito el id del producto
        //si esta en el carrito devuelve true
        //si no esta devuelve false

        //carrito.find(item => item.id === producto.id)
    }

    const valorDelContexto = {

        total: total,
        carrito: carrito,
        //agregarAlCarrito : agregarAlCarrito,
        borrarDelCarrito : borrarDelCarrito,
        limpiarCarrito : limpiarCarrito
    }   

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider;








        /*carrito:         total: 0*/
