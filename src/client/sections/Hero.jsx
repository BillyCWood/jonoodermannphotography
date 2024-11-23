import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className='relative'>
      <Element name='hero'>
        <div className='text-center w-full min-h-screen flex flex-col'>
          <div className='relative w-full bg-[#09876543]'>
            <img 
              src='../public/images/jono_trees-mountain-snow.jpg'
              alt='image of Montana trees and mountains with snow'
              loading='eager'
              className='w-full h-auto'
            />
            <div className='absolute top-1/4 left-1/2 text-left text-white'>
              <h1 className='text-6xl alex-brush'>Jono Odermann Photography</h1>
              <p className='text-xl quicksand'>Framing Life's Beautiful Details</p>
            </div>
          </div>
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