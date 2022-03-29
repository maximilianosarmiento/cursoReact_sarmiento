import {useState} from "react"
import Button from "react-bootstrap/esm/Button"

const ItemCount =({initial,stock,onAdd}) => {
    
    let [contador,setContador] = useState(initial)

    const agregar =()=>{
        if (contador<stock){
        setContador(contador+1)
        }
    }

    const restar =()=>{
        if (contador>initial){
            setContador(contador-1)
        }
    }

    const confirmar =()=>{
        onAdd(contador)
    }

    return (
        <>
            <p>Productos Seleccionados : {contador}</p>
            <Button className="btn" onClick={agregar}>Agregar</Button>
            <Button className="btn" onClick={restar}>Quitar</Button>
            <Button className="confirmar" onClick={confirmar}>Confirmar Compra</Button>
        </>
    )
}
    
export default ItemCount;
