import React from 'react'
import { Navbar,  } from '../components'
import {About, Contacts, Footer, Skills} from '../pages'
const Homepage = () => {
  return (
    <div className='font-mono' style={{background:"#282C33"}}>
        <Navbar/>
        <About/>
        <Skills/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Homepage