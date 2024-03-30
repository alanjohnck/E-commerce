import React from 'react'
import "../Home/home.css"
import ProductCard from '../components/ProductCard'
import {useState,useEffect} from 'react';
import axios from 'axios';
function Home() {
    const[productData,setProductData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/getProductData')
        .then((response)=>{
           
            setProductData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <div className='main'>
        <div className='banner'>
            <marquee className="marq" bgcolor="#003D29"  direction="left"  loop="">  
                <p className='marq-text'>
                    50% off on all products. Hurry up! Limited period offer.
                </p>
            </marquee>
        </div>

{/* navbar-section */}
        <div className='navbar'>

            <ul className='nav-list' >
                <h1 className='logo-title'>Shop Cart</h1>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
                <li className='nav-item'>Products</li>
            </ul>   

            <div className='nav-search'>
                <input  type='text' placeholder='Search' className='search'/>
            </div>

            <div className='nav-account'>
                <div className='account'>
                  <img src=''>

                  </img>
                  <p>Account</p>
                </div>
                <div className='cart'>
                   <img>

                   </img>
                   <p>Cart</p>
                </div>
            </div>

        </div>   

{/* advertisement-section & advertisment table with three fields : image, title,colour and description */}
   <div className='advertisement-box'>
        <div className='advertisement-content'>
            <div className='left-part'>
               <h1>Grab Upto 50% Off On
               <br />
                Selected Headphones</h1>
               <button>buy</button>
            </div>
            <div className='right-part-img'>
                <img src='/images/image-removebg-preview.png' alt='ad-image'></img>
            </div>
        </div> 
   </div>
   
 <div className='product-outer-container'>
   <div className='product-details'>
   {productData.map((product)=>{
         return(
              <ProductCard
              image={product.image}
              product_name={product.product_name}
              product_material={product.product_material}
              price={product.product_price}
              />
         )
   })
   }
   </div>
 </div>
    </div>
  )
}

export default Home