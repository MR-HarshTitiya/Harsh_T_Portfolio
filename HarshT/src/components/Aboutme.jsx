import React, { useEffect, useRef } from 'react'
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
        <div id='about' className='flex flex-col items-center pt-24 pb-24 w-full bg-[#f6f4e8] overflow-hidden'>
            <h2 className="font-pixel text-6xl text-center text-[#3a3a3a] mb-12 tracking-wider font-bold">
                " About Me "
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full max-w-[95%] xl:max-w-7xl px-4 lg:px-8 justify-center items-center mt-8">
                
                {/* Text Content */}
                <div className="flex-1 flex flex-col w-full bg-white border-4 border-[#2c2c2c] shadow-[8px_8px_0px_0px_#2c2c2c] p-6 md:p-10 text-[#2c2c2c]">
                    <h3 className='font-pixel text-3xl md:text-4xl mb-6'>
                        Hi, I am Harsh, a Fullstack Web Developer.
                    </h3>
                    <p className='font-pixel text-xl md:text-2xl leading-relaxed mb-8'>
                        Passionate about building end-to-end responsive web applications.
                    </p>

                    <section className="achivment flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex-1 bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] p-4 flex flex-col items-center">
                            <span ref={projectsRef} className="counter font-pixel text-4xl md:text-5xl font-bold">0</span>
                            <span className='font-pixel text-lg md:text-xl mt-2 text-center uppercase tracking-wider'>Completed Projects</span>
                        </div>
                        <div className="flex-1 bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] p-4 flex flex-col items-center">
                            <span ref={hackathonRef} className="counter font-pixel text-4xl md:text-5xl font-bold">0</span>
                            <span className='font-pixel text-lg md:text-xl mt-2 text-center uppercase tracking-wider'>Hackathons Attended</span>
                        </div>
                        <div className="flex-1 bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] p-4 flex flex-col items-center">
                            <span ref={clientsRef} className="counter font-pixel text-4xl md:text-5xl font-bold">0</span>
                            <span className='font-pixel text-lg md:text-xl mt-2 text-center uppercase tracking-wider'>Clients</span>
                        </div>
                    </section>

                    <div className="Socials flex mt-8 gap-6 justify-center md:justify-start">
                        <a href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" target="_blank" rel="noreferrer" className='border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-14 h-14 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]'><FaInstagram className='text-3xl' /></a>
                        <a href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className='border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-14 h-14 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]'><FaLinkedin className='text-3xl' /></a>
                        <a href="https://github.com/MR-HarshTitiya" target="_blank" rel="noreferrer" className='border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-14 h-14 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]'><FaGithub className='text-3xl' /></a>
                        <a href="https://dev.to/mrharshtitiya" target="_blank" rel="noreferrer" className='border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-14 h-14 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]'><FaDev className='text-3xl' /></a>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center items-center w-full mt-12 lg:mt-0">
                    <div className="transform hover:-translate-y-2 transition-transform duration-300">
                        <img src="/about_me_pic.jpeg" alt="mypic" className="w-72 md:w-96 object-contain" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme