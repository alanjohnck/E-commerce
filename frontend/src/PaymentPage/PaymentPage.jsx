// PaymentPage.js

import React, { useState } from 'react'
import "./paymentpage.css"
import Navbar from '../components/Navbar';
function PaymentPage() {
  const [paymentOption, setPaymentOption] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUpiDetails, setShowUpiDetails] = useState(false);

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
            <img src="image.jpg" alt="Image" />
            <div className="item-details">
              <br></br>
              <p><b>Name :</b> Airpods Max</p>
              <p><b>Color :</b> Pink</p>
              <p><b>Price :</b> $549.00</p>
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
              <p><b>Name :</b>Abel</p>
              <p><b>Address :</b>123 Main St</p>
              <p><b>City :</b>Xyz</p>
              <p><b>Zip Code :</b>1234</p>
              <p><b>Mobile :</b>1234567890</p>
              <p><b>Email :</b>abel@gmail.com</p>
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
            <select value={paymentOption} onChange={handlePaymentOptionChange}>
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
              <input type="text" placeholder="Enter your email" />
              <h4>Card Holder Name*</h4>
              <input type="text" placeholder="Enter card holder's name" />
              <div className="card-number-container">
                <h4>Card Number*</h4>
                <input type="text" placeholder="Enter card number" />
              </div>
              <div className="expiry-cvc-container">
                <div className="expiry-container">
                  <h4>Expiry*</h4>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="cvc-container">
                  <h4>CVV*</h4>
                  <input type="text" placeholder="CVV" />
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
          <div className="summary-details">
            <br></br>
            <p><b>Sub Total:</b> $549.00</p>
            <p><b>Tax(10%):</b> $54.90</p>
            <p><b>Coupon Discount:</b> -$20.00</p>
            <p><b>Shipping Cost:</b> $10.00</p>
            <p><b>Total:</b> $593.90</p>
            <div className="total-button">
              <button className="green-button">Pay $593.90</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default PaymentPage;
