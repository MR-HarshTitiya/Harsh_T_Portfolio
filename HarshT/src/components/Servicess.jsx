import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown, FaFigma } from "react-icons/fa6";
import { FaGithub, FaReact, FaCss3Alt, FaBootstrap, FaNode } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiCanva } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoJavascript } from "react-icons/bi";
import pixelLaptop from '../assets/images/pixel_laptop.png';

function Servicess() {
  const [isStaticOpen, setIsStaticOpen] = useState(false);
  const [isFullstackOpen, setIsFullstackOpen] = useState(false);
  return (
    <>

      <div id='services' className='flex flex-col items-center lg:pt-32 pt-20 md:pt-24 w-full bg-[#f6f4e8] pb-10'>



        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center md:items-start md:pl-12 lg:pl-24">
          <h1 className='font-pixel lg:text-6xl md:mt-5 md:text-5xl md:ml-2 text-[#3a3a3a] max-sm:text-4xl font-bold max-sm:text-center tracking-wider'>
            Things I'm good at
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="inline-block lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 ml-4 mb-2"><path d="M4 12v8h2v-8H4Zm16 8h-2v-4h2v4Zm2-4h-2v-4h2v4Zm-6-6h4v2h-6V8h2v2Zm-6 0H8V8h2v2Zm2-2h-2V6h2v2Zm6 0h-2V4h2v4Zm-4-2h-2V4h2v2Zm2-2h-2V2h2v2ZM8 20h10v2H2V10h6v10Z" /></svg>
          </h1>
          <h4 className='font-pixel lg:w-95 lg:text-3xl md:mt-4 md:w-55 md:ml-2 max-sm:text-2xl text-[#3a3a3a] max-sm:w-50 max-sm:mt-6 max-sm:text-center tracking-widest leading-8'>
            skills,tools and hobbies
          </h4>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full mt-10 md:mt-16 gap-8 md:gap-12">
            {/* Left Column (Text + Dropdowns) */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
              <h1 className='font-pixel ml-2 text-[#3a3a3a] lg:text-4xl md:text-3xl max-sm:w-64 max-sm:text-2xl leading-10 mb-8 max-sm:text-center'>
                1. hobbies 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Interface-Essential-Hierarchy-5--Streamline-Pixel" height="32" width="32" className="inline-block w-8 h-8 md:w-10 md:h-10 mx-2 mb-2">
                  <desc>Interface Essential Hierarchy 5 Streamline Icon</desc>
                  <g>
                    <path d="M24.38 19.81v-1.52h-1.53v1.52H19.8v6.09h-7.61v-3.04h-1.53v6.09h1.53v-1.52h7.61V32H32V19.81Zm6.09 10.67h-9.14v-9.15h9.14Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M22.85 22.86h6.1v6.09h-6.1Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M21.33 15.24h1.52v3.05h-1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M19.8 7.62h1.53v3.05H19.8Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M18.28 4.57h1.52v3.05h-1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M16.76 1.52h1.52v3.05h-1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M13.71 0h3.05v1.52h-3.05Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="m18.28 10.67 0 -1.53 -1.52 0 0 -3.05 -3.05 0 0 3.05 -1.52 0 0 1.53 6.09 0z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M12.19 1.52h1.52v3.05h-1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M10.66 4.57h1.53v3.05h-1.53Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M9.14 28.95h1.52v1.53H9.14Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M9.14 21.33h1.52v1.53H9.14Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="m10.66 13.71 9.14 0 0 1.53 1.53 0 0 -1.53 1.52 0 0 -3.04 -1.52 0 0 1.52 -12.19 0 0 -1.52 -1.53 0 0 3.04 1.53 0 0 1.53 1.52 0 0 -1.53z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M9.14 7.62h1.52v3.05H9.14Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M7.61 15.24h1.53v3.05H7.61Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M3.04 30.48h6.1V32h-6.1Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="m7.61 22.86 -3.04 0 0 1.52 -1.53 0 0 3.05 1.53 0 0 1.52 3.04 0 0 -1.52 1.53 0 0 -3.05 -1.53 0 0 -1.52z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="m9.14 21.33 0 -1.52 -1.53 0 0 -1.52 -1.52 0 0 1.52 -3.05 0 0 1.52 6.1 0z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M1.52 28.95h1.52v1.53H1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M1.52 21.33h1.52v1.53H1.52Z" fill="#3a3a3a" strokeWidth="1"></path>
                    <path d="M0 22.86h1.52v6.09H0Z" fill="#3a3a3a" strokeWidth="1"></path>
                  </g>
                </svg>
                : Drawing and interest in tech-related things
              </h1>
              
              <div className='flex flex-col gap-4'>
                <motion.div
                  className="service-item w-full"
              onHoverStart={() => setIsStaticOpen(true)}
              onHoverEnd={() => setIsStaticOpen(false)}
              onClick={() => setIsStaticOpen(prev => !prev)}
            >
              <motion.div
                className="service-header cursor-pointer bg-[#ffe56f] p-4 lg:w-[450px] md:w-[350px] max-sm:w-[300px] border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-between lg:gap-4 gap-2 mb-2"
                whileHover={{ backgroundColor: "#f6dd70" }}
              >
                <div className="flex items-center gap-3">
                  <h3 className="lg:text-4xl text-2xl font-pixel text-[#2c2c2c] leading-8 tracking-wider">2. Full-stack Development</h3>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Coding-Apps-Websites-Mobile--Streamline-Pixel" height="32" width="32" className="w-8 h-8 md:w-10 md:h-10">
                    <desc>Coding Apps Websites Mobile Streamline Icon</desc>
                    <g>
                      <path d="M30.48 0h-9.15v1.53h-1.52v9.14H1.52v1.52h18.29v4.58h1.52v6.09H1.52V12.19H0v13.72h1.52v-1.52h19.81v1.52h1.53v-7.62h7.62v-1.52H32V1.53h-1.52Zm-6.1 1.53h3.05v1.52h-3.05Zm6.1 13.71h-9.15V3.05h1.53v1.53h6.09V3.05h1.53Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M27.43 9.15h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M27.43 6.1h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M24.38 10.67h3.05v1.52h-3.05Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M22.86 9.15h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M22.86 6.1h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="m1.52 25.91 0 1.52 6.1 0 0 1.53 1.52 0 0 -1.53 4.57 0 0 1.53 1.53 0 0 -1.53 6.09 0 0 -1.52 -19.81 0z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M18.29 16.77h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M16.76 18.29h1.53v1.52h-1.53Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M16.76 15.24h1.53v1.53h-1.53Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M15.24 19.81h1.52v1.53h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M15.24 13.72h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="m7.62 30.48 0 -1.52 -1.52 0 0 3.04 10.66 0 0 -3.04 -1.52 0 0 1.52 -7.62 0z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M12.19 13.72h1.52v3.05h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M10.67 16.77h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M9.14 18.29h1.53v3.05H9.14Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M6.1 19.81h1.52v1.53H6.1Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M6.1 13.72h1.52v1.52H6.1Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M4.57 18.29H6.1v1.52H4.57Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M4.57 15.24H6.1v1.53H4.57Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M3.05 16.77h1.52v1.52H3.05Z" fill="#2c2c2c" strokeWidth="1"></path>
                    </g>
                  </svg>
                  <motion.div
                    animate={{ rotate: isStaticOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#2c2c2c]"
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {isStaticOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="service-content border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] bg-white mt-2 p-4 lg:w-[450px] md:w-[350px] md:ml-3 max-sm:m-auto space-y-4 max-sm:w-[300px] mb-4 text-[#2c2c2c]"
                  >
                    {[
                      <div className='flex gap-4 items-center text-4xl'>
                        <FaReact />
                        <SiTailwindcss />
                        <TbBrandFramerMotion className="text-4xl" />
                        <p className='font-pixel text-2xl font-bold tracking-widest'>GSAP</p>
                        <FaGithub />
                        <FaCss3Alt />




                      </div>,
                      <div className='flex items-center gap-4 mb-1 text-4xl flex-wrap'>
                        <BiLogoJavascript />
                        <TiHtml5 />
                        <SiMongodb />
                        <SiExpress />
                        <FaBootstrap />

                        <FaNode />
                      </div>

                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center  space-x-3 text-black"
                      >
                        <span className="text-blue-800 font-bold"></span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="service-item w-full"
              onHoverStart={() => setIsFullstackOpen(true)}
              onHoverEnd={() => setIsFullstackOpen(false)}
              onClick={() => setIsFullstackOpen(prev => !prev)}
            >
              <motion.div
                className="service-header cursor-pointer bg-[#ffe56f] p-4 lg:w-[450px] md:w-[350px] max-sm:w-[300px] border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-between lg:gap-4 gap-2 mb-2"
                whileHover={{ backgroundColor: "#f6dd70", }}
              >
                <div className="flex items-center gap-3">
                  <h3 className="lg:text-4xl text-2xl font-pixel text-[#2c2c2c] leading-8 tracking-wider">3. PC Software & Tools</h3>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Computers-Devices-Electronics-Graphic-Tablet-Draw--Streamline-Pixel" height="32" width="32" className="w-8 h-8 md:w-10 md:h-10">
                    <desc>Computers Devices Electronics Graphic Tablet Draw Streamline Icon</desc>
                    <g>
                      <path d="M30.48 5.335H32v21.33h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M1.52 26.665h28.96v1.53H1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="m28.95 3.805 -3.04 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 3.05 3.05 0 0 -1.53 1.52 0 0 -1.52 1.52 0 0 -1.52 1.53 0 0 -1.53 1.52 0 0 -1.52 1.53 0 0 -1.52 1.52 0 0 -1.53 1.52 0 0 -3.05z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M13.71 17.525h1.53v1.52h-1.53Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M12.19 11.425h1.52v1.53h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M9.14 19.045h4.57v1.53H9.14Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M10.67 12.955h1.52v1.52h-1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M9.14 9.905h3.05v1.52H9.14Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M9.14 14.475h1.53v1.52H9.14Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M7.62 15.995h1.52v3.05H7.62Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M7.62 11.425h1.52v1.53H7.62Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M6.1 12.955h1.52v1.52H6.1Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="m4.57 8.385 15.24 0 0 -1.53 -16.76 0 0 18.29 25.9 0 0 -15.24 -1.52 0 0 13.71 -22.86 0 0 -15.23z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M1.52 3.805h21.34v1.53H1.52Z" fill="#2c2c2c" strokeWidth="1"></path>
                      <path d="M0 5.335h1.52v21.33H0Z" fill="#2c2c2c" strokeWidth="1"></path>
                    </g>
                  </svg>
                  <motion.div
                    animate={{ rotate: isFullstackOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#2c2c2c]"
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {isFullstackOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="service-content border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] bg-white mt-2 p-4 lg:w-[450px] md:w-[350px] md:ml-3 max-sm:m-auto space-y-4 max-sm:w-[300px] flex mb-4 text-[#2c2c2c]"
                  >
                    {[
                      <div className='flex gap-6 items-center mb-1 mt-1 text-4xl'>

                        <SiPostman />
                        <FaFigma />
                        <SiCanva />
                      </div>
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center  space-x-1 text-black"
                      >
                        <span className="text-blue-800 font-bold"></span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="flex-col w-full md:w-1/2 flex justify-center items-center md:items-end max-sm:hidden pr-4 md:pr-12">
            <img src={pixelLaptop} alt="Pixel Art Laptop" className="lg:w-96 md:w-72 w-56 rounded-2xl" />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Servicess