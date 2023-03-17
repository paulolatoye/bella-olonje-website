import React from 'react'
import './payment.css'
import PaymentImg from '../../assets/payment.png'

function Payment() {
  return (
    <div className="container mt-5">
        <div className="row pymnt-section">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className='pymnt-img'>
                    <img src={PaymentImg} alt=""></img>
                </div>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className='pymnt-info'>
                    <h3>Checkout</h3>
                    <h2>When you done, check out <br/>and get it delivered.</h2>
                    <h4>When you done check out and get it <br/>delivered with ease.</h4>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
