import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiTailwindcss , SiFirebase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import pro1 from '../assets/images/pro1.png'
import pro2 from '../assets/images/pro2.png'
import kk72k from '../assets/images/kk72k.png'
import {FaReact } from "react-icons/fa6";
import '../Projects.scss'; 

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let cards = gsap.utils.toArray(".stackCard");
    let stickDistance = 0;

    let firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center"
    });

    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length-1],
      start: "center center"
    });

    cards.forEach((card, index) => {
      var scale = 1 - (cards.length - index) * 0.025;
      let scaleDown = gsap.to(card, {
        scale: scale,
        'transform-origin': '"70% '+ (lastCardST.start + stickDistance) +'"'
      });

      ScrollTrigger.create({
        trigger: card,
        
        end: () => lastCardST.start + stickDistance,
        pin: true,
        
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
        
      });
    });

    // Cleanup function to kill ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <>
    <div id='projects' className="projects flex flex-col  items-center text-white  ">

      <section className="spacer  flex "></section>
        <h2 className="cardStacking__header font-[medula] text-6xl text-center lg:text-[55px] md:text-3xl max-sm:mt-[-60px] uppercase max-sm:text-4xl font-bold">Projects</h2>
      <section className="cardStacking rounded-[80px]  " ref={containerRef}>
        
        <div className="container items-center mt-[-25px] ">
            <div className="stackCard d-flex align-items-center w-6xl justify-content-between bg-blue-700   lg:w-200 md:w-160 max-sm:w-76">
              <div className="stackCard__body w-fit d-flex align-items-center justify-content-between">
                <span className="stackCard__body-content-header d-block text-3xl font-[medula] ">Student_test_platform</span>
                <a target="_blank" href="https://sp-student-portal.netlify.app/">

                <img className='rounded-xl mt-3' src={pro2} alt="" />
                </a>
                
                  <p className='font-[medula] mt-3 text-2xl'>techstack :</p>
                  <div className='techstack flex gap-1 mt-1 '>
                  <FaReact className='react text-xl ' />
                  <TbBrandFramerMotion className='text-xl' />
                  <SiTailwindcss   className='text-xl' />
                  <SiFirebase className='text-xl'/>
                  <p className='text-xl mt-[-5px]'>react-icons</p>  
                  

                </div>

                <p className=' capitalize font-[smoc] text-[17px] font-[600] mt-3'>Student_test_platform "for online mcq test for student"  </p>
              </div>
            </div>
          
          <div className="cardStacking__cards  ">
            <div className="stackCard d-flex align-items-center w-6xl justify-content-between  bg-white text-black lg:w-200 md:w-160 max-sm:w-76 " >
              <div className="stackCard__body  w-fit d-flex align-items-center justify-content-between">
                <span className="stackCard__body-content-header d-block text-3xl font-[medula] ">RUPEE-TRACK</span>
                <a target="_blank" href="https://rupee-track-10253.web.app/">

                <img className='rounded-xl mt-3 w-auto' src={pro1} alt="" />
                </a>
                
                  <p className='font-[medula] mt-3 text-2xl'>techstack :</p>
                  <div className='techstack flex gap-1 mt-1 '>
                  <FaReact className='react text-xl ' />
                  <TbBrandFramerMotion className='text-xl' />
                  <SiTailwindcss   className='text-xl' />
                  <SiFirebase className='text-xl'/>
                  <p className='text-xl mt-[-5px]'>react-icons</p>  
                  

                </div>
                <p className=' capitalize font-[smoc] text-[17px] font-[600] mt-3'>a expense manager & tracker "track every single ruppe"  </p>
              </div>
            </div>


            <div className="stackCard d-flex align-items-center w-6xl justify-content-between bg-blue-700 lg:w-200 md:w-160 max-sm:w-76" >
              <div className="stackCard__body w-fit d-flex align-items-center justify-content-between">
                <span className="stackCard__body-content-header d-block text-3xl font-[medula] ">K72 web</span>
                <a target="_blank" href="https://k72web.vercel.app/">

                <img className='rounded-xl mt-3 w-auto' src={kk72k} alt="" />
                </a>
                
                  <p className='font-[medula] mt-3 text-2xl'>techstack :</p>
                  <div className='techstack flex gap-1 mt-1 '>
                  <FaReact className='react text-xl ' />
                  <p className='text-xl mt-[-5px] font-[smoc] italic font-bold'>GSAP</p>  
                  <SiTailwindcss   className='text-xl' />
                 
                  <p className='text-xl mt-[-5px]'>react-icons</p>  
                  

                </div>
                <p className=' capitalize font-[smoc] text-[17px] font-[600] mt-3'>k72 website"a clone website of K72.ca agency"  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spacer"></section>
    </div>
    </>
  );
}

export default Projects;
