import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';

const About = () => {
  return (
    <section className='relative mt-24'>
      <Element name='about'>
        <div className='pt-10 text-center w-full min-h-screen flex flex-col bg-[#01234567]'>
          <div>About</div>
        </div>
      </Element>
    </section>
  )
}

export default About