import React, { useState } from 'react';
import axios from 'axios';



const ContactForm = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const submit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/', {
                firstName,
                lastName,
                email,
                phone,
                message,
            }).then(
            console.log('SUCCESS! POSTED DATA - ',
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    message,
                }
            ))
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <form action='POST' className='w-1/2 mx-auto flex flex-col gap-y-6'>
            <div className='flex max-lg:flex-col lg:gap-x-16 max-lg:gap-y-6 justify-between'>
                <div className='flex flex-col items-start w-full lg:w-1/2'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        id='firstName'
                        placeholder='Tom'
                        required
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                        className='w-full border-[1px] border-jop-green pl-[4px]' 
                    />
                </div>
                <div className='flex flex-col items-start w-full lg:w-1/2'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        id='lastName'
                        placeholder='Holland'
                        required
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                        className='w-full border-[1px] border-jop-green pl-[4px]' 
                    />
                </div>
            </div>

            <div className='flex max-lg:flex-col lg:gap-x-16 max-lg:gap-y-6 justify-between'>
                <div className='flex flex-col items-start w-full lg:w-1/2'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        placeholder='tomholland@domain.com' 
                        required
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        className='w-full border-[1px] border-jop-green pl-[4px]'
                    />
                </div>
                <div className='flex flex-col items-start w-full lg:w-1/2'>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        id='phone'
                        placeholder='555555555'
                        required
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                        className='w-full border-[1px] border-jop-green pl-[4px]'
                    />
                </div>
            </div>
            
            <div className='flex flex-col items-start'>
                <label htmlFor='message' >Tell Me What You Want!</label>
                <textarea
                    id='message'
                    placeholder='I WANT PHOTOS!'
                    required
                    value={ message }
                    onChange={ (e) => setMessage(e.target.value) }
                    className='w-full min-h-32 border-[1px] border-jop-green px-[4px]' />
            </div>
            <input
                type='submit'
                value='Submit'
                onClick={submit}
                className='mx-auto border-[1px] border-jop-green bg-white w-28 h-10 bg-gradient-to-r from-jop-green from-50% to-white to-50% bg-right-bottom transition-all ease-out duration-500 fill
                hover:cursor-pointer hover:bg-left-bottom hover:text-white'
            />
        </form>
    )
}

export default ContactForm;