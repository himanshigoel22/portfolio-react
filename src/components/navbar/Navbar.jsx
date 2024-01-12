import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope , faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0 , scale:0.5}}
              animate={{opacity:1 , scale:1}}
              transition={{ duration:0.5 }}
            >Himanshi Goel</motion.span>
            <div className="social">
          <a href="https://www.linkedin.com/in/himanshi-goel22/"><FontAwesomeIcon icon={faLinkedin}  /></a>
          <a href="https://twitter.com/HimanshiGoel22"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="mailto:himanshigoel2409@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
          <a href="./resume2024.pdf"><FontAwesomeIcon icon={faFilePdf}/></a>
          
               
            </div>
        </div>
    </div>
  )
};

export default Navbar;