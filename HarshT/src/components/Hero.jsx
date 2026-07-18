import React from 'react'

function Hero() {
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

      {/* Left Wall Text (Social Handles) */}
      <div className="absolute left-[10%] top-[45%] -translate-y-1/2 z-10" style={{ transform: 'rotate(-15deg) skewY(-10deg)' }}>
        <h2 className="text-[#3a3a3a] text-3xl md:text-5xl uppercase tracking-widest text-center drop-shadow-md">
          social<br/>handles
        </h2>
      </div>

      {/* Right Wall Text (Contact Me) */}
      <div className="absolute right-[15%] top-[45%] -translate-y-1/2 z-10" style={{ transform: 'rotate(15deg) skewY(10deg)' }}>
        <h2 className="text-[#3a3a3a] text-3xl md:text-5xl uppercase tracking-widest text-center drop-shadow-md">
          contact<br/>me
        </h2>
      </div>

      {/* Floor Text (Navbar) */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10">
        <h2 className="text-[#3a3a3a] text-3xl md:text-4xl uppercase tracking-[0.3em]">
          Navbar
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-6">
        
        {/* Yellow Whiteboard Box (Pixel Style) */}
        <div className="relative bg-[#fceb9e] border-4 border-[#2c2c2c] w-[350px] h-[120px] flex items-center justify-center shadow-[6px_6px_0px_0px_#2c2c2c] z-20">
          {/* Strings connecting to ceiling (Blocky) */}
          <div className="absolute bottom-full left-[20%] w-[4px] h-[300px] bg-[#2c2c2c]"></div>
          <div className="absolute bottom-full right-[20%] w-[4px] h-[300px] bg-[#2c2c2c]"></div>

          <h1 className="text-[60px] text-[#2c2c2c] tracking-widest mt-2 uppercase relative">
            developer
            {/* Blinking Cursor from the drawing */}
            <span className="absolute -right-[20px] top-[10px] w-[4px] h-[50px] bg-[#2c2c2c] animate-pulse"></span>
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
