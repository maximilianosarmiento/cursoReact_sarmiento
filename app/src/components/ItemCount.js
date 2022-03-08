import Button from "react-bootstrap/Button";
import {useState} from "react";

function ItemCount (props){
    
    const [contador, setContador] = useState(props.initial);
    
    function aumentar (){
        setContador(contador + 1);
    }

    function restar (){
        setContador(contador - 1);
    }

    function reset(){
        setContador(0);
    }

    const onAdd = ()={
        console.log("Hay Stock")
    }

        
    }



    return (
        <>
        <p>Items: {contador}</p>
        <Button onClick={restar} disabled={contador === 0}>-</Button>
        <Button onClick={OnAdd}>Agregar al Carrito</Button>
        <Button onClick={aumentar} disabled={contador === props.stock}>+</Button>
        </>
    )


}

export default ItemCount;