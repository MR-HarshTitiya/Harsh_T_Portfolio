import React from 'react'
import { FaDownload } from "react-icons/fa6";

function Cv() {
  // Function to handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/HARSH_T.pdf"; // Correct path to public PDF
    link.download = 'HARSH_T.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="fixed lg:top-125 lg:mr-5 md:mt-5 md:top-120 max-sm:top-125 z-1 max-sm:mt-10 flex justify-self-end mr-1 max-sm:scale-90">
        <div className="relative w-20 h-20 ">
          {/* Spinning ring */}
          <div className=" absolute  inset-0 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-2 border-dashed border-[#ffffff] animate-spin" />
          </div>

          {/* Button */}
          <div className="relative  z-10 flex items-center justify-center w-full h-full">
            <button
              onClick={handleDownload}
              className="bg-white cursor-pointer py-4 px-4 border-none rounded-full uppercase flex flex-col items-center justify-center shadow"
            >
              <p className="font-[smoc] text-[15px] font-[600]">Resume</p>
              <FaDownload className="mt-1 text-blue-700 animate-bounce text-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cv
