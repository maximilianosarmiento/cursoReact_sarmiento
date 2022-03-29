import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Item = (props) => {
  
  const producto = props.producto;

  return (
    <div id="cards">
      <img src={producto.img} alt={producto.nombre} />
      <h4>{producto.nombre}</h4>
      <h5>${producto.precio}</h5>
      <Button variant="primary" className="btnDetalle"><Link to={`/item/${producto.id}`}className="detalle">
        Ver detalle</Link></Button>
    </div>
  );
};

export default Item;