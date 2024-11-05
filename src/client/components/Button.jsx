import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="relative border-[1px] border-jop-green w-28 h-10 flex items-center justify-center bg-gradient-to-r from-jop-green from-50% to-white to-50% bg-right-bottom transition-all ease-out duration-500 fill
    hover:bg-left-bottom hover:text-white">
        { text }
    </button>
  )
}

export default Button;