import React from 'react'
import './usersection.css'
import Profile from '../../assets/userpage.png'

function UserSection() {
  return (
    <div className="container mt-5">
        <div className="row user-section">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className='user-page-img'>
                    <img src={Profile} alt=""></img>
                </div>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className='user-page-info'>
                    <h3>Create an account</h3>
                    <h2>Create/login to an existing <br/>account to get started</h2>
                    <h4>An account is created with your email <br/>and a desired password</h4>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default UserSection
