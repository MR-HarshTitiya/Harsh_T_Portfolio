import React from 'react'

function Nav() {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}
      </style>
      <div className="nav w-full flex justify-center font-['VT323',_monospace]">
        <ul className='flex lg:text-[28px] lg:gap-8 justify-center bg-transparent px-6 py-2 gap-4 md:gap-5 md:text-[22px] max-sm:text-[18px] items-center text-[#2c2c2c] uppercase tracking-widest'>
          <a href="#home">
            <li>
              <button className="bg-white rounded-xl border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] hover:text-[#4a4a4a] hover:bg-[#fceb9e] px-4 py-1 transition-all cursor-pointer">
                Home
              </button>
            </li>
          </a>
          <a href="#projects">
            <li>
              <button className="bg-white rounded-xl border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] hover:text-[#4a4a4a] hover:bg-[#fceb9e] px-4 py-1 transition-all cursor-pointer">
                Projects
              </button>
            </li>
          </a>
          <a href="#services">
            <li>
              <button className="bg-white rounded-xl border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] hover:text-[#4a4a4a] hover:bg-[#fceb9e] px-4 py-1 transition-all cursor-pointer">
                Services
              </button>
            </li>
          </a>
          <a href="#about">
            <li>
              <button className="bg-white rounded-xl border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] hover:text-[#4a4a4a] hover:bg-[#fceb9e] px-4 py-1 transition-all cursor-pointer">
                About
              </button>
            </li>
          </a>
          <a href="#Contact">
            <li>
              <button className='bg-[#2c2c2c] text-white rounded-xl border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#fceb9e] hover:bg-white hover:text-[#2c2c2c] hover:shadow-[4px_4px_0px_0px_#2c2c2c] px-4 py-1 transition-all cursor-pointer'>
                Contact
              </button>
            </li>
          </a>
        </ul>
      </div>
    </>
  )
}

export default Nav