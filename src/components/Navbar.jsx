import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <h2 className="font-bold text-3xl">PortFolio </h2>
      </div>

      {/* Social Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rachna-ab7b53275/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FaLinkedin />

        </a>
        <a href="https://github.com/Rachna-Rathor" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <FaGithub />

        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
