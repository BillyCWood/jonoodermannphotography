import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll';
import { ContactForm } from '../components';

const Contact = () => {
  return (
    <section className='relative'>
      <Element name='contact'>
        <div className='pt-32 text-center w-full min-h-screen flex flex-col gap-y-8'>
          <div className='mx-auto border-b-2 border-jop-green'>Contact Jono Odermann</div>
          <div className='flex gap-x-2 mx-auto items-center'>
            <div className='dot bg-jop-green' />
            <p>j.odermannphoto@gmail.com</p>
            <div className='dot bg-jop-green' />
          </div>
          <ContactForm />
        </div>
      </Element>
    </section>
  )
}

export default Contact