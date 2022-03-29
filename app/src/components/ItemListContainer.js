import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import itemProductos from "../Utiles";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([]);

    const {categoria}=useParams();


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    categoria?
                        itemProductos.filter((item)=>
                        item.categoria===categoria
                    ):itemProductos);                    
            }, 2000);
        }).then((productos) => {
            setListaProductos(productos);
        });
    },[categoria]);

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemList lista={listaProductos} />
        </>
    );
}

export default ItemListContainer;