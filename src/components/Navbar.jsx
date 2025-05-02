import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between item-center">
        <div className="logo">
            <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                
            </svg>

        </div>

        <div className='links flex gap-10'>
            {["Services", "My Work", "About Me", "Projects", "Contact"].map((item, index)=> (
                <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
                
            ))}
        </div>
    </div>
    </>
  )
}
export default Navbar