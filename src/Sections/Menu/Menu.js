import React from 'react'
import './menu.css'
import FoodMenu from '../../assets/foodmenu.png'

function Menu() {
  return (
    <div className="container mt-5">
        <div className="row menu-section">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className='menu-info'>
                    <h3>Explore varieties</h3>
                    <h2>Shop for your favorites <br/>meal as e dey hot.</h2>
                    <h4>Shop for your favorite meals or drinks <br/>and enjoy while doing it.</h4>
                </div>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className='menu-img'>
                    <img src={FoodMenu} alt=""></img>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Menu
