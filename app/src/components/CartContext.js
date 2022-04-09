import { createContext, useEffect, useState} from "react";

export const contexto = createContext()
const { Provider } = contexto;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [precioTotal , setPrecioTotal] = useState(0);

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

    
    useEffect(() => {
        let total = 0
        carrito.map(elemento => {
            total += elemento.cantidad
            return setTotalItems(total)});
    }, [carrito])

    useEffect(() => {
        let total = 0
        carrito.map(elemento => {
            total += elemento.producto.precio * elemento.cantidad;
            return setPrecioTotal(total)
        });
    }, [carrito]);

    const valorDelContexto = {
        borrarDelCarrito,
        limpiarCarrito,
        carrito,
        cantidad,
        precioTotal,
        totalItems,
        agregarAlCarrito,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;