import aboutMe from '../assets/my photo/about me.png';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="py-20 px-8 text-[#1e293b] max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        
       
        <motion.div 
          className='w-full md:w-2/5 flex justify-center'
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={aboutMe} alt="About Me" className="w-full md:w-auto" />
        </motion.div>

    
        <div className='w-full md:w-3/5'>
          <h1 className='text-2xl font-bold'>My Programming Journey</h1>
          <p className="text-md mb-5 text-gray-500">
            Hello! 👋 I am <span className="font-bold">Radoan Ahmed</span>, a passionate Full-Stack Developer currently pursuing my <span className='font-bold'>Bachelor’s in CSE at Daffodil International University</span>. My journey into programming started with curiosity about how websites work, and over time, I have honed <span className='font-bold'>my skills in HTML, CSS, JavaScript, React, Tailwind CSS, Firebase, MongoDB, NodeJS, ExpressJS and more</span>.
          </p>

          <h1 className='text-2xl font-bold'>The type of work I enjoy</h1>
          <p className="text-md mb-5 text-gray-500">
            I enjoy working on <span className='font-bold'>innovative web applications</span> that solve real-world problems. Whether it is crafting sleek front-end interfaces or building robust back-end systems, I find joy in the <span className='font-bold'>problem-solving</span> aspect of development. Recently, I’ve worked on projects like <span className='font-bold'>Huntify, LMS, VISA</span>. 🚀
          </p>

          <h1 className='text-2xl font-bold'>Hobbies</h1>
          <p className="text-md mb-5 text-gray-500">
            When I’m not coding, you can find me exploring <span className='font-bold'>new tech trends, watching sci-fi movies, or brainstorming ideas for my next project</span>. I also have a keen interest in <span className='font-bold'>AI and Machine Learning</span>.
          </p>

          <p className="text-md text-gray-500">
            I believe in <span className='font-bold'>continuous learning, discipline, and focus</span>, and I’m always eager to collaborate on exciting projects. Let’s build something amazing together! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
