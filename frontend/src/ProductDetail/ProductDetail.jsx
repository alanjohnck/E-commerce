import React, { useState, useEffect } from 'react';
import './productdetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const [selectedVariant, setSelectedVariant] = useState('Default');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  const [reviews, setReviews] = useState([
    { id: 1, content: 'Great product!', author: 'User1' },
    { id: 2, content: 'I love it!', author: 'User2' },
    { id: 3, content: 'Highly recommend.', author: 'User3' },
    
  ]);
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };
  const rotations = ['0deg', '90deg', '180deg'];

  const productDetail = {
    title: 'Wireless Over-Ear Headphones',
    variants: ['Black', 'White', 'Red'],
    prices: {
      Black: 50,
      White: 55,
      Red: 45,
    },
    description:
      'Immerse yourself in your favorite music with these Wireless Over-Ear Headphones. With high-quality sound and active noise cancellation, you can enjoy crisp, clear audio without any distractions. The ergonomic design and soft ear cushions provide long-lasting comfort, perfect for extended listening sessions. These headphones feature Bluetooth connectivity, allowing you to seamlessly pair them with your devices. The built-in microphone enables hands-free calling, making them ideal for on-the-go use. Whether you’re at home, in the office, or on the move, these headphones deliver an exceptional audio experience.',
    images: ['https://rb.gy/ad5poi', 'https://via.placeholder.com/400', 'https://via.placeholder.com/400'],  
  };
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get(`http://localhost:8000/getProductData/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);
 
  return (
    <div className="product-detail-container">
      <div className='prod-nav-main'>
        <Navbar />
      </div>
      <div className="product-detail">
        <div className="main-image">
          <img src={product.image} alt="Main Product" />
          <div className="product-gallery">
    {rotations.map((rotation, index) => (
        <img key={index} src={product.image} style={{ transform: `rotate(${rotation})` }} alt={`Product ${index + 1}`} />
    ))}
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.product_name}</h2>
          <p className="product-description">
         
          {product.product_desc}

          </p>
          <div className="product-variants">
            <label className="variant-label">Variants:</label>
            <select
              className="variant-select"
              value={selectedVariant}
              onChange={(e) => handleVariantChange(e.target.value)}
            >
              {productDetail.variants &&
                productDetail.variants.map((variant, index) => (
                  <option key={index} value={variant}>
                    {variant}
                  </option>
                ))}
            </select>
          </div>
          <div className="product-price">Price: {product.product_price}</div>
          <div className="product-quantity">
            <label className="quantity-label">Quantity:</label>
            <input
              className="quantity-input"
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className='Detail-rating'>
              <label>Rating:</label>
              <Rating rating={product.rating} />
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <button className='add-to-cart Buy-now'><Link className='buy-link' to={
            {
              pathname: `/product/${id}/payment`
  
            }
          }>Buy Now</Link></button>
        
          <div className='delivery-detail'>
           
            <h4><u>Speed Delivery</u></h4>
            <p>
              Estimated Delivery on 18th june 2024
            </p>
            <h4><u>In Stock</u></h4>
            <div className='items-left'>
            only<span>{product.items_left}</span>items left
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-reviews">
        <h3>Product Reviews</h3>
        <p>No reviews yet.</p>
        {/* Add review form or review list here */}
        
      </div>
    </div>
  );
}

export default ProductDetail;
