import React from 'react'

const Card = ({ id, title, about, link, technologies}) => {
  return (
    <section className="border w-80 cursor-pointer lg:hover:scale-105 mb-6" key={id}>
     <a href={link} target='_blank'>
      {/* <img src={image} alt="" /> */}
     
      <h2 className="font-bold text-justify flex items-center h-16 lg:text-sm text-sm border-t-0 border px-2 py-2">
        {title}
      </h2>
      <p className="h-36 py-2 px-2 text-justify ">{about}</p>
      
    </a>
    </section>
  )
}

export default Card