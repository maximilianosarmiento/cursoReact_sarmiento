import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                    <Route path="/Carrito" element={<Carrito/>}/>
                    <Route path="/productos/:productoId" element={<ItemDetailContainer/>}/>
                </Routes>

            </main>
        </BrowserRouter>
    )
}

export default App;