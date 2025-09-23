import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaDev, FaReact, } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function Footer() {
  return (
    <>
        <div id='Contact' className="footer mt-56 bg-blue-700 text-white  rounded-t-3xl ">
            <div className=" content flex justify-center xl:gap-100 md:gap-55 max-sm:gap-10 ">
              <div className="email">
                <p className='font-[smoc] max-sm:mt-2 text-md lg:text-2xl max-sm:text-[14px] '>
                  Email :
                </p>  
                <a href="mailto:harshvyas12324@gmail.com">
                <p  className='font-[medula] lg:text-[22px] max-sm:text-[13px] mt-[-4px]'>
                  harshvyas12324@gmail.com
                </p>
                </a>
              </div>
              <div className="call max-sm:mt-2 ">
                <a href="tel:+919737130430">

                <p className='font-[smoc] lg:text-2xl max-sm:text-[14px]'>
                  Call Today :
                </p>
                <p className='font-[medula] lg:text-[22px]  max-sm:text-[13px] mt-[-4px]'>
                  +91 97371-30430
                </p>
                </a>
              </div>
              <div className="social justify-self-end max-sm:mt-2">
              <p className='font-[smoc] lg:text-2xl text-md max-sm:text-[14px]'>
                  Social :
                </p>
                  <div className="Socials flex gap-2">
                                          <a target="_blank" href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" className='max-sm:text-[13px] lg:text-[20px] cursor-pointer'><FaInstagram className='hover:animate-pulse' /></a>
                                          <a target="_blank" href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='max-sm:text-[13px] lg:text-[20px] cursor-pointer'><FaLinkedin className='hover:animate-pulse' /></a>
                                          <a target="_blank" href="https://github.com/MR-HarshTitiya" className='max-sm:text-[13px] lg:text-[20px] cursor-pointer'><FaGithub className='hover:animate-pulse' /></a>
                                          <a target="_blank" href="https://dev.to/mrharshtitiya" className='max-sm:text-[13px] lg:text-[20px] cursor-pointer'><FaDev className='hover:animate-pulse' /></a>
                                      </div>
              </div>
            
            </div>
            <hr className='max-sm:w-[95%] m-auto mt-5 border-1 rounded-4xl' />
            <div className='flex justify-center gap-15  max-sm:gap-5'>
              <p className='mt-6 px-1 lg:text-[19px] max-sm:text-[12px] font-[smoc] font-[600]'>
                © Copyright 2025. All Rights Reserved by HARSH_TITIYA
              </p>
            </div>
            <div className="techstack flex flex-col items-center mt-2">
            <p className='capitalize font-[smoc] text-[18px] font-medium mt-2'>
              Tech stack used in this portfolio :
            </p>
            <div className='flex gap-4 mt-4 mb-4 text-[22px]'>
              <FaReact className='react animate-spin ' />
              <TbBrandFramerMotion />
              <p className='italic font-bold font-[smoc] mt-[-2px]'>GSAP</p>
              <SiTailwindcss />
              <p className='mt-[-2px] text-[20px]'>react-icons</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer