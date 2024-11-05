import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';

const Services = () => {
  return (
    <section className='relative'>
      <Element name='services'>
        <div className='pt-10 text-center w-full flex items-center justify-center min-h-[70vh] bg-[#aefaef]'>
          <div className='group card card-grow'>
            <h1>Portraits</h1>
            <p className='card-grow-text'>Service description</p>
          </div>
          <div className='group card card-grow'>
            <h1>Events</h1>
            <p className='card-grow-text'>Service description</p>
          </div>
          <div className='group card card-grow'>
            <h1>Prints</h1>
            <p className='card-grow-text'>Service description</p>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Services