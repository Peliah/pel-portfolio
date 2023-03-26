import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsMedium, BsLinkedin,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  const logo = require('./../assets/logo.png')

  return (
    <footer className="flex lg:flex-row flex-col justify-between lg:items-center w-full lg:h-48 h-full cursor-pointer px-6" style={{color:"#ABB2BF"}}>
        <nav className="text-sm">
        <section className="flex justify-between items-center w-96">
            <figure className="flex items-center lg:w-24 w-28 justify-between py-3">
            <img src={logo} alt="Logo" className="w-6 h-6 lg:w-5 lg:h-5" />
            <figcaption className="font-medium text-lg text-white lg:text-base">
                Pelayah
            </figcaption>
            </figure>
        </section>
        <p className="py-3">pelepoupa@gmail.com</p>
        <p>Software Engineer and Technical Writer</p>
        </nav>
        <section className="flex flex-col lg:py-0 py-8">
        <h1 className="text-xl text-white">Media</h1>
        <figure className="flex justify-between items-center w-32 py-3">
          <Link to="https://github.com/Peliah">
            <AiFillGithub className="h-8 w-8" />
          </Link>
          <Link to="https://hashnode.com/@ForJessicasake">
            <BsMedium className="h-5 w-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/jessica-joseph-/">
            <BsLinkedin className="h-5 w-5" />
          </Link>
          <Link to="https://twitter.com/pelayah_epoupa">
            <BsTwitter className="h-5 w-5" />
          </Link>
        </figure>
      </section>
    </footer>
  )
}

export default Footer