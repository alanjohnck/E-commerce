import React from 'react'
import "../components/productcard.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useNavigate } from 'react-router-dom'
function ProductCard(props) {
        const navigate = useNavigate()
    const handleAddToCart =async (event) => {
        event.stopPropagation();
        event.preventDefault()
        await axios.post('http://localhost:8000/addToCart', props)
        navigate('/')
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
                             <p>{props.product_desc}</p>
                         <div className='add-to-cart-button'>
                    
                             <button className='button-cart' onClick={handleAddToCart}>
                                            Add to Cart
                             </button>
                        </div>

                     </div>
                     <div className='product-right'>
                            <h2>
                                    ${props.price}
                            </h2>
                            <div className='rating'>
                                     <Rating rating={props.rating} />
                            </div>
                     </div>

             </div>
             </Link>
         </div> 
     
)
}

export default ProductCard