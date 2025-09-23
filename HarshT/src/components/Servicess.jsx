import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown, FaFigma } from "react-icons/fa6";
import {  FaGithub, FaReact,FaCss3Alt,FaBootstrap,FaNode } from "react-icons/fa6";
import { SiTailwindcss,SiMongodb,SiExpress,SiPostman,SiCanva } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoJavascript } from "react-icons/bi";
import web from "../assets/images/web.jpg";

function Servicess() {
    const [isStaticOpen, setIsStaticOpen] = useState(false);
    const [isFullstackOpen, setIsFullstackOpen] = useState(false);
    return (
        <>
        
            <div id='services'  className='flex flex-col items-center lg:mt-78 mt-55 lg:mb-15 md:mt-38'>
             
  

                <div >
                    <h1 className='font-[medula] lg:text-[60px] md:mt-5 md:text-3xl md:ml-2 text-white max-sm:text-4xl font-bold  max-sm:text-center'>
                        Things I'm good at
                    </h1>
                    <h4 className='lg:w-95 lg:text-[21px] md:mt-4 md:w-55 md:ml-2 max-sm:text-[14px] text-white font-[smoc] max-sm:w-50 max-sm:mt-6 max-sm:text-center'>
                        skills,tools and hobbies
                        

                    </h4>
                    <h1 className='font-[medula] ml-2 mt-4 text-white lg:text-3xl md:w-60 md:text-xl max-sm:w-55 max-sm:text-xl'>1. hobbies : Drawing and interest in Tech related things </h1>
                    <img  src={web} alt="" className="lg:mt-[-160px] lg:ml-120 lg:w-50 md:w-35 md:ml-85 md md:mt-[-120px] max-sm:mt-[-35px]  rounded-2xl flex max-sm:hidden" />
                    <div className=' subs lg:mt-2 max-sm:mt-4 '>          
                        <motion.div 
                                    className="service-item md:mt-[-90px] lg:mt-[-140px]  lg:w-5"
                                    onHoverStart={() => setIsStaticOpen(true)}
                                    onHoverEnd={() => setIsStaticOpen(false)}
                                    onClick={() => setIsStaticOpen(prev => !prev)}
                                  >
                                    <motion.div 
                                      className="service-header cursor-pointer bg-[#193cb8] p-2 lg:w-71 md:w-52  rounded-lg flex items-center lg:gap-3 gap-2 "
                                      whileHover={{ backgroundColor: "#00000" }}
                                    >
                                      <h3 className="lg:text-3xl text-xl font-[medula] text-white">2. FullStack Developement</h3>
                                      <motion.div
                                        animate={{ rotate: isStaticOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white"
                                      >
                                        <FaAngleDown />
                                      </motion.div>
                                    </motion.div>
                        
                                    <AnimatePresence>
                                      {isStaticOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.3, ease: "easeInOut" }}
                                          className="service-content font-medium lg:text-[25px] md:text-[15px] text-[11px] max-sm:text-[14px]   font-[smoc] lg:w-68 md:w-45 md:ml-3 max-sm:m-auto bg-[#ffffff] mt-2 p-2   rounded-lg space-y-1 max-sm:w-45 "
                                        >
                                          {[
                                            <div className='flex gap-3 items-center '>
                                            <FaReact/>
                                            <SiTailwindcss/>
                                            <TbBrandFramerMotion/>
                                            <p className='font-[medula] italic font-bold '>GSAP</p>
                                            <FaGithub/>
                                            <FaCss3Alt/>
                                            
                                            
                                            

                                            </div>,
                                            <div className='flex items-center gap-3 mb-1'>
                                              <BiLogoJavascript/>
                                              <TiHtml5/>
                                            <SiMongodb/>
                                            <SiExpress />
                                            <FaBootstrap/>
                                            
                                            <FaNode/>
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
                                    className="service-item lg:mt-2 lg:w-5"
                                    onHoverStart={() => setIsFullstackOpen(true)}
                                    onHoverEnd={() => setIsFullstackOpen(false)}
                                    onClick={() => setIsFullstackOpen(prev => !prev)}
                                  >
                                    <motion.div 
                                      className="service-header cursor-pointer bg-[#193cb8] lg:w-68 md:w-52  p-2 rounded-lg flex items-center gap-4"
                                      whileHover={{ backgroundColor: "#00000", }}
                                    >
                                      <h3 className="lg:text-3xl text-xl font-[medula] text-white">3. PC Software & Tools</h3>
                                      <motion.div
                                        animate={{ rotate: isFullstackOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white"
                                      >
                                        <FaAngleDown />
                                      </motion.div>
                                    </motion.div>
                        
                                    <AnimatePresence>
                                      {isFullstackOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.3, ease: "easeInOut" }}
                                          className="service-content font-medium lg:text-[25px] md:text-[16px] text-[11px] max-sm:text-[14px] flex font-[smoc] lg:w-35 md:w-38 md:ml-3 max-sm:m-auto bg-[#ffffff] mt-2 p-2 rounded-lg space-y-3 max-sm:w-45 "
                                        >
                                          {[
                                            <div className='flex gap-5 items-center mb-1 mt-1'>

                                            <SiPostman />
                                            <FaFigma/>
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
            </div>
        </>
    )
}

export default Servicess