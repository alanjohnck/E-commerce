import React from 'react'
import "./servicecard.css"

function ServiceCard(props) {
  return (
    <div className='service-card'>
        <div className='service-card-top'>

             <h2>{props.service_name}</h2>
             <p>{props.service_desc}</p>

        </div>
        <div className='service-card-bottom'>
             <img src={props.image} alt="Service Image">

             </img>
        </div>
    </div>
  )
}

export default ServiceCard