import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import pro1 from '../assets/images/pro1.png';
import pro2 from '../assets/images/pro2.png';
import kk72k from '../assets/images/kk72k.png';
import '../Projects.scss';

const personalProjects = [
  {
    name: 'Student_test_platform',
    img: pro2,
    link: 'https://sp-student-portal.netlify.app/',
    techIcons: [<FaReact key="react" className="text-xl" />, <TbBrandFramerMotion key="framer" className="text-xl" />, <SiTailwindcss key="tailwind" className="text-xl" />, <SiFirebase key="firebase" className="text-xl" />],
    techText: 'react-icons',
    desc: 'Student_test_platform "for online mcq test for student"'
  },
  {
    name: 'RUPEE-TRACK',
    img: pro1,
    link: 'https://rupee-track-10253.web.app/',
    techIcons: [<FaReact key="react" className="text-xl" />, <TbBrandFramerMotion key="framer" className="text-xl" />, <SiTailwindcss key="tailwind" className="text-xl" />, <SiFirebase key="firebase" className="text-xl" />],
    techText: 'react-icons',
    desc: 'a expense manager & tracker "track every single ruppe"'
  },
  {
    name: 'K72 web',
    img: kk72k,
    link: 'https://k72web.vercel.app/',
    techIcons: [<FaReact key="react" className="text-xl" />, <p key="gsap" className="text-xl mt-[-5px] font-[smoc] italic font-bold">GSAP</p>, <SiTailwindcss key="tailwind" className="text-xl" />],
    techText: 'react-icons',
    desc: 'k72 website "a clone website of K72.ca agency"'
  }
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % personalProjects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + personalProjects.length) % personalProjects.length);
  };

  const project = personalProjects[currentProject];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <div id='projects' className="projects flex flex-col items-center pt-24 pb-24 w-full bg-[#f6f4e8] overflow-hidden">
      <h2 className="font-pixel text-6xl text-center text-[#3a3a3a] mb-12 tracking-wider font-bold">
        " Projects "
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full max-w-[95%] xl:max-w-7xl px-4 lg:px-8 justify-center items-start mt-8">

        {/* Personal Projects Column */}
        <div className="flex-1 flex flex-col items-center w-full space-y-4">
          <div className="bg-[#ffe56f] p-4 w-full md:w-[80%] lg:w-[90%] border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-center">
            <h3 className="font-pixel text-3xl md:text-4xl text-[#2c2c2c] tracking-widest text-center">Personal Projects</h3>
          </div>

          <div className="w-full md:w-[80%] lg:w-[90%] aspect-[12/10] sm:aspect-[14/10] md:aspect-[16/10] lg:aspect-auto lg:h-[450px] bg-white border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-between p-4 relative overflow-hidden">
            <button onClick={prevProject} className="absolute left-2 md:left-4 z-10 border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-10 h-10 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]">
              <span className="font-pixel text-2xl font-bold">{'<'}</span>
            </button>

            {/* Content area */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-1 h-full w-full flex flex-col items-center justify-center px-10 md:px-14 overflow-y-auto overflow-x-hidden no-scrollbar"
              >
                <span className="d-block text-3xl font-[medula] text-center">{project.name}</span>
                <a target="_blank" rel="noreferrer" href={project.link} className="flex justify-center my-3 hover:scale-105 transition-transform">
                  <img className='rounded-xl max-h-40 object-contain' src={project.img} alt={project.name} />
                </a>

                <p className='font-[medula] mt-2 text-2xl'>techstack :</p>
                <div className='flex gap-2 mt-1 items-center justify-center flex-wrap'>
                  {project.techIcons}
                  <p className='text-xl mt-[-5px]'>{project.techText}</p>
                </div>
                <p className='capitalize font-[smoc] text-[17px] font-[600] mt-3 text-center'>
                  {project.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <button onClick={nextProject} className="absolute right-2 md:right-4 z-10 border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-10 h-10 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]">
              <span className="font-pixel text-2xl font-bold">{'>'}</span>
            </button>
          </div>
        </div>

        {/* Office Projects Column */}
        <div className="flex-1 flex flex-col items-center w-full space-y-4">
          <div className="bg-[#ffe56f] p-4 w-full md:w-[80%] lg:w-[90%] border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-center">
            <h3 className="font-pixel text-3xl md:text-4xl text-[#2c2c2c] tracking-widest text-center">Office Projects</h3>
          </div>

          <div className="w-full md:w-[80%] lg:w-[90%] aspect-[12/10] sm:aspect-[14/10] md:aspect-[16/10] lg:aspect-auto lg:h-[450px] bg-white border-4 border-[#2c2c2c] shadow-[6px_6px_0px_0px_#2c2c2c] flex items-center justify-between p-4 relative">
            <button className="absolute left-2 md:left-4 z-10 border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-10 h-10 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]">
              <span className="font-pixel text-2xl font-bold">{'<'}</span>
            </button>

            {/* Content area */}
            <div className="flex-1 h-full w-full flex items-center justify-center px-10">
              <p className="font-pixel text-2xl text-gray-400 text-center">Coming soon...</p>
            </div>

            <button className="absolute right-2 md:right-4 z-10 border-4 border-[#2c2c2c] bg-[#ffe56f] text-[#2c2c2c] w-10 h-10 flex items-center justify-center hover:bg-[#f6dd70] active:scale-95 transition-transform shadow-[4px_4px_0px_0px_#2c2c2c]">
              <span className="font-pixel text-2xl font-bold">{'>'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
