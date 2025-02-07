import { motion } from "framer-motion";
import mySkills from '../assets/my photo/my skills.png';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="py-20 px-8 text-[#1e293b] max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10">
      
      {/* Skills Section */}
      <div className="w-full md:w-3/5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div 
            key={index} 
            className="p-6 border text-white bg-[#1e293b] border-gray-300 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            {category.skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5 }}
                    className="h-2.5 bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <motion.img 
          src={mySkills} 
          alt="Skills Illustration" 
          className="w-full md:w-auto"
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Skills;
