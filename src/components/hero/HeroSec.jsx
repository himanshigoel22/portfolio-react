import './hero.scss';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};



const HeroSec = () => {

  return (
    <div className='hero'>
      <div className="content">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
          Hi , I'm Himanshi
          </motion.h2>
          <motion.h1 variants={textVariants}>
           I'm a student pursuing BTech and a passionate Full Stack Developer.
           <br></br>Reach out if you'd like to know more !
          </motion.h1>
          <a href="mailto:myemail@email.com" className="contactBtn">
          Contact Me
        </a>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="heroSecImg.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeroSec;
