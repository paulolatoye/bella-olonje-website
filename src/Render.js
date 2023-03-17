import React from 'react'
import Nav from './Sections/Navigation/Nav'
import Header from './Sections/HeaderSection/Header'
import UserSection from './Sections/UserSection/UserSection'
import MenuSection from './Sections/Menu/Menu'
import Payments from './Sections/Payments/Payment'
import Download from './Sections/Download/Download'
import Footer from './Sections/Footer/Footer'

function Render() {
  return (
    <div>
      <Nav />
      <Header />
      <UserSection />
      <MenuSection />
      <Payments />
      <Download />
      <Footer />
    </div>
  )
}

export default Render
