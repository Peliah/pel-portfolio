import React from 'react'
import { Navbar,  } from '../components'
import {About, Contacts, Footer} from '../pages'
const Homepage = () => {
  return (
    <div className='font-mono' style={{background:"#282C33"}}>
        <Navbar className='font-mono' />
        <About/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Homepage