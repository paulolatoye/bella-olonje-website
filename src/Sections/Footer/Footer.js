import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='container'>
        <div className='row footer'>
            <div className='col-sm-12 col-md-12 col-lg-4 app-logo'>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-4 brand-logos'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 copy-wright'>
                <h5>Copywright 2020 Bella Olonje.com</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer
