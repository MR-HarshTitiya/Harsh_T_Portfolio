import React , { useState , useEffect } from 'react'
import mypic from '../assets/images/myp.jpg'
import { motion } from 'framer-motion';

function Hero() {

const greetings = ["HI !", "नमस्ते !", "કેમ છો !"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <>
        <div className='FHT font-[medula] text-center text-[35px] flex 
            max-sm:text-[65px] max-sm:mt-3 max-sm:items-center max-sm:justify-center max-sm:flex-col 
            md:mt-33 md:justify-center
            lg:mt-50
            xl:mt-50
            
            text-white'>
            <div className='xl:mr-264 lg:mr-160  md:ml-[-310px] lg:ml-[18%] xl:ml-[37%]'>
                <p className='text-[14px] lg:mr-30  md:mr-16 mr-28 max-sm:mr-1 max-sm:text-[30px]
                    md:text-[22px] md:mb-2
                    xl:text-[35px]
                    lg:text-[27px]
                    '>
                    HARSH TITIYA
                </p>
                <p className='font-bold lg:mt-[-35px] md:mt-[-25px] xl:mt-[-45px] max-sm:mt-[-28px]
                    md:text-[60px]
                    lg:text-[90px]
                    xl:text-[100px]'>
                    FullStack
                </p>
            </div>
        </div>
            <div className="img mt-[-14px] md:mt-[-165px] lg:mt-[-260px]">
                <img id='home'
  src={mypic}
  alt="Hero"
  className="rounded-xl lg:w-55  md:w-35 max-sm:w-50 max-sm:h-80 flex m-auto "
/>
<div className='relative flex justify-center'>

<motion.div
            key={index} // triggers animation when text changes
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            
            className=" greatmasg lg:mt-[-50px] lg:mr-45 lg:w-19 lg:h-19 lg:text-[17px]  md:mt-[-45px] md:mr-30 md:w-14 md:h-14 md:text-[12px] max-sm:w-18 max-sm:h-18  rounded-full justify-center flex  absolute mr-45  mt-[-70px] max-sm:text-[13px] text-white bg-blue-700 max-sm:scale-110">
            <div className='flex   items-center font-bold'>
              {greetings[index]}
            </div>
          </motion.div>
                </div>
            </div>
            <div className='SHT lg:mt-[-80px] text-center font-[medula] md:flex md:flex-col  max-sm:mt-[-16px] text-white'>
              <div className="lg:ml-125 xl:ml-130 lg:mt-[-190px]  md:mt-[-172px] md:ml-80">

                <p className='lg:text-[100px] md:text-[60px] text-[35px] max-sm:text-[60px] font-bold'>
                    Developer
                </p>
                <p className='lg:text-[19px] lg:ml-10 lg:mt-[-18px] md:ml-1 md:mt-[-13px] md:text-[12px]  font-[smoc] font-[600] ml-1 max-sm:text-[15px]'>

                I am a MERN Stack Developer
                </p>
              </div>
            </div>
  
           
        
    </>
  )
}

export default Hero