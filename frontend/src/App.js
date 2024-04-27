
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home/Home';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import CartPage from './CartPage/CartPage';
import ViewProduct from './viewProducts/ViewProduct';
import ProductDetail from './ProductDetail/ProductDetail';
import Register from './CreateUserPage/Register';
import AddressDetail from './components/AddressDetail';
import Rating from './components/Rating';
import PaymentPage from './PaymentPage/PaymentPage'
function App() {

  return (
   <Router>
     <div className="App" >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/viewproduct/:search' element={<ViewProduct />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/address' element={<AddressDetail />} />
          <Route path='/star' element={<Rating rating={3.3}  />} />
          <Route path='/product/:id/payment' element={<PaymentPage />} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;
