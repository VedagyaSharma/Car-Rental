import React from 'react'

const ServiceCards = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100
            border-2 border-secondary hover:bg-secondary hover:text-white
            transition duration-300 ease-in-out rounded-md cursor-pointer'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p>
            So, with this classname, you're creating a flex container with 
            its children stacked vertically and centered vertically within the
            container on small screens. On medium-sized screens and larger, 
            the children will be laid out horizontally.
        </p>
    </div>
  )
}

export default ServiceCards
