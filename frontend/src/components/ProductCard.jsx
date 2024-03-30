import React from 'react'
import "../components/productcard.css"
function ProductCard(props) {
  return (
       <div className='product-box'>
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
                 <button>
                        Add to Cart
                 </button>

             </div>
             <div className='product-right'>
                <h2>
                    {props.price}
                </h2>
             </div>

         </div>
       </div> 
  )
}

export default ProductCard