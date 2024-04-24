import React, { useState, useEffect } from 'react';
import './productdetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
      <div className="product-detail">
        <div className="main-image">
          <img src={product.image} alt="Main Product" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.product_name}</h2>
          <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultricies dolor. Sed eleifend velit in orci pellentesque, id bibendum libero congue. Fusce euismod hendrerit magna. Nulla facilisi. Cras ac magna auctor, convallis mauris vel, consequat urna. Pellentesque habitant morbi tristique senectus et netus et

          </p>
          <div className="product-variants">
            <label className="variant-label">Variants:</label>
            <select
              className="variant-select"
              value={selectedVariant}
              onChange={(e) => handleVariantChange(e.target.value)}
            >
              {product.variants &&
                product.variants.map((variant, index) => (
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
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-gallery">
        {product.images &&
          product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
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
