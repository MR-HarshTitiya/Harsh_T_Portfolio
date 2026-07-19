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

      {/* 3D POV Perspective Lines & Cables */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        {/* Original Light Perspective Lines (Behind) */}


        {/* Wires tracing the perspective lines (as drawn by user) */}
        {/* Left wire from board */}
        <line x1="0" y1="25%" x2="calc(50% - 115px)" y2="35%" stroke="black" strokeWidth="4" strokeLinecap="square" />
        {/* Right wire from board */}
        <line x1="100%" y1="25%" x2="calc(50% + 115px)" y2="35%" stroke="black" strokeWidth="4" strokeLinecap="square" />
        {/* Left wire from desk */}
        <line x1="0" y1="90%" x2="calc(50% - 30px)" y2="70%" stroke="black" strokeWidth="4" strokeLinecap="square" />
        {/* Right wire from desk (Red) */}
        <line x1="100%" y1="90%" x2="calc(50% + 30px)" y2="70%" stroke="black" strokeWidth="4" strokeLinecap="square" />
      </svg>

      {/* Left Wall (Social Handles) */}
      <div className="absolute left-[8%] md:left-[12%] top-[50%] -translate-y-1/2 z-10 flex flex-col items-start gap-4" style={{ transform: 'rotate(5deg) skewY(-10deg)' }}>
        <h2 className="text-[#3a3a3a] text-3xl md:text-5xl uppercase tracking-widest text-left drop-shadow-md">
          social<br />handles
        </h2>
        {/* Icons row to match perspective line perfectly */}
        <div className="flex flex-row gap-4 mt-2">
          
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/harshvyas_25/?igsh=cXM3emFtcjdvaG1u#" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mr-titiya-harsh-4b6a55286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaLinkedin />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MR-HarshTitiya" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dev.to/mrharshtitiya" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaDev />
          </a>
        </div>
      </div>

      {/* Right Wall (Contact Me) */}
      <div className="absolute right-[8%] md:right-[12%] top-[50%] -translate-y-1/2 z-10 flex flex-col items-end gap-4" style={{ transform: 'rotate(-5deg) skewY(10deg)' }}>
        <h2 className="text-[#3a3a3a] text-3xl md:text-5xl uppercase tracking-widest text-right drop-shadow-md">
          contact<br />me
        </h2>
        {/* Icons row to match perspective line perfectly */}
        <div className="flex flex-row gap-4 mt-2">
          <a target="_blank" rel="noreferrer" href="mailto:harshvyas12324@gmail.com" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaEnvelope />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+919737130430" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
            <FaPhone />
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/919737130430" className='bg-[#ffe56f] border-4 border-[#2c2c2c] shadow-[4px_4px_0px_0px_#2c2c2c] w-12 h-12 md:w-14 md:h-14 flex justify-center items-center text-xl md:text-2xl hover:bg-[#f6dd70] active:translate-y-1 active:shadow-none transition-all'>
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
        <div className="relative bg-[#fceb9e] border-4 border-[#2c2c2c] w-[350px] h-[120px] flex items-center justify-center shadow-[6px_6px_0px_0px_#2c2c2c] z-20">
          {/* Strings connecting to ceiling (Blocky) */}
          <div className="absolute bottom-full left-[20%] w-[4px] h-[300px] bg-[#2c2c2c]"></div>
          <div className="absolute bottom-full right-[20%] w-[4px] h-[300px] bg-[#2c2c2c]"></div>

          <h1 className="text-[32px] md:text-[40px] text-[#2c2c2c] tracking-widest mt-2 uppercase whitespace-pre-line text-center leading-[1.1]">
            {currentText || '\u00A0'}
            {/* Blinking Cursor from the drawing */}
            <span className="inline-block w-[4px] h-[28px] md:h-[35px] bg-[#2c2c2c] animate-pulse ml-1 align-baseline -mb-1"></span>
          </h1>
        </div>

        {/* Center vertical wire from board to man */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[4px] h-[100px] bg-[#1e293b] -z-10"></div>

        {/* Developer Desk Image */}
        <div className="relative mt-8 z-10 pointer-events-none">
          <img
            src="/bg_desktop_me-removebg-preview.png"
            alt="Developer Desk"
            className="w-[550px] h-auto object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
