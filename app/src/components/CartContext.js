import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);

    const borrarDelCarrito = (id)=>{
        
        const carritoAux = carrito.filter(elemento=>elemento.producto.id !==id);
        setCarrito(carritoAux)
    }
    

    const agregarAlCarrito = (producto, cantidad) => {
        const carritoAux = [...carrito];

        carritoAux.push({ producto, cantidad });
        setCarrito(carritoAux)
        setCantidad(cantidad)
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const calcularTotalItems = ()=>{
        let total = 0
        carrito.forEach(elemento => {
            total += elemento.cantidad
        });
        return total
    }

    const valorDelContexto = {
        borrarDelCarrito,
        limpiarCarrito,
        carrito,
        cantidad,
        calcularTotalItems,
        agregarAlCarrito,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;