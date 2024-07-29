import { useRef } from "react";
import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      }}
    >
      <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '40vh' }}>
        Work in progress , keep scrolling ...
      </h2>
    </div>
  );
};

export default Parallax;