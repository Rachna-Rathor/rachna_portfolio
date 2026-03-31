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


export const HERO_CONTENT = `I build secure, scalable backend systems and APIs that power real-world applications. Focused on clean architecture, performance optimization, and reliable data handling.`;

export const ABOUT_TEXT =`I am a B.Tech (ECE) 2025 graduate with a strong focus on backend development and problem-solving using Java (DSA).

I specialize in building robust server-side applications using Node.js, Express, and MongoDB, with hands-on experience in designing RESTful APIs, authentication systems, and role-based access control.

I enjoy solving complex problems, optimizing backend performance, and ensuring data integrity in applications. I am currently seeking opportunities where I can contribute to building scalable and secure backend systems.`

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
    title: "Job Portal (Backend)",
    image: project3,
    description:
      "A secure, role-based backend system for a job portal that allows recruiters to manage job postings and candidates to apply, withdraw, and track applications. The system implements JWT-based authentication and authorization to ensure secure access control, protects APIs, and prevents duplicate applications. It includes an end-to-end workflow for job creation, candidate applications, applicant listing, and role-based access management.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST API"
    ],
    github: "https://github.com/Rachna-Rathor/Job-Portal-Backend"
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
    title: "Employee Management System",
    image: project4, // Replace with the correct image path for this project
    description:
      "A React-based Employee Management System that enables administrators to create tasks and assign them to employees. Employees can view, update, and mark tasks as completed. The system offers a responsive user interface and ensures efficient task management.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/Rachna-Rathor/employee_management_system" 
  },
  {
    title: "Employee Payroll System ",
    image: project8, 
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

];

export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+91-9711627163",
  email: "kumarirachna740@gmail.com",
};
