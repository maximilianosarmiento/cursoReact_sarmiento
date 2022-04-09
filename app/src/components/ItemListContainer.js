import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { db } from './Firebase';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

console.log(db);


const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {

        if (!categoria) {

            const productosCollection = collection(db, "productosIniciales");
            const documentos = getDocs(productosCollection)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))

        } else {
            const productosCollection = collection(db, "productosIniciales")
            const miFiltro = query(productosCollection, where("categoria", "==", categoria))
            const documentos = getDocs(miFiltro)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))
        }

    }, [categoria])

    const greeting = props.greeting
    return (
        <>
            <h2>{greeting}</h2>
            <ItemList lista={listaProductos} />
        </>
    );


}

export default ItemListContainer;