
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home/Home';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import CartPage from './CartPage/CartPage';
import ViewProduct from './viewProducts/ViewProduct';
import ProductDetail from './ProductDetail/ProductDetail';
function App() {

  return (
    <Router>
    <div className="App" >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/viewproduct' element={<ViewProduct />} />
         <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
