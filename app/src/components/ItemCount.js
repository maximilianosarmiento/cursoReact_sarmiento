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

    

        
    



    return (
        <>
        <p>Items: {contador}</p>
        <Button onClick={restar} disabled={contador === 0}>-</Button>
        <Button onClick={reset}>Resetear Items</Button>
        <Button onClick={aumentar} disabled={contador === props.stock}>+</Button>
        </>
    )


}

export default ItemCount;