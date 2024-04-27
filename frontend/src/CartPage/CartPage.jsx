import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cartpage.css'; // Import the CSS file



function CartPage() {
 const [cartData, setCartData] = useState([
   {
     ID: 1,
     IMAGE_URL: 'https://cdn.pixabay.com/photo/2023/10/29/01/32/flamingo-8348527_1280.jpg',
     NAME: 'Product 1',
     QUANTITY: 1,
     PRICE: 10.99,
   },
   {
     ID: 2,
     IMAGE_URL: 'https://via.placeholder.com/150',
     NAME: 'Product 2',
     QUANTITY: 2,
     PRICE: 15.99,
   },
   {
     ID: 3,
     IMAGE_URL: 'https://via.placeholder.com/150',
     NAME: 'Product 3',
     QUANTITY: 1,
     PRICE: 20.99,
   },
 ]);

 const getCartData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getCartData');
      setCartData(response.data);
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
            <div key={item.ID} className="cart-item">
              
              <img src={item.IMAGE_URL} alt={item.NAME} className="item-image" />
              
                <div className="item-name">{item.NAME}</div>

                

                <div className="item-info">Quantity: {item.QUANTITY} </div>
                <div className="item-rating">rating</div>
                <div className="item-info"> Price: ${item.PRICE}</div>
              
                <button className="delete-button" onClick={() => removeFromCart(item.ID)}>
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
