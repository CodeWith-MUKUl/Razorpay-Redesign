import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Marquee from './Components/Marquee'
import EntireText from './Components/EntireText'
import PaymentScroll from './Pages/PaymentScroll'
import Footer from '../src/Pages/Footer'

const App = () => {
  return (
    <div className='app w-full'>
      <Navbar/>
      <Home/>
      <Marquee/>
      <EntireText/>
      <PaymentScroll/>
      <Footer/>
    </div>
  )
}

export default App