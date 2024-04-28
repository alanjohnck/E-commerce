import React, { useState, useEffect } from 'react'
import "./paymentpage.css"
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PaymentPage() {
  const [paymentOption, setPaymentOption] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUpiDetails, setShowUpiDetails] = useState(false);
  const [productData, setProductData] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const { id }  = useParams();
  const username = localStorage.getItem('username');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayButtonClick = () => {
    // Simulating payment success
    setPaymentSuccess(true);
  };

  useEffect(() => {
    // Fetch product data
    axios.get(`http://localhost:8000/getProductData/${id}`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });

    // Fetch user address
    axios.get(`http://localhost:8000/getUserAddress?username=${username}`)
      .then(response => {
        setUserAddress(response.data);
      })
      .catch(error => {
        console.error('Error fetching user address:', error);
      });
     
  }, [id, username]);

  const handlePaymentOptionChange = (event) => {
    const selectedOption = event.target.value;
    setPaymentOption(selectedOption);
    if (selectedOption === "upi") {
      setShowCardDetails(false);
      setShowUpiDetails(true);
    } else {
      setShowUpiDetails(false);
      if (selectedOption === "credit_or_debit") {
        setShowCardDetails(true);
      } else {
        setShowCardDetails(false);
      }
    }
  };

  return (
    <div className='payment-container'>
      <div className='payment-main'>
        <Navbar />
      </div>
      <div className="container">
        <div className="left-container">
          <div className="horizontal-container">
            <h2>Review Item And Shipping</h2>
            <div className="item">
              <img src={productData.image} alt="Image" />
              <div className="item-details-left">
                <p><b>Name :</b> {productData.product_name}</p>
                <p><b>Description :</b> {productData.product_desc}</p>
              </div>
              <div className='item-details-right'>
                <p><b>Price :</b> ${productData.product_price}</p>
                <p><b>Quantity :</b> 1</p>
              </div>
            </div>
          </div>
          <div className="horizontal-container">
            <br></br>
            <h2>Delivery Information</h2>
            <div className="delivery-info">
              <div className="delivery-group">
                <br></br>
                <p><b>Name :</b> {userAddress.firstname}</p>
                <p><b>Address :</b> {userAddress.address_name}</p>
                <p><b>City :</b> {userAddress.district}</p>
                <p><b>Zip Code :</b> {userAddress.pincode}</p>
                <p><b>Mobile :</b> {userAddress.phone_number}</p>
                <p><b>Email :</b> {userAddress.email}</p>
              </div>
              <button className="edit-button">Edit Information</button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="vertical-container">
            <h2>Order Summary</h2>
            <div className="coupon-section">
              <input type="text" id="coupon" placeholder="Enter coupon code" />
              <button className="apply-button">Apply Coupon</button>
            </div>
            <h3>Payment Details</h3>
            <div className="payment-options">
              <select className='right-select' value={paymentOption} onChange={handlePaymentOptionChange}>
                <option value="">Select Payment Method</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
                <option value="credit_or_debit">Credit or Debit</option>
                <option value="upi">UPI</option>
              </select>
              {paymentOption === "credit_or_debit" && (
                <div className="card-buttons">
                  <button className="payment-button amazon-button"></button>
                  <button className="payment-button mastercard-button"></button>
                  <button className="payment-button visa-button"></button>
                </div>
              )}
            </div>
            {showCardDetails && (
              <div className="card-details">
                <h4>Email*</h4>
                <input type="text" placeholder="Enter your email" required/>
                <h4>Card Holder Name*</h4>
                <input type="text" placeholder="Enter card holder's name" required />
                <div className="card-number-container">
                  <h4>Card Number*</h4>
                  <input type="text" placeholder="Enter card number" required />
                </div>
                <div className="expiry-cvc-container">
                  <div className="expiry-container">
                    <h4>Expiry*</h4>
                    <input type="text" placeholder="MM/YY" required/>
                  </div>
                  <div className="cvc-container">
                    <h4>CVV*</h4>
                    <input type="text" placeholder="CVV" required/>
                  </div>
                </div>
              </div>
            )}
            {showUpiDetails && (
              <div className="upi-details">
                <h4>UPI ID*</h4>
                <input type="text" placeholder="Enter UPI ID" />
              </div>
            )}
            {paymentSuccess && (
            <div className="payment-success">
              <p>Your order has been accepted.</p>
              <p>Transaction ID: XYZ123</p>
              <button  className="continue-shopping"><Link className="link"to='/'>Continue Shopping</Link></button>
            </div>
          )}
          {!paymentSuccess && (
            <div className="summary-details">
              <br></br>
              <p><b>Sub Total:</b> $549.00</p>
              <p><b>Tax(10%):</b> $54.90</p>
              <p><b>Coupon Discount:</b> -$20.00</p>
              <p><b>Shipping Cost:</b> $10.00</p>
              <p><b>Total:</b> $593.90</p>
              <div className="total-button">
                <button className="green-button" onClick={handlePayButtonClick}>Pay $593.90</button>
              </div>
            </div>
          )}

          </div>
        </div>
      </div>
    </div> 
  );
}

export default PaymentPage;
