import { GiThumbUp } from "react-icons/gi";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.jpeg";
import project8 from "../assets/projects/project8.png";


import { image, title } from "framer-motion/client";


export const HERO_CONTENT = `I’m a dedicated and enthusiastic full-stack developer with a strong passion for building responsive, efficient, and user-centric web applications. With hands-on experience in both frontend and backend technologies, I strive to create seamless digital experiences. My goal is to contribute innovative solutions that not only meet technical requirements but also elevate user satisfaction and business value`;

export const ABOUT_TEXT = `As a dedicated final-year BTech student in Electronics and Communication Engineering (ECE), I’ve developed a strong interest and skillset in full-stack web development. Proficient in technologies like React, Node.js, and MongoDB, I’m passionate about building efficient, scalable, and user-friendly web applications.

What began as a curiosity for technology has grown into a deep commitment to continuous learning and creative problem-solving. I thrive on turning ideas into functional solutions and enjoy collaborating on impactful projects. Beyond coding, I love exploring emerging technologies and actively contributing to open-source communities.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - September 2024",
    role: "Full Stack Developer Intern",
    company: "Zidio Development",
    description: `Worked on developing scalable backend solutions using Node.js and MongoDB. Collaborated with frontend teams to implement dynamic user interfaces with React. Gained valuable experience in building RESTful APIs and optimizing application performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js",],
  },
  {
  year: "Dec'2025",
  role: "Data Analytics Virtual Experience Participant",
  company: "Deloitte (Forage)",
  description: `Completed a virtual job simulation focused on data analytics and forensic technology, replicating real-world consulting tasks. Analyzed datasets to identify patterns, detect anomalies, and generate insights for simulated client cases. Developed strong analytical thinking, problem-solving, and client-focused reporting skills aligned with Deloitte’s professional standards.`,
  technologies: [
    "Data Analysis",
    "Forensic Analytics",
    "Data Interpretation",
    "Analytical Thinking",
    "Client Reporting"
  ],
},

];

export const PROJECTS = [

  {
    title: "Role-Based Voting System (Backend)",
    image: project7,
    description:
      "A secure backend system for a voting application that supports role-based access control. The application allows users to register and log in using JWT authentication, cast a vote only once, and view voting results. Admin users can create and manage candidates, while normal users are restricted to voting functionalities. The system ensures data integrity by preventing duplicate votes and protecting routes using middleware.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST API"
    ],
    github: "https://github.com/Rachna-Rathor/Voting-App"
  },
   {
  title: "Employee Payroll System ",
  image: project8, // add payroll-related image or screenshot
  description:
    "A Java-based Payroll Management System designed to simulate real-world employee salary processing. The system automates salary calculations based on working hours and deductions, using core Object-Oriented Programming principles such as inheritance, encapsulation, and abstraction to ensure a modular and maintainable design.",
  technologies: [
    "Core Java",
    "Object-Oriented Programming (OOP)",
    "Inheritance",
    "Encapsulation",
    "Abstraction"
  ],
  github: "https://github.com/Rachna-Rathor/Payroll-Management-System"
},

  {
    title: "Country API Project",
    image: project1,
    description:
      "A web application that provides detailed information about countries, including population, region, and capital. Features include search functionality, a dark/light theme toggle, and detailed views for individual countries.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/Rachna-Rathor/Country-API-Project"
  },
  {
    title: "To-Do App Backend",
    image: project2,
    description:
      "Developed a robust backend for a To-Do application, enabling users to create, update, and delete tasks. Implemented secure RESTful APIs with user authentication and role-based access control.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Rachna-Rathor/Todo-app-backend"
  },
  {
    title: "Job Portal Website",
    image: project3,
    description:
      "A platform for job seekers and employers, featuring job postings, resume uploads, and application tracking. Built a seamless experience with dynamic filtering and real-time updates.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Rachna-Rathor/job-portal-website"
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
    github: "https://github.com/Rachna-Rathor/Ecommerce-app-Using-MERN"
  },

  {
    title: "Currency Converter",
    image: null,
    technologies: ["Core java"],
    github: "https://github.com/Rachna-Rathor/currency-converter",
    description: "Designed and implemented a simple currency converter application using Java. The tool allows users to convert values between different currencies based on real-time or predefined exchange rates. The application features a user-friendly interface (console-based or GUI with Swing) and handles input validation and basic error checking. This project strengthened my core Java skills and understanding of control structures, data types, and user interaction."
  }
];

export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+91-9711627163",
  email: "kumarirachna740@gmail.com",
};
