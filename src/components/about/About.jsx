import React from 'react';
import './about.scss';

const About = () => {
  return (
    <section className="container" id="about">
   <h2 className='AboutTitle'>About Me</h2>
    <div className="content">
    
      <img
        src="aboutSec.jpg"
        alt="Image"
        className="aboutImage"
      />
      <ul className="aboutItems">
        <li className="aboutItem">
          <div className="aboutItemText">
            <h3>Frontend </h3>
            <p>
              On frontend i wield the power of HTML, CSS, JavaScript, React and frameworks like 
              Bootstrap and Tailwind for creating interactive UI.
            </p>
          </div>
        </li>
        <li className="aboutItem">
          <div className="aboutItemText">
            <h3>Backend </h3>
            <p>
              I have experience developing fast and optimised back-end systems using NodeJs and framework like 
              ExpressJs and APIs.
            </p>
          </div>
        </li>
        <li className="aboutItem">
          <div className="aboutItemText">
            <h3>MERN Stack Developer</h3>
            <p>
              I have strong passion for creating websites using my knowledge of my knowledge of MERN stack.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};

export default About;