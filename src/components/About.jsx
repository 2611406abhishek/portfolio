import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
// import {SectionWrapper } from '../hoc';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = (props) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={props.icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {props.title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a Bachelor's student studying Information Technology at the National Institute of Technology, Kurukshetra. 
       I have over a year of experience in web development and am skilled in data structures and algorithms,
       with a solid understanding of computer science fundamentals.
       In addition to my academic and professional pursuits, I am an avid learner and enjoy exploring new technologies 
       and programming languages. I enjoy participating in hackathons and coding challenges to further develop my skills and gain practical experience.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");