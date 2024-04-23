import React from 'react'
import "../Home/home.css"
import ProductCard from '../components/ProductCard'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const[productData,setProductData]=useState([]);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [offers, setOffers] = useState([]);
    
useEffect(()=>{
    axios.get('http://localhost:8000/getProductData')
    .then((response)=>{
       
        setProductData(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })

} , [productData.length]);  

useEffect(()=>{
         axios.get('http://localhost:8000/getOfferDetails')
          .then((response)=>{
            console.log(response.data)
            setOffers(response.data)
          }).catch((error)=>{
            console.log(error)
          })
          const timer = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }, 5000); 
        return () => {
            clearInterval(timer);
        };
       
},[offers.length])

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
                <h1 className='logo-title'>ShopssCart</h1>
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
                   <Link to='/cart'><p>Cart</p></Link>
                </div>
            </div>

        </div>   

{/* advertisement-section & offer table with three fields : image, info,colour and background colour */}
   <div className='advertisement-box'>
        <div style={{backgroundColor:offers[currentAdIndex]?.offer_background_color}} className='advertisement-content'>
            <div className='left-part'>
               <h1>{offers[currentAdIndex]?.offer_info}</h1>
               <br />
            
               <button>Buy</button>
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
              product_id={product.id}
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