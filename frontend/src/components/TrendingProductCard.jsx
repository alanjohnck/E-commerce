import React from 'react'
import "./trendingProductCard.css"

function TrendingProductCard(props) {
  return (
    <div className='trending-card-container'>
      <div className='trending-card-top'>

          <img src={props.img_url}>

          </img>

      </div>
      <div className='trending-card-bottom'>
          <h2>
                {props.product_name}
          </h2>
          <p>
                {props.product_desc}
          </p>
          <button>
                 Shop Now
          </button>

      </div>
    </div>
  )
}

export default TrendingProductCard