import React from 'react'
import clsx from 'clsx';

const StyledImage = ({ src, className, ...rest }) => {
  return (
    <img  src={src} className={clsx('hover:shadow-lg hover:shadow-jop-green transition-shadow ease-in-out duration-300', className)} { ...rest } />
  )
}

export default StyledImage;