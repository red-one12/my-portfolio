import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import myProjects from '../assets/my photo/my projects.png'

const projects = [
  {
    id: "huntify",
    title: "Huntify",
    image: "https://i.ibb.co.com/xqh0NKMr/Screenshot-7.png",
    description: "A platform to discover, share, and upvote tech products like web apps, AI tools, and games.",
    liveLink: "https://huntify-375e2.web.app/",
    githubLink: "https://github.com/red-one12/huntify-c"
  },
  {
    id: "lms",
    title: "LMS",
    image: "https://i.ibb.co.com/VYjT5Dk5/Screenshot-8.png",
    description: "The Library Management System is a website where users can browse, borrow, and return books.",
    liveLink: "https://lm-system-348d1.web.app/",
    githubLink: "https://github.com/red-one12/LMS-client"
  },
  {
    id: "vocabbee",
    title: "VocabBee",
    image: "https://i.ibb.co.com/8nSpHtYw/Screenshot-10.png",
    description: "An online learning platform that helps users learn new languages through interactive lessons.",
    liveLink: "https://vocab-bee.netlify.app/",
    githubLink: "https://github.com/red-one12/vocab-bee"
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 py-10 px-5">

      <div>
        <motion.img 
                  src={myProjects} 
                  alt="Skills Illustration" 
                  className="w-full md:w-auto"
                  animate={{ scale: [1, 1.05, 1] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
      </div>


     <div className="flex flex-wrap justify-center gap-5">
     {projects.map((project, index) => (
        <motion.div
          key={index}
          className="md:w-[300px] shadow-2xl rounded-xl p-3 flex flex-col justify-between gap-2 bg-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={project.image} alt={project.title} className="rounded-lg" />
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-gray-500">{project.description}</p>
          <div className="flex justify-center gap-2">
            <a
              className="text-white w-full p-2 rounded-lg flex justify-center items-center gap-1 bg-[#1e293b]"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLiveShare />
              <p>Live</p>
            </a>
            <a
              className="text-white w-full p-2 rounded-lg flex justify-center items-center gap-1 bg-[#1e293b]"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <p>GitHub</p>
            </a>
          </div>
          <Link to={`/project/${project.id}`}>
            <button className="bg-[#1e293b] text-white p-2 rounded-lg w-full mt-2">Details</button>
          </Link>
        </motion.div>
      ))}
     </div>
    </div>
  );
};

export default Projects;
