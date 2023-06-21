import React, {useState} from 'react'
import ExperienceSection from '../components/ExperienceSection'
import experience from './../assets/experience.json'
import factory from './../assets/factory.svg'

const Experience = () => {
    const [experiences, setExperiences] = useState(experience)
  return (
    <section className='flex flex-col px-6 cursor-pointer' id='experience'style={{color:"#ABB2BF"}}>
        <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
            <h1 className="lg:text-2xl text-xl">
                <span className="text-pink-700 ">#</span>Experience
            </h1>
        {/* <figure className="pl-4">
          <img src={stroke} alt="line" className="w-36" />
        </figure> */}
        </section>
        <section className='flex flex-col'>
            {experiences && experiences.map((experience, id)=>(
                <div className='py-8'>
                    <ExperienceSection
                    key={id}
                    image={experience.image || factory}
                    title={experience.title}
                    position={experience.position}
                    company={experience.company}
                    date={experience.date}/>
                </div>
            )).reverse()}
        </section>
    </section>
  )
}

export default Experience