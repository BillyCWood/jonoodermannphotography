import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className='relative'>
      <Element name='hero'>
        <div className='text-center w-full min-h-screen flex flex-col'>
          <div className='lg:flex-1 bg-[#09876543]'>HERO IMAGE</div>
          <div className='lg:flex-1 bg-[#01234567]'>
            Content
            <Button text={'text'} />
            </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero