import { useParams, Link } from "react-router-dom";
import { SiReact, SiTailwindcss, SiFirebase, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

const projectDetails = {
  huntify: {
    title: "Huntify",
    image: "https://i.ibb.co.com/xqh0NKMr/Screenshot-7.png",
    techStack: [SiReact, SiTailwindcss, SiFirebase, SiMongodb, SiNodedotjs, SiExpress],
    description: "A platform to discover, share, and upvote tech products like web apps, AI tools, and games.",
    liveLink: "https://huntify-375e2.web.app/",
    githubLink: "https://github.com/red-one12/huntify-c",
    challenges: [
      "Managing real-time upvotes and reviews efficiently.",
      "Ensuring a responsive and user-friendly UI."
    ],
    improvements: [
      "Adding AI-based product recommendations.",
      "Implementing a dark mode feature."
    ]
  },
  lms: {
    title: "LMS",
    image: "https://i.ibb.co.com/VYjT5Dk5/Screenshot-8.png",
    techStack: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
    description: "A website where users can browse, borrow, and return books.",
    liveLink: "https://lm-system-348d1.web.app/",
    githubLink: "https://github.com/red-one12/LMS-client",
    challenges: [
      "Implementing a seamless book reservation system.",
      "Handling large datasets for book search efficiently."
    ],
    improvements: [
      "Adding an AI-based recommendation system.",
      "Implementing an audiobook section."
    ]
  },
  vocabbee: {
    title: "VocabBee",
    image: "https://i.ibb.co.com/8nSpHtYw/Screenshot-10.png",
    techStack: [SiReact, SiFirebase, SiTailwindcss],
    description: "An online learning platform that helps users learn new languages through interactive lessons.",
    liveLink: "https://vocab-bee.netlify.app/",
    githubLink: "https://github.com/red-one12/vocab-bee",
    challenges: [
      "Ensuring an engaging and interactive learning experience.",
      "Managing user progress tracking efficiently."
    ],
    improvements: [
      "Adding AI-based personalized learning paths.",
      "Including a speech recognition feature for pronunciation practice."
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <h1 className="text-center text-2xl font-bold mt-10">Project Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto my-20">
      <img src={project.image} alt={project.title} className="rounded-lg w-full" />
      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.description}</p>

      {/* Tech Stack Section with Icons */}
      <h2 className="text-xl font-semibold mt-5">Tech Stack Used</h2>
      <div className="flex gap-4 mt-2 text-3xl">
        {project.techStack.map((Icon, index) => (
          <Icon key={index} className="text-blue-500" />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-5">Challenges Faced</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-5">Potential Improvements</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {project.improvements.map((improvement, index) => (
          <li key={index}>{improvement}</li>
        ))}
      </ul>

      <div className="flex gap-3 mt-5">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-lg">
          Live Project
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-lg">
          GitHub Repo
        </a>
      </div>

      <Link to="/" className="block text-center text-blue-600 mt-5">← Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;
