import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import itemProductos from "../Utiles";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
    const [itemDeProductos, setItemDeProductos] = useState({});

    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemProductos.find((item) => {
                    return item.id.toString() === id            
                }));
            }, 2000);
        }).then((productos) => {
            setItemDeProductos(productos);
        });
    });

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail itemProductos={itemDeProductos} />

        </>
    );
}

export default ItemDetailContainer;