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
        className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
            {title}
        </LinkScroll>
    );

  return (
    // Mobile Nav
    <header className={clsx(
        'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 text-black',
        hasScrolled && 'py-2 bg-jop-green border-b-2 border-b-jop-gray backdrop-blur-[8px] text-white',
        )}>
        <div className='lg:hidden w-full px-10 z-2'>
            <div className='flex w-full justify-between items-center'>
                <LinkScroll to='hero' spy smooth className='cursor-pointer'>
                    <p className='alex-brush text-xl md:text-2xl'>Jono Odermann Photography</p>
                </LinkScroll>
                <button className='justify-center items-center w-10 overflow-hidden' onClick={() => setIsOpen((prevState) => !prevState)}>
                    <img src={`/images/${isOpen ? 'close-' : 'hamburger-'}${hasScrolled ? 'white' : 'black'}.svg`} className='size-3/4' />
                </button>
            </div>
            <div className={`${isOpen ? 'flex flex-col items-end float-right right-0 top-12 w-2/5' : 'hidden'}`}>
                <NavLink title={"services"} />
                <NavLink title={"portfolio"} />
                <NavLink title={"about"} />
                <NavLink title={"contact"} />
            </div>
        </div>

        {
            // Desktop Nav
        }
        <div className='hidden lg:flex w-full justify-evenly items-center h-14 px-24'>
            
            <NavLink title={"services"} />
            <div className={`dot ${ hasScrolled ? 'bg-white' : 'bg-black' }`} />
            <NavLink title={"portfolio"} />
            <div className={`dot ${ hasScrolled ? 'bg-white' : 'bg-black' }`} />
            <LinkScroll to='hero' spy smooth className='cursor-pointer'>
                <p className='alex-brush lg:text-2xl xl:text-3xl'>Jono Odermann Photography</p>
            </LinkScroll>
            <div className={`dot ${ hasScrolled ? 'bg-white' : 'bg-black' }`} />
            <NavLink title={"about"} />
            <div className={`dot ${ hasScrolled ? 'bg-white' : 'bg-black' }`} />
            <NavLink title={"contact"} />
            
        </div>
    </header>
  )
}

export default Header