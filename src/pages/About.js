import React, { useEffect } from 'react'
import "aos/dist/aos.css"
import AOS from 'aos'
import {AiFillGithub} from 'react-icons/ai'
import {BsMedium, BsLinkedin,BsTwitter} from 'react-icons/bs'
import resume from '../assets/newCV2.pdf'


const About = () => {
    const avartar = require('./../assets/Pel.png')
    useEffect(()=>{AOS.init()})
  return (
    <header id='about' className='flex lg:flex-row flex-col lg:items-center lg:pt-36 pt-32 py-12 px-6 min-h-screen'>
        <figcaption className=" lg:w-1/2 w-full md:w-11/12" style={{color:"#ABB2BF"}}>
            <h1
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="lg:text-4xl text-4xl font-extrabold"
            >
                Hi, I'm Pelayah {" - "} a{" "}
                <span style={{color:"#C778DD"}}>Software Engineer</span>{" "}and{" "}
                <span style={{color:"#C778DD"}}>Technical Writer</span>
            </h1>
            <p className="py-6 text-sm text-justify leading-6">
                I'm passionate about creating software that makes a real difference 
                in people's lives. I love working on projects that challenge me to push the boundaries of 
                what's possible. {<br/>}
                I believe that the best software is created when clients and developers work 
                together closely, sharing ideas and working towards a common goal. 
                I believe that technology has the power to change lives for the better, 
                and I'm committed to using my skills to create software that does just that.
            </p>
            <a href={resume} download={"Pelayah_CV"}>
                <button className="mb-2 animate-bounce border border-primary h-10 w-32 hover:bg-black" style={{borderColor:"#C778DD"}}>
                    Resume
                </button>
            </a>
            <figure className="flex justify-between items-center w-32 py-1">
                <a href='https://github.com/Peliah'>
                    <AiFillGithub className='w-5 h-5'/>
                </a>
                <a href='https://linkedin.com/in/pelayah-epoupa-12830a198'>
                    <BsLinkedin className='w-5 h-5'/>
                </a>
                <a href='#Medium'>
                    <BsMedium className='w-5 h-5'/>
                </a>
                <a href='https://twitter.com/pelayah_epoupa'>
                    <BsTwitter className='w-5 h-5'/>
                </a>
            </figure>
        </figcaption>
        <figure className="lg:w-1/2 justify-center">
            <img
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                src={avartar}
                alt=""
                className="lg:h-96 h-96 lg:w-96 w-96 relative lg:left-40 left-30"
            />
        </figure>

    </header>
  )
}

export default About