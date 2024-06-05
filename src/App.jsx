import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import { ShopContextProvider } from './Context/Shop_Context'

function App() {

  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Shop />}  />
      <Route path="/cart" element={<Cart />}  />
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  )
}

export default App
