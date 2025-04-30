import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-8'>
        <div className="logo">
            <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                
            </svg>

        </div>

        <div className='links'>
            {["Services", "My Work", "About Me", "Projects"].map((item, index)=> (
                <a key={index} className='text-md font-semibold'>{item}</a>

            ))}
        </div>
    </div>
  )
}
export default Navbar