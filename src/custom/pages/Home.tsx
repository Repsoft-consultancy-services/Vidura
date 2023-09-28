import React from 'react'
import Header from '../components/home/Header'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Experties from '../components/home/Experties'
import ContactUs from '../components/home/ContactUs'
import Gallary from '../components/home/Gallary'

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <div id='services' className='tw-mt-28'>
        <Services />
      </div>
      <div id='experties' className='tw-mt-28'>
        <Experties />
      </div>
      <div className='tw-mt-28'>
        <Gallary />
      </div>
      <div id='contact' className='tw-my-28'>
        <ContactUs />
      </div>
    </div>
  )
}
