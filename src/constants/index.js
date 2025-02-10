import { GiThumbUp } from "react-icons/gi";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";


export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With experience in a wide array of technologies, I excel in both frontend and backend development. I aim to leverage my expertise to deliver innovative solutions that enhance user experience and drive business success.`;

export const ABOUT_TEXT = `As a dedicated final-year BTech student in ECE, I have cultivated a strong foundation in full-stack web development. Proficient in technologies like React, Node.js, and MongoDB, I have a keen interest in building efficient and user-friendly web applications. My journey in tech began with curiosity and has evolved into a deep commitment to continuous learning and problem-solving. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "july'2024 - October'2024",
    role: "Full Stack Developer Intern",
    company: "Zudio",
    description: `Worked on developing scalable backend solutions using Node.js and MongoDB. Collaborated with frontend teams to implement dynamic user interfaces with React. Gained valuable experience in building RESTful APIs and optimizing application performance.`,
    technologies: [ "HTML","CSS", "JavaScript", "React", "Node.js", "MongoDB","Express.js",],
  },
  {
    year: "September'2023 -October'2023",
    role: "Frontend Developer (Freelance)",
    company: "Independent Projects",
    description: `Designed and developed responsive user interfaces for multiple web applications. Focused on delivering seamless user experiences through efficient use of React and TailwindCSS.`,
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
];

export const PROJECTS = [
    {
      title: "Country API Project",
      image: project1,
      description:
        "A web application that provides detailed information about countries, including population, region, and capital. Features include search functionality, a dark/light theme toggle, and detailed views for individual countries.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API"],
      github:"https://github.com/Rachna-Rathor/Country-API-Project"
    },
    {
      title: "To-Do App Backend",
      image: project2,
      description:
        "Developed a robust backend for a To-Do application, enabling users to create, update, and delete tasks. Implemented secure RESTful APIs with user authentication and role-based access control.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github:"https://github.com/Rachna-Rathor/Todo-app-backend"
    },
    {
      title: "Job Portal Website",
      image: project3,
      description:
        "A platform for job seekers and employers, featuring job postings, resume uploads, and application tracking. Built a seamless experience with dynamic filtering and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
       github:"https://github.com/Rachna-Rathor/Country-API-Project"
    },
    {
      title: "Employee Management System",
      image: project4, // Replace with the correct image path for this project
      description:
        "A React-based Employee Management System that enables administrators to create tasks and assign them to employees. Employees can view, update, and mark tasks as completed. The system offers a responsive user interface and ensures efficient task management.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/Rachna-Rathor/Employee-Management-System" // Replace with the actual GitHub link
    },

    {
      title: "E-Commerce Website",
      image: project5,
      description:
        "A fully functional e-commerce website featuring product search, user authentication, and a shopping cart. Implemented a secure backend using Node.js and MongoDB.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
       github:"https://github.com/Rachna-Rathor/Ecommerce-app-Using-MERN"
    },
    
    {
      title: "Quiz App",
      image: project6,
      description:
        "A dynamic quiz application with real-time score tracking and customizable quizzes. Built using JavaScript and TailwindCSS.",
      technologies: ["JavaScript", "HTML", "CSS", "TailwindCSS"],
      github:"https://github.com/Rachna-Rathor/Ecommerce-app-Using-MERN"

    },
  ];
  
export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+91-9711627163",
  email: "kumarirachna740@gmail.com",
};
