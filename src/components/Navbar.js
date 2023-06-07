import React, { useState } from 'react'
import {GiCancel} from 'react-icons/gi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
const Navbar = () => {
  const logo = require('./../assets/logo.png')
  const [nav, setNav] = useState(false)
  const navClose = () => {setNav(!nav)}
  return (
    <nav className='flex justify-between items-center lg:h-20 h-20 border-20 bg-background cursor-pointer fixed w-full 2xl:mx-auto 2xl:container z-20' >
        <section className='flex justify-between w-full items-center px-6' >
            <figure className='flex items-center lg:w-24 w-28 justify-between'>
                <img src={logo} alt='Logo' className='w-8 h-8 lg:w-7 lg:h-7'/>
                <figcaption className='font-medium text-lg  lg:text-base'>
                  Pelayah
                </figcaption>
            </figure>
            {
              nav ?
              (<GiCancel
                alt='cancel' 
                className='w-6 h-6 lg:hidden block mr-4 ' 
                onClick={navClose}
              />):
              (<HiOutlineMenuAlt3
                alt="menu"
                className="w-6 h-6 lg:hidden block mr-4"
                onClick={navClose}
              />)}
        </section>
        <ul 
          style={{background:"#282C33"}}
          onClick={navClose}
          className={`${nav ? "block" : "hidden"}
            px-10 z-50 text-secondary absolute lg:text-sm lg:static lg:flex lg:flex-row lg:h-0 lg:top-0 h-96 top-20 py-8 lg:py-0 bg-background w-full flex flex-col  justify-between`}>
          <li>
          <a href="#about" className="text-portfolio-secondary active:text-white">
            <span className="text-pink-700">#</span>about-me
          </a>
        </li>
        <li>
          <a className="active:text-white text-portfolio-secondary" href="#skills">
            <span className="text-pink-700">#</span>skills
          </a>
        </li>
        <li>
          <a className="active:text-white text-portfolio-secondary" href="#experience">
            <span className="text-pink-700">#</span>experience
          </a>
        </li>

        <li>
          <a className="active:text-white text-portfolio-secondary" href="#project">
            <span className="text-pink-700">#</span>project
          </a>
        </li>
        <li>
          <a className="active:text-white text-portfolio-secondary" href="#publications">
            <span className="text-pink-700">#</span>publications
          </a>
        </li>
        <li>
          <a className="active:text-white text-portfolio-secondary" href="#contact">
            <span className="active:text-pink-700 text-pink-700">#</span>contact
          </a>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar