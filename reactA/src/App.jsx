import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer';
import {ContextProvider} from './ContextProvider';


function App() {
  return (
    <ContextProvider>
  <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ContextProvider>
  
  )
}

export default App;
