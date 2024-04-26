import React from 'react'
import "../components/productcard.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rating from './Rating'
function ProductCard(props) {
    const handleAddToCart =async () => {
        await axios.post('http://localhost:8000/addToCart', props)
    }
return (

         <div className='product-box' id={props.product_id}>
             <Link className='state-location' to={{
            pathname: `/product/${props.product_id}`,
            state: { product: props }
        }}>
                <div className='product-top-section'>
                        <img src={props.image}>

                        </img>
             </div>
             <div className='product-bottom-section'>
                     <div className='product-left'>
                             <h4>{props.product_name}</h4>
                             <p>{props.product_material}</p>
                    <div>
                    </div>
                             <button className='button-cart' onClick={handleAddToCart}>
                                            Add to Cart
                             </button>

                     </div>
                     <div className='product-right'>
                            <h2>
                                    ${props.price}
                            </h2>
                            <div className='rating'>
                                     <Rating rating={3} />
                            </div>
                     </div>

             </div>
             </Link>
         </div> 
     
)
}

export default ProductCard