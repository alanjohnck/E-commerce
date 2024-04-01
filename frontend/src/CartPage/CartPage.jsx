import React, {useState, useEffect } from 'react'
import axios from 'axios'

function CartPage() {
const[cartData,setCartData]=useState([])

    const getCartData = async () => {
        await axios.get('http://localhost:8000/getCartData')
          .then((response) => {
            setCartData(response.data);
          })
          .catch((error) => {
            console.error('Error getting cart data:', error);
          });
      }
      useEffect(() => {
        getCartData();
      }, []);
    const removeFromCart = async(cart_id)=>{
        await axios.delete('http://localhost:8000/removeFromCart',{data:{cart_id}})
            .then((res)=>{
                console.log(res)
                getCartData();
            })
    }
  return (
    <div>
       {/*cart page UI*/}
            
    </div>
  )
}

export default CartPage