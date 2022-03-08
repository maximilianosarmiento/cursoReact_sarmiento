import ItemCount from "./ItemCount";
function ItemListContainer({ greetings }) {

    return (
        <div className="contenedorContador">
            <ItemCount stock={5} initial={1} onAdd = {onAdd} />
        </div>
    )
};
export default ItemListContainer;