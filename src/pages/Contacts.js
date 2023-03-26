import React from 'react'
import { BsMailbox, BsTwitter } from 'react-icons/bs'

const Contacts = () => {
  return (
    <section className='flex flex-col px-6 pb-10' id='contact' style={{color:"#ABB2BF"}}>
        <section className='lg:w-1/4 w-72' >
            <h1 className='lg:text-2xl text-xl'>
                <span className='text-pink-700'>#</span>Contacts
            </h1>
            <figure></figure>
        </section>
        <section className='flex lg:flex-row flex-col justify-between text-sm' >
            <div className='w-full lg:w-6/12 lg:pb-0 pb-6 text-justify mt-4'>
                <p>
                I'm on the lookout for some new opportunities to flex my skills and expertise. 
                If you're in need of a go-getter 
                who's not afraid to roll up their sleeves and tackle any challenge, 
                feel free to shoot me a message. I'm game!
                </p>
            </div>
            <div className='w-full lg:w-3/12 leading-10 border px-4 lg:mb-0 mb-5 mt-4'>
                <h3 className='text-white'>
                    Message me here
                </h3>
                <figure className='flex w-64 justify-between items-center'>
                    <BsMailbox/>
                    pelepoupa@gmail.com
                </figure>
                <figure>
                    <a href='https://twitter.com/pelayah_epoupa' className='flex w-36 justify-between items-center'>
                        <BsTwitter/>
                        Peliah
                    </a>
                </figure>
            </div>
        </section>
        <form className='flex flex-col lg:w-6/12 w-full' >
            <section className='flex lg:flex-row flex-col  justify-between my-3'>
                <input placeholder='Name' className=' border h-10 px-2 py-2 lg:w-72 w-full' style={{background:"#282C33"}}
                name='name' required />
                <input placeholder='Email' className=' border  h-10 px-2 py-2 lg:mt-0 mt-4 lg:w-64 w-full' style={{background:"#282C33"}}
                name='email' type='email' required />
            </section>
            <input placeholder='Title' className=' border h-10 px-2 py-2 lg:w-full w-full' style={{background:"#282C33"}}
            />
            <textarea placeholder='Message'className=' border h-28 flex items-start justify-start px-2 mb-6 my-5 lg:w-full w-full' style={{background:"#282C33"}}
            name='message' required/>
            <button className="mb-2 animate-bounce border border-primary h-10 w-32 hover:bg-black" style={{borderColor:"#C778DD"}}>
                contact me !!
            </button>
        </form>
    </section>
  )
}

export default Contacts