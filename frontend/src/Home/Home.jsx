import React from 'react'
import "../Home/home.css"
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TrendingProductCard from '../components/TrendingProductCard';
import ViewProduct from '../viewProducts/ViewProduct';
function Home() {
    const[productData,setProductData]=useState([]);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [offers, setOffers] = useState([]);
    const [category, setCategory] = useState(null);

    const handleClick = (category) => {
      setCategory(category);
    }
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

useEffect(() => {
    const boxes = document.querySelectorAll('.product-section-box',);
    const windowHeight = window.innerHeight;

    function checkScroll() {
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight) {
          box.style.animation = '';
        } else {
          box.style.animation = 'none';
        }
      });
    }

    checkScroll(); 
    window.addEventListener('scroll', checkScroll); 

    return () => {
      window.removeEventListener('scroll', checkScroll); 
    }
  }, []);
//trending product object
  const trendingProducts =
  [{
    product_name: 'Furniture Village',
    product_desc: 'Delivery within 24 hours',
    img_url:'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png'
  },{
    product_name:'Fashion World',
    product_desc:'Delivery within 24 hours',
    img_url:'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png'
  }
]

  //services object

const services = [
    {
      service_name: 'Online Payment',
      service_desc:"Updates on safe Shopping in our Stores",
      service_img:"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"
    },
    {
      service_name:"Home Delivey option",
      service_desc:"Updates on safe Shopping in our Stores",
      service_img:"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"
    },
    {
      service_name:"Frequently Asked Questions",
      service_desc:"Updates on safe Shopping in our Stores",
      service_img:"https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"
    }
      ];

    //services object

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
<div>
        <div className='navbar'>

            <ul className='nav-list' >
                <h1 className='logo-title'>ShopCart</h1>
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
                   <Link className='nav-link' to='/cart'><p>Cart</p></Link>
                </div>
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

 <div className='product-section-outer'>
     <div className='product-section'>
       <div className='product-section-header'>
            <h1>Top Categories</h1>
       </div>
       <div className='product-section-box'>
          <div className='section-box' onClick={() => handleClick('furniture')}>
                  <h2 className='section-box-header'>Furniture</h2>
                  <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png'>
                  </img>
             
          </div>
          <div  className='section-box'>
                 <h2 className='section-box-header'>Hand bag</h2>
                 <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png'>

                 </img>
          </div>
          <div  className='section-box'>
                <h2 className='section-box-header'>Books</h2>
                <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png'>

                </img>
          </div>
          <div  className='section-box'>
                 <h2 className='section-box-header'>Tech</h2>
                <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png'>

                </img>
          </div>
          <div  className='section-box'>
               <h2 className='section-box-header'>Sneakers</h2>
               <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png'>

               </img>
          </div>
          <div  className='section-box'>
               <h2 className='section-box-header'>Travel</h2>
               <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png'>

               </img>
          </div>
      </div>
    </div>
 </div>
  <div className='trending-products'>
      <div className='trending-container-header'>
           <h1> Trending Products</h1> 
      </div>   
      <div className='trending-items'>
      {trendingProducts.map((product)=>{
            return(
                <TrendingProductCard 
                product_name={product.product_name}
                product_desc={product.product_desc}
                img_url={product.img_url}
                />
            )
        })
      }
      </div>  
  </div>
 <div className='offer'>

     <div className='offer-content'>
            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png">

            </img>
     </div>

 </div>
 <div className='services'>
        {services.map((service)=>{
            return(
                <ServiceCard 
                service_name={service.service_name}
                service_desc={service.service_desc}
                image={service.service_img}
                />
            )
        })
        }   
 </div>
  <div className='footer'>
        <h1>Shopkart</h1>
   </div>
</div>
  )
}

export default Home