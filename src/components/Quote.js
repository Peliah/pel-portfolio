import React from 'react'

const Quote = () => {
  return (
    <hgroup>
      
      <section className="flex justify-center relative">
        
        <h3 className="border border-dotted border-secondary lg:h-18 h-24 flex justify-center items-center lg:w-8/12 w-10/12 leading-8 lg:text-base md:text-sm text-xs px-1 lg:pl-0 pl-6">
            <center>
            Act as if it were impossible to fail, 
            <br/>
            For in the realm of endless possibilities lies the path to greatness.
            </center>
        </h3>
        
      </section>
      <section className="flex justify-end lg:w-10/12 w-11/12">
        <h3 className="border border-t-0 border-dotted border-secondary h-11 flex justify-center items-center lg:w-2/12 w-5/12 lg:text-base md:text-sm text-xs px-1">
          - Unknown
        </h3>
      </section>
    </hgroup>
  )
}

export default Quote