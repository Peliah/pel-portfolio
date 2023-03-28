import React from 'react'

const Skills = () => {
  return (
    <section className="flex flex-col px-6 py-20 cursor-pointer" id="skills" style={{color:"#ABB2BF"}}>
        <section className='lg:w-1/4 w-72 pb-4' >
            <h1 className='lg:text-2xl text-xl'>
                <span className='text-pink-700'>#</span>Skills
            </h1>
            <figure></figure>
        </section>
        <section className="px-5 flex flex-col-reverse lg:flex-row justify-between pt-4">
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm w-12/12 lg:w-8/12 lg:pb-0 pb-16">
                <table
                    className="lg:w-52  w-36"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="10"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <tr>
                    <th className="border text-start px-4 h-10">Languages</th>
                    </tr>
                    <td className="border border-t-0 px-4 py-2 leading-6">
                    JavaScript TypeScript <br/> PHP <br/> Java <br/>  
                    </td>
                </table>
                <table
                    className="lg:w-52  w-36"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="10"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <tr>
                    <th className="border text-start px-4 h-10">Mark up</th>
                    </tr>
                    <td className="border border-t-0 px-4  py-2 leading-6">
                    Html <br /> XML
                    </td>
                </table>

                <table className="lg:w-52  w-36">
                    <tr>
                    <th className="border text-start px-4 h-10">Frameworks</th>
                    </tr>
                    <td className="border border-t-0 px-4 py-2 leading-6">
                    React <br /> Next <br/> React Native
                    </td>
                </table>

                <table className="lg:w-52  w-36">
                    <tr>
                    <th className="border text-start px-4 h-10">Databas Management Systems</th>
                    </tr>
                    <td className="border border-t-0 px-4  py-2 leading-6">
                    PostgreSQl <br /> MySQL <br /> SQL-Server
                    </td>
                </table>

                <table
                    className="lg:w-52  w-36"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="10"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <tr>
                    <th className="border text-start px-4 h-10">Stylesheet</th>
                    </tr>
                    <td className="border border-t-0 px-4 py-2 leading-6">
                    CSS <br /> Tailwind 
                    </td>
                </table>
                <table
                    className="lg:w-52  w-36"
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="10"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <tr>
                    <th className="border text-start px-4">Backend-as-a-service</th>
                    </tr>
                    <td className="border border-t-0 px-4 py-2 leading-6">
                    Firebase <br />
                    Supabase
                    </td>
                </table>
            </div>
        </section>
    </section>
  )
}

export default Skills