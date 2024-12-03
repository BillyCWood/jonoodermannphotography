import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className='relative'>
      <Element name='hero'>
        <div className='text-center w-full flex flex-col'>
          <div className='relative w-full bg-jop-green'>
            <img 
              src='images/jono_trees-mountain-snow.jpg'
              alt='image of Montana trees and mountains with snow'
              loading='eager'
              className='w-full h-auto opacity-70'
            />
            <div className='absolute flex flex-col top-[40%] lg:top-1/4 left-1/3 md:left-1/2 text-left text-white'>
              <h1 className='max-lg:hidden lg:text-6xl alex-brush'>Jono Odermann Photography</h1>
              <p className='text-md lg:text-xl quicksand'>Framing Life's Beautiful Details</p>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero