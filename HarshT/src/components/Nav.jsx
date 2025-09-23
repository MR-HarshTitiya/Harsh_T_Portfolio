import React from 'react'
import mypImage from '/src/assets/images/mypc.jpeg'

function Nav() {
  return (
    <>
      <div className="nav sticky z-1  mt-2 top-1 overflow-hidden font-[medula]  ">
        <ul className='flex  lg:text-[21px] lg:w-120 lg:h-14 lg:gap-9 justify-center bg-white gap-3 py-2  rounded-4xl  md:w-79 md:h-11 md:gap-5 md:text-[14px] max-sm:text-[17px]  max-sm:w-78 max-sm:h-13   m-auto items-center  '>
          <li>
            <img id='navb' src={mypImage} alt="" className="lg:w-12 lg:h-12 mr-auto w-11 h-11 rounded-full border-[0.5px] border-gray-400 md:w-10 md:h-10" />
          </li>
          <a href="#home">

            <li  >
              <button
                class="hover:text-blue-700 group cursor-pointer"
              >
                <div class="relative overflow-hidden">
                  <p
                    class="group-hover:-translate-y-8 mt-2 duration-[1.110s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    Home
                  </p>
                  <p
                    class="absolute top-7 left-0 mt-2 group-hover:top-0 duration-[1.110s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    Home
                  </p>
                </div>
              </button>
            </li>
          </a>
          <a href="#projects">
            <li >


              <button
                class="hover:text-blue-700 group cursor-pointer "
              >
                <div class="relative overflow-hidden ">
                  <p
                    class="group-hover:-translate-y-8 mt-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    ProJects
                  </p>
                  <p
                    class="absolute top-7 mt-2 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    ProJects
                  </p>
                </div>
              </button></li>
          </a>


          <li>
            <a href="#services">

            <button
              class="hover:text-blue-700 group cursor-pointer"
              >
              <div class="relative overflow-hidden">
                <p
                  class="group-hover:-translate-y-8 mt-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  Services
                </p>
                <p
                  class="absolute top-7 left-0 mt-2 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  Services
                </p>
              </div>
            </button>
                  </a>
            </li>

          <li>
            <a href="#about">

            <button
              class="hover:text-blue-700 group cursor-pointer "
            >
              <div class="relative overflow-hidden">
                <p
                  class="group-hover:-translate-y-8 mt-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  About
                </p>
                <p
                  class="absolute top-7 left-0  mt-2 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                  About
                </p>
              </div>
            </button>
                  </a>
          </li>

          <li className='cc lg:py-2 lg:px-4 ml-2  bg-blue-700  rounded-3xl py-2 px-3 text-white cursor-pointer'><a href="#Contact">Contact</a></li>


        </ul>
      </div>
    </>
  )
}

export default Nav