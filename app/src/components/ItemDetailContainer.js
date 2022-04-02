import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import itemProductos from "../Utiles";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from './Firebase'
import { getDoc, collection, doc, where, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    console.log(props)
    const [itemDeProductos, setItemDeProductos] = useState({});

    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        const productosCollection = collection(db, "productosIniciales");
        const miFiltro = query(productosCollection, where("id", "==", Number (id)))
            const documentos = getDocs(miFiltro)
            documentos
            .then(respuesta => setItemDeProductos(respuesta.docs.map(doc=>doc.data())[0]))
            .catch((error) => {
                console.log("Error al obtener los productos");

            })



        /* const documento = getDoc(doc(productosCollection, "BgvCvxFgdTvxN8Y2vrDA"));
        console.log(documento)
        documento
            .then((respuesta) => {
                console.log(respuesta.data())

            })
            .catch((error) => {
                console.log("Error al obtener los productos");

            }) */





        /* const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemProductos.find((item) => {
                    return item.id.toString() === id            
                }));
            }, 2000);
        }).then((productos) => {
            setItemDeProductos(productos);
        });
    } */}, [id]);

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail itemProductos={itemDeProductos} />

        </>
    );
}

export default ItemDetailContainer;