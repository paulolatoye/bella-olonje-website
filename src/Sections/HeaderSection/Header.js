import React from 'react'
import './header.css'
import Dash from '../../assets/line.png'
import AppPreview from '../../assets/apppreview.png'


function Header() {
  return (
    <div className="first-header">
        <div className='header-elements'>
            <h3 className="header-title">Food App</h3>
            <h2 className="header-desc">Why stay hungry when <br/>you can order from Bella Olonje</h2>
            <h4 className="header-inst">Download the bella olonje’s food app now on</h4>
        </div>

        <div className='header-btns'>
            <button type="button" className="btn play-store">Playstore</button>
            <button type="button" className="btn app-store">Appstore</button>
        </div>

        <div className='app-preview'>
            <img src={AppPreview} alt=""></img>
        </div>

        <div className='dash'>
          <img src={Dash} alt=""></img>
        </div>
        <h3 className='app-functn'>How the app works</h3>

    </div>
  )
}

export default Header
