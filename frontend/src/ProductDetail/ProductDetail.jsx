import React, { useState } from 'react';
import './ProductDetail.css';

function ProductDetail() {
  const [selectedVariant, setSelectedVariant] = useState('Default');
  const [quantity, setQuantity] = useState(1);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Sample product data
  const product = {
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

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="main-image">
          <img src={product.images[0]} alt="Main Product" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-variants">
            <label className="variant-label">Variants:</label>
            <select
              className="variant-select"
              value={selectedVariant}
              onChange={(e) => handleVariantChange(e.target.value)}
            >
              {product.variants.map((variant, index) => (
                <option key={index} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
          <div className="product-price">Price: ${product.prices[selectedVariant]}</div>
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
        {product.images.map((image, index) => (
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
