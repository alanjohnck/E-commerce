import React, { useEffect } from 'react'
import "../viewProducts/viewproduct.css"
import axios from 'axios'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
function ViewProduct() {
    const [productData, setProductData] = useState([]);
    const {search} =useParams();
    useEffect(() => {
      axios.get(`http://localhost:8000/getViewproduct/${search}`,)
        .then((response) => {
          setProductData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  return (
<div className='viewproduct-outer'>
    <div className='viewproduct'>
   
            {productData.map((product) => (
                <ProductCard
                     key={product.product_id}
                     product_id={product.id}
                     image={product.image}
                     product_name={product.product_name}
                     product_material={product.product_material}
                     price={product.product_price}
                 />
            ))}
          
  
    </div>
</div>
  )
}

export default ViewProduct