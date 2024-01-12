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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const HeroSec = () => {

  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            HIMANSHI GOEL
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="heroSec.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeroSec;
