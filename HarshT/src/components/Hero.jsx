import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { FaInstagram, FaLinkedin, FaGithub, FaDev, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

const roles = [
  "developer",
  "shopify developer",
  "frontend\ndevelopment",
  "influencer"
];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === currentWord) {
      typeSpeed = 2000;
    } else if (isDeleting && currentText === "") {
      typeSpeed = 500;
    }

    const timeoutId = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentWord.substring(0, currentText.length - 1)
            : currentWord.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="w-full min-h-screen bg-[#f6f4e8] flex flex-col items-center justify-center relative overflow-hidden pt-10 font-['VT323',_monospace]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}
      </style>

      {/* Left Wall (Social Handles) */}
      <div className="absolute left-[5%] md:left-[12%] top-[50%] -translate-y-1/2 z-10 flex flex-col items-start gap-2 md:gap-4" style={{ transform: 'rotate(5deg) skewY(-10deg)' }}>
        <h2 className="text-[#3a3a3a] text-xl sm:text-2xl md:text-5xl uppercase tracking-widest text-left drop-shadow-md">
          social<br />handles
        </h2>
        {/* Icons row to match perspective line perfectly */}
        <div className="flex flex-row gap-2 md:gap-4 mt-1 md:mt-2">
          
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaLinkedin />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MR-HarshTitiya" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dev.to/mrharshtitiya" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaDev />
          </a>
        </div>
      </div>

      {/* Right Wall (Contact Me) */}
      <div className="absolute right-[5%] md:right-[12%] top-[50%] -translate-y-1/2 z-10 flex flex-col items-end gap-2 md:gap-4" style={{ transform: 'rotate(-5deg) skewY(10deg)' }}>
        <h2 className="text-[#3a3a3a] text-xl sm:text-2xl md:text-5xl uppercase tracking-widest text-right drop-shadow-md">
          contact<br />me
        </h2>
        {/* Icons row to match perspective line perfectly */}
        <div className="flex flex-row gap-2 md:gap-4 mt-1 md:mt-2">
          <a target="_blank" rel="noreferrer" href="mailto:harshvyas12324@gmail.com" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaEnvelope />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+919737130430" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaPhone />
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/919737130430" className='bg-[#ffe56f] border-2 md:border-4 border-[#2c2c2c] shadow-[2px_2px_0px_0px_#2c2c2c] md:shadow-[4px_4px_0px_0px_#2c2c2c] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex justify-center items-center text-sm md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Floor Text (Navbar) */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
        <Nav />
      </div>

      <div className="relative z-10 flex flex-col items-center mt-6">
        {/* Yellow Whiteboard Box (Pixel Style) */}
        <div className="relative bg-[#fceb9e] border-2 md:border-4 border-[#2c2c2c] w-[200px] sm:w-[250px] md:w-[350px] h-[70px] sm:h-[90px] md:h-[120px] flex items-center justify-center shadow-[3px_3px_0px_0px_#2c2c2c] md:shadow-[6px_6px_0px_0px_#2c2c2c] z-20">
          
          {/* Perspective Wires Attached to Board */}
          <div className="absolute top-[30%] right-[100%] w-[100vw] h-[2px] md:h-[4px] bg-black origin-right rotate-[10deg] md:rotate-[15deg] -z-10"></div>
          <div className="absolute top-[30%] left-[100%] w-[100vw] h-[2px] md:h-[4px] bg-black origin-left rotate-[-10deg] md:rotate-[-15deg] -z-10"></div>

          {/* Strings connecting to ceiling (Blocky) */}
          <div className="absolute bottom-full left-[20%] w-[2px] md:w-[4px] h-[300px] bg-[#2c2c2c]"></div>
          <div className="absolute bottom-full right-[20%] w-[2px] md:w-[4px] h-[300px] bg-[#2c2c2c]"></div>

          <h1 className="text-[18px] sm:text-[24px] md:text-[40px] text-[#2c2c2c] tracking-widest mt-1 md:mt-2 uppercase whitespace-pre-line text-center leading-[1.1]">
            {currentText || '\u00A0'}
            {/* Blinking Cursor from the drawing */}
            <span className="inline-block w-[2px] md:w-[4px] h-[16px] sm:h-[20px] md:h-[35px] bg-[#2c2c2c] animate-pulse ml-1 align-baseline -mb-1"></span>
          </h1>
        </div>

        {/* Center vertical wire from board to man */}
        <div className="absolute top-[70px] sm:top-[90px] md:top-[120px] left-1/2 -translate-x-1/2 w-[2px] md:w-[4px] h-[100px] bg-[#1e293b] -z-10"></div>

        {/* Developer Desk Image */}
        <div className="relative mt-4 md:mt-8 z-10 pointer-events-none">
          
          {/* Perspective Wires Attached to Desk */}
          <div className="absolute top-[45%] right-[50%] mr-[40px] md:mr-[80px] w-[100vw] h-[2px] md:h-[4px] bg-black origin-right rotate-[-10deg] md:rotate-[-15deg] -z-10"></div>
          <div className="absolute top-[45%] left-[50%] ml-[40px] md:ml-[80px] w-[100vw] h-[2px] md:h-[4px] bg-black origin-left rotate-[10deg] md:rotate-[15deg] -z-10"></div>

          <img
            src="/bg_desktop_me-removebg-preview.png"
            alt="Developer Desk"
            className="w-[280px] sm:w-[350px] md:w-[550px] h-auto object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
