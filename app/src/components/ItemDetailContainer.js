import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from './Firebase'
import { collection, where, query, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';

const ItemDetailContainer = (props) => {
    const [itemDeProductos, setItemDeProductos] = useState({});

    const { id } = useParams()


    useEffect(() => {
        const productosCollection = collection(db, "productosIniciales");
        const miFiltro = query(productosCollection, where("id", "==", Number(id)))
        const documentos = getDocs(miFiltro)
        documentos
            .then(respuesta => setItemDeProductos(respuesta.docs.map(doc => doc.data())[0]))
            .catch((error) => {
                toast.error("Error al obtener los productos");
            })
    }, [id]);

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail itemProductos={itemDeProductos} />
        </>
    );
}

export default ItemDetailContainer;