import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cartpage.css';


import Rating from '../components/Rating';
function CartPage() {
 const [cartData, setCartData] = useState([]);

 const getCartData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getCartData');
      setCartData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error getting cart data:', error);
    }
 };

 useEffect(() => {
    getCartData();
 }, []);

 const removeFromCart = async (cart_id) => {
    try {
      await axios.delete('http://localhost:8000/removeFromCart', { data: { cart_id } });
      console.log('Item removed from cart:', cart_id)
      getCartData(); // Refresh cart data after removal
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
 };

 return (
    <div className="cart-page">
      <h1 className="cart-heading">My Cart</h1>
      <div className="cart-items">
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div key={item.cart_id} className="cart-item">
              
              <img src={item.product_image} alt={item.NAME} className="item-image" />
              
                <div className="item-name">{item.product_name}</div>
                <div className="item-info">Quantity: {item.QUANTITY} </div>
                <div className="item-rating">rating:<Rating rating={3} /></div>
                <div className="item-info"> Price:<span> ${item.product_price}</span></div>
              
                <button className="delete-button" onClick={() => removeFromCart(item.cart_id)}>
  <i className="fas fa-trash-alt"></i>
</button>
            </div>
          ))
        ) : (
          <div className="empty-cart-message">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
 );
}

export default CartPage;
