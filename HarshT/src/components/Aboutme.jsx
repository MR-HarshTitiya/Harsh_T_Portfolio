import React, { useEffect, useRef } from 'react'
import MYpic from '../assets/images/myp.jpg'
import { FaInstagram, FaLinkedin, FaGithub, FaDev, } from "react-icons/fa6";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
    const sectionRef = useRef(null);
    const projectsRef = useRef(null);
    const hackathonRef = useRef(null);
    const clientsRef = useRef(null);

    useEffect(() => {
        // Initialize counter lg:text-[45px] values
        if (projectsRef.current) projectsRef.current.textContent = "0";
        if (hackathonRef.current) hackathonRef.current.textContent = "0";
        if (clientsRef.current) clientsRef.current.textContent = "0";

        // Create number animation for each counter lg:text-[45px]
        const animateNumber = (ref, end, duration) => {
            const obj = { val: 0 };
            
            gsap.to(obj, {
                val: end,
                duration: duration,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".achivment",
                    start: "top center+=200",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                    // markers: true, // Enable for debugging
                },
                onUpdate: () => {
                    if (ref.current) {
                        ref.current.textContent = `${Math.floor(obj.val)}+`;
                    }
                }
            });
        };

        // Animate each counter lg:text-[45px] with different durations
        animateNumber(projectsRef, 45, 2);
        animateNumber(hackathonRef, 4, 1);
        animateNumber(clientsRef, 4, 1);

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id='about' className='flex-col  items-center flex  text-white'>
            <section className="Aboutme lg:mb-55 max-sm:mb-58">
                <div className="text lg:mr-75  ">
                    <h1 className='lg:text-5xl lg:mt-15 md:text-3xl max-sm:text-2xl max-sm:mt-[-25px]  font-[medula] uppercase'>about me</h1>
                    <h4 className='lg:text-2xl  lg:w-100 md:w-140 max-sm:text-md   font-[smoc] mt-5 capitalize max-sm:w-38'>
                        hi, i am harsh a fullstack webdeveloper,
                        <div>passionate about building end-to-end responshive web applications.</div>
                        
                    </h4>

                    <section className="achivment md:mt-3 uppercase flex gap-3 mt-11">
                        <div className="ProjectC flex flex-col items-center">
                            <span ref={projectsRef} className="counter lg:text-[65px] text-2xl font-[medula] ">0</span>
                            <span className= 'font-[medula] lg:text-2xl max-sm:text-xl'>Completed Projects</span>
                        </div>
                        <div className="Hackathon flex flex-col items-center">
                            <span ref={hackathonRef} className="counter lg:text-[65px] text-2xl font-[medula] ">0</span>
                            <span className= 'font-[medula] lg:text-2xl max-sm:text-xl'>hackathon attended</span>
                        </div>
                        <div className="Clients flex flex-col items-center">
                            <span ref={clientsRef} className="counter lg:text-[65px] text-2xl font-[medula] ">0</span>
                            <span className= 'font-[medula] lg:text-2xl max-sm:text-xl'>Clients</span>
                        </div>
                    </section>

                    <div className="Socials flex md:mt-6 max-sm:justify-center mt-8 md:gap-6 max-sm:gap-6">
                        <a href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" target="_blank"  className='lg:text-[30px] text-[25px] cursor-pointer'><FaInstagram className='hover:animate-pulse' /></a>
                        <a href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className='lg:text-[30px] text-[25px] cursor-pointer'><FaLinkedin className='hover:animate-pulse' /></a>
                        <a href="https://github.com/MR-HarshTitiya" target="_blank" className='lg:text-[30px] text-[25px] cursor-pointer'><FaGithub className='hover:animate-pulse' /></a>
                        <a href="https://dev.to/mrharshtitiya" target="_blank" className='lg:text-[30px] text-[25px] cursor-pointer'><FaDev className='hover:animate-pulse' /></a>
                    </div>
                </div>

                <div className="img relative lg:mt-[-160px] max-sm:mt-[-250px] items-center flex justify-center   transform-3d md:mt-[-95px]">
                    <img src={MYpic} alt="mypic" className="lg:w-60 lg:ml-150 md:w-33 md:ml-100 max-sm:w-30 absolute max-sm:ml-45 rounded-2xl" />
                </div>
            </section>
        </div>
    )
}

export default Aboutme