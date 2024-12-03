import { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import clsx from 'clsx';


const Header = () => {

    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
        to={title}
        offset={-62}
        spy
        smooth
        //activeClass='text-[#C72900]'
        activeClass='text-jop-gray'
        className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 px-10 py-1'>
            {title}
        </LinkScroll>
    );

  return (
    // Mobile Nav
    <header className={clsx(
        'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 text-white',
        hasScrolled && 'py-2 bg-jop-green md:shadow-md md:shadow-black backdrop-blur-[8px]',
        isOpen && 'max-lg:bg-jop-green'
        )}>
        <div className='lg:hidden w-full pl-10 z-2'>
            <div className='flex w-full justify-between items-center'>
                <LinkScroll to='hero' spy smooth className='cursor-pointer z-10'>
                    <p className='alex-brush text-xl md:text-2xl'>Jono Odermann Photography</p>
                </LinkScroll>
                <button className='justify-center items-center w-10 overflow-hidden mr-10 z-10' onClick={() => setIsOpen((prevState) => !prevState)}>
                    <img src={`/images/${isOpen ? 'close-' : 'hamburger-'}white.svg`} className='size-3/4' />
                </button>
            </div>
            <div className={`${isOpen ? 'flex flex-col items-end float-right right-0 top-12  text-white bg-jop-green w-screen h-screen' : 'hidden'}`}>
                <div className='flex flex-col items-end float-right z-10'>

                    <NavLink title={"services"} />
                    <NavLink title={"portfolio"} />
                    <NavLink title={"about"} />
                    <NavLink title={"contact"} />
                </div>

                <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
                    <img src='/images/bg-outlines.svg' width={960} height={380} alt='outline' className='relative z-[2]' />
                    <img src='/images/bg-outlines-fill.png' width={960} height={380} alt='outline' className='absolute inset-0 mix-blend-soft-light opacity-5' />
                </div>
            </div>
        </div>

        {
            // Desktop Nav
        }
        <div className='hidden lg:flex w-full justify-evenly items-center h-14 px-24'>
            
            <NavLink title={"services"} />
            <div className={`dot bg-white`} />
            <NavLink title={"portfolio"} />
            <div className={`dot bg-white`} />
            <LinkScroll to='hero' spy smooth className={clsx(!hasScrolled && 'hidden','cursor-pointer')}>
                <p className='alex-brush lg:text-2xl xl:text-3xl lg:max-[1075px]:translate-x-10'>Jono Odermann Photography</p>
            </LinkScroll>
            <div className={`dot ${ hasScrolled ? 'bg-white' : 'hidden' }`} />
            <NavLink title={"about"} />
            <div className={`dot bg-white`} />
            <NavLink title={"contact"} />
            
        </div>
    </header>
  )
}

export default Header