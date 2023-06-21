import React from 'react'
import { Navbar,  } from '../components'
import {About, Contacts, Footer, Skills, Project, Quote, Experience, Publications} from '../pages'
const Homepage = () => {
  return (
    <div className='font-mono 2xl:container 2xl:mx-auto bg-background font-font text-secondary px-2 overflow-x-hidden' style={{color:"#FFFFFF", background:"#282C33"}}>
        <Navbar/>
        <About/>
        <Quote/>
        <Skills/>
        <Experience/>
        <Project/>
        <Publications/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Homepage