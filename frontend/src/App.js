
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home/Home';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import CartPage from './CartPage/CartPage';
function App() {

  return (
    <Router>
    <div className="App" >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
