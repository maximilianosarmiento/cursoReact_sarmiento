import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import iphone13 from "./images/Iphone13.jpg"
function Items(props) {
    console.log(props)

    return(
        <>
            <Card className="cards" style={{ width: '18rem'}}>
                <Card.Img variant="top" src=/*{props.propItems.img}*/{iphone13} />
                <Card.Body>
                    <Card.Title>{props.propItems.producto}</Card.Title>
                    <Card.Text>
                        precio: {props.propItems.precio}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default Items;