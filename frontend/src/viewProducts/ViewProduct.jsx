import React, { useEffect } from 'react'
import "../viewProducts/viewproduct.css"
import axios from 'axios'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
function ViewProduct() {
    const [productData, setProductData] = useState([]);
    const [query, setQuery] = useState("fashion");

    useEffect(() => {
      axios.get('http://localhost:8000/getViewDetails/', { params: { query: query } })
        .then((response) => {
          setProductData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [query]);
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