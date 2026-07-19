import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaDev, FaReact, } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function Footer() {
  return (
    <>
        <div id='Contact' className="footer bg-[#f6f4e8] text-[#2c2c2c] border-t-4 border-[#2c2c2c] pt-12 pb-6 px-4 md:px-10 flex flex-col items-center font-pixel relative z-10">
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
              
              <div className="email flex flex-col items-center md:items-start">
                <p className='text-lg md:text-xl font-bold uppercase tracking-wider mb-2'>
                  Email
                </p>  
                <a href="mailto:harshvyas12324@gmail.com" className="bg-white border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] px-4 py-2 hover:bg-[#f6f4e8] active:translate-y-1 active:shadow-none transition-all">
                  <p className='text-sm md:text-base'>
                    harshvyas12324@gmail.com
                  </p>
                </a>
              </div>

              <div className="call flex flex-col items-center md:items-start">
                <p className='text-lg md:text-xl font-bold uppercase tracking-wider mb-2'>
                  Call Today
                </p>
                <a href="tel:+919737130430" className="bg-white border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] px-4 py-2 hover:bg-[#f6f4e8] active:translate-y-1 active:shadow-none transition-all">
                  <p className='text-sm md:text-base'>
                    +91 97371-30430
                  </p>
                </a>
              </div>

              <div className="social flex flex-col items-center md:items-start">
                <p className='text-lg md:text-xl font-bold uppercase tracking-wider mb-2'>
                  Socials
                </p>
                <div className="Socials flex gap-4">
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 flex justify-center items-center text-xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'><FaInstagram /></a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 flex justify-center items-center text-xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'><FaLinkedin /></a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/MR-HarshTitiya" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 flex justify-center items-center text-xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'><FaGithub /></a>
                  <a target="_blank" rel="noreferrer" href="https://dev.to/mrharshtitiya" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 flex justify-center items-center text-xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'><FaDev /></a>
                </div>
              </div>
            
            </div>
            
            <hr className='w-full max-w-7xl mt-12 border-t-4 border-[#2c2c2c]' />
            
            <div className='flex flex-col items-center mt-6 w-full max-w-7xl'>
              <div className="techstack flex flex-col md:flex-row items-center gap-4 bg-white border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] px-6 py-4 mb-6">
                <p className='uppercase font-bold tracking-wider'>
                  Tech Stack :
                </p>
                <div className='flex gap-4 text-2xl items-center'>
                  <FaReact className='animate-[spin_4s_linear_infinite]' />
                  <TbBrandFramerMotion />
                  <p className='font-bold uppercase text-sm mt-1'>GSAP</p>
                  <SiTailwindcss />
                </div>
              </div>

              <p className='text-xs md:text-sm font-bold uppercase tracking-widest text-center'>
                © Copyright 2025. All Rights Reserved by HARSH_TITIYA
              </p>
            </div>
        </div>
    </>
  )
}

export default Footer