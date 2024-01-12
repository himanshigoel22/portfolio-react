import React from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'WanderLust',
    img: './wanderlust.png',
    desc:
      'Wanderlust is a dynamic and user-friendly web platform designed to revolutionize the way people explore and book travel accommodations Tech used - HTML , CSS , JavaScript , MongoDb , ExpressJS , NodeJS ',
    github: 'https://github.com/himanshigoel22/Major-Project', 
  },
  {
    id: 2,
    title: 'CineFiest',
    img: './cinefiest.png',
    desc:
      'A responsive and user-friendly movie and TV show streaming site using React, Redux, and SCSS , utilized the TMDb API to fetch and display up-to-date information about movies and TV shows. Incorporated Redux for state management, ensuring a smooth and efficient data flow throughout the application.',
    github: 'https://github.com/himanshigoel22/Cine-fiest', 
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button>
                <b>Github</b>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <div className="projects">
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
