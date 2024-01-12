import './parallax.scss';
import {useRef} from "react";
import {motion , useScroll , useTransform} from 'framer-motion';

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start" , "end start"]
    })

    const yText = useTransform(scrollYProgress , [0 , 1] , ["0%" , "100%"]);
    const yBg = useTransform(scrollYProgress , [0 , 1] , ["0%" , "100%"])
  return (
    <div className='parallax'
    ref={ref} 
    >
    <motion.h1
    style={{y:yText}}
    >{type=="Technologies" ? "Technologies" : "Projects" }</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div style={{x:yBg}} className="stars"></motion.div>
    <motion.div style={{y:yBg , backgroundImage: `url(${type==="Technologies" ? "/planets.png" : "/sun.png"})`
    }} className="planets"></motion.div>
    <motion.div className="sun"></motion.div>
    </div>
  )
}

export default Parallax;