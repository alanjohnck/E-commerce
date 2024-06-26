import React, { useEffect } from 'react'
import "../viewProducts/viewproduct.css"
import axios from 'axios'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
function ViewProduct() {
    const [productData, setProductData] = useState([]);
    const {search} = useParams();
 
    useEffect(() => {
      axios.get(`http://localhost:8000/getViewproduct/${search}`,)
        .then((response) => {
          setProductData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }, [search]);
  return (
<div className='viewproduct-outer'>
    <div className='nav-view'>
          <Navbar />
    </div>
    <div>
         <hr />
    </div>
    <div className='viewproduct'>
            {productData.map((product) => (
                <ProductCard
                     key={product.product_id}
                     product_id={product.id}
                     image={product.image}
                     product_name={product.product_name}
                     product_desc={product.product_desc}
                     price={product.product_price}
                     rating ={product.rating}
                 />
            ))}
    </div>
</div>
  )
}

export default ViewProduct