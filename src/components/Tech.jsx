import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech)=>(
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon}/>
            </div>
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Tech,"");