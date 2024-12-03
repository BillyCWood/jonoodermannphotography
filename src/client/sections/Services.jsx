import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';

const Services = () => {
  return (
    <section className='relative'>
      <Element name='services'>
        <div className='text-center w-full flex flex-col items-center justify-center min-h-[35vh] text-white' /* bg-[#aefaef] */>
          
          <h1 className='text-jop-green text-xl font-[500] mb-10'>Services</h1>

          <div className='group card card-grow'>
            <img 
              src='images/ethan1.jpg'
              alt=''
              loading='lazy'
              className='w-full h-auto opacity-90 transition-transform ease-in-out duration-700
                -translate-y-32 group-hover:-translate-y-0
                md:-translate-y-64 group-hover:md:-translate-y-32
                lg:-translate-y-96 group-hover:lg:-translate-y-72
                xl:-translate-y-1/3 group-hover:xl:-translate-y-[30rem]'
            />
            
            <div className='absolute w-full translate-y-1/4'>
              <h1 className=''>Portraits</h1>
              <p className='card-grow-text'>Service description</p>
            </div>
          </div>
          
          
          <div className='group card card-grow'>
            <img 
              src='images/odermannfamilyreunioin-21.jpg'
              alt=''
              loading='lazy'
              className='w-full h-auto opacity-80 transition-transform ease-in-out duration-700
                -translate-y-1/3 
                group-hover:-translate-y-0
                group-hover:md:-translate-y-52
                group-hover:lg:-translate-y-1/4
                group-hover:xl:-translate-y-1/4'
            />

            <div className='absolute w-full translate-y-1/4'>
              <h1 className=''>Events</h1>
              <p className='card-grow-text'>Service description</p>
            </div>
          </div>
          
          
          <div className='group card card-grow'>
            <img 
              src='images/sarandy-westfall-unsplash_portrait.jpg'
              alt=''
              loading='lazy'
              className='w-full h-auto opacity-80 transition-transform ease-in-out duration-700
                -translate-y-32 group-hover:-translate-y-0
                md:-translate-y-80 group-hover:md:-translate-y-52
                lg:-translate-y-[35rem] group-hover:lg:-translate-y-1/4
                xl:-translate-y-1/2 group-hover:xl:-translate-y-1/3'
            />

            <div className='absolute w-full translate-y-1/4'>
              <h1 className=''>Prints</h1>
              <p className='card-grow-text'>Service description</p>
            </div>
          </div>


        </div>
      </Element>
    </section>
  )
}

export default Services