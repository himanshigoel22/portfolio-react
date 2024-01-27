import React from 'react';
import './projects.scss';

const items = [
  {
    id: 1,
    title: 'StayGlobe',
    img: './wanderlust.png',
    desc:
      'StayGlobe is a dynamic and user-friendly web platform designed to revolutionize the way people explore and book travel accommodations Tech used - HTML , CSS , JavaScript , MongoDb , ExpressJS , NodeJS ',
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
 
  return (
    <section >
    
      <div className="container">
      <h2 className='title'>Featured Works</h2>
        <div className="wrapper">
        
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button>
                <b>Github</b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
 
  return (
    <div className="projects">
     
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;