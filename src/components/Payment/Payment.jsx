import React from 'react';
import './Payment.css'; // Create this file for styling
import Navbar from '../Navbar/Navbar'

const Payment = () => {
 
  return (
   <div> <Navbar/>
    <div className="payment__container">
      <h1>Payment Page</h1>
      <form className="payment__form">
        {}
        <label>
          Card Number:
          <input type="text" name="cardNumber" required />
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" required />
        </label>
        <label>
          Name on Card:
          <input type="text" name="nameOnCard" required />
        </label>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
