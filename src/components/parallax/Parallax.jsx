import { useRef } from "react";
import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3, faNodeJs, faPython, faGit, faDocker, faGithub, faSwift, faAndroid , faPhp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const technologies = [
    { name: "React", icon: faReact, color: '#61DAFB' },
    { name: "JavaScript", icon: faJs, color: '#F7DF1E' },
    { name: "HTML5", icon: faHtml5, color: '#E34F26' },
    { name: "CSS3", icon: faCss3, color: '#1572B6' },
    { name: "Node.js", icon: faNodeJs, color: '#339933' },
    { name: "Python", icon: faPython, color: '#3776AB' },
    { name: "Git", icon: faGit, color: '#F05032' },
    { name: "Docker", icon: faDocker, color: '#2496ED' },
    { name: "GitHub", icon: faGithub, color: '#181717' },
    { name: "VS Code", icon: faCode, color: '#007ACC' },
    { name: "C", icon: 'devicon-c-plain', color: '#A8B9CC' },
    { name: "Android Studio", icon: faAndroid, color: '#3DDC84' },
    { name: "Swift", icon: faSwift, color: '#FA7343' },
    { name: "PHP", icon: faPhp, color: '#777BB4' },
    { name: "SQL", icon: faDatabase, color: '#4479A1' },
  ];

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        height: "100vh",
        backgroundImage: "url('src/assets/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ 
        color: 'white', 
        textAlign: 'center', 
        padding: '1rem',
        marginTop: '2rem',
        marginBottom: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        Technologies/Frameworks
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '800px',
        margin: 'auto',
        flex: 1,
        alignContent: 'center',
      }}>
        {technologies.map((tech, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            {typeof tech.icon === 'string' ? (
              <i className={tech.icon} style={{ fontSize: '3rem', marginBottom: '0.5rem', color: tech.color }}></i>
            ) : (
              <FontAwesomeIcon icon={tech.icon} style={{ fontSize: '3rem', marginBottom: '0.5rem', color: tech.color }} />
            )}
            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;