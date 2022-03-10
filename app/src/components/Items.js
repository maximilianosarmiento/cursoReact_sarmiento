function Items(props) {
    
    return (
        <>
            <li key={props.id}> {props.producto} </li>
        </>
    )

}

export default Items;