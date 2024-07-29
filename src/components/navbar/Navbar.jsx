import "./navbar.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/dharptl/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.github.com/DharPtl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.twitter.com/DharPatel_6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="/src/components/resume/Dhar_Ptl2024Resume (2).pdf" // Update this with your actual resume path
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500" // Add a suitable hover color
          >
            <FaFilePdf className="icon" /> {/* Include the resume icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;