import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom";


function Items(props) {
    console.log(props)
    
    return(
        <>
            <Card className="cards" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={props.propItems.img} />
                <Card.Body>
                    <Card.Title>{props.propItems.producto}</Card.Title>
                    <Card.Text>
                        precio: {props.propItems.precio}
                    </Card.Text>
                    <Button variant="primary"><Link to={"/productos/"+props.propItems.id}>Ver Detalle</Link></Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default Items;