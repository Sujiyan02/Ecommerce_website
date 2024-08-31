/* eslint-disable react/no-unknown-property */
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar  from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrdersConfirmations from "./pages/OrdersConfirmations";
import Filters from './pages/filter'

import { useState } from 'react'

function App() {
 const [order,setOrder] = useState(null)

  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
        <Route path="/orders-confirmations" element={<OrdersConfirmations orders_confirmations={order}/>}></Route>
       <Route path="/filters" element={<Filters />}></Route>


        
      </Routes>
      <Footer />
    
    </BrowserRouter>
  )
}

export default App
