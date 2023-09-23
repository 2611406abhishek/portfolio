import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    SQL,
    hotel,
    netflix,
    gym,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },

    {
      name: "figma",
      icon: figma,
    },

    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Student Ceremony",
      company_name: "Kurukshetra,India",
      icon: starbucks,
      iconBg: "#383E56",
      date: "1 Dec 2020",
      points: [
        "Joined National Institute of Technology kurukshetra for B.Tech in Information Technology.",
      ],
    },
    {
      title: "College Project and Hackathon",
      company_name: "kurukshetra , India",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - March 2022",
      points: [
        "Build College website as college project.",
        "Finalist of Smart India Hackathon at college level.",
        "Worked in Team first time.",
      ],
    },
    {
      title: "Coding Competition",
      company_name: "Kurukshetra",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "july 2022 - July 2023",
      points: [
        "Air 137 among 90k student (semifinalist) | Innovate India Coding Championship (coding Ninja).",
        "College Rank 7 at CodeRush 2023 by AlgoUniversity",
        "World Rank 355/25k , 355/27k | leetcode contests",
      ],
    },
    {
      title: "Analyst Intern",
      company_name: "HSBC, Remote",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - July 2023",
      points: [
        "Worked with the Account Management Team and wrote Python class.",
        "Collaborated with Technical Team using Git & Github for seamless code integration, code reviews, & issue tracking.",
        "Increased Code Coverage from 70% to 85% through unit testing.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hotel Hub",
      description:
        "Web-based platform that allows users to search and book Hotels according to  Check in check out date, providing a convenient and efficient solution for Management needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs/Exrpessjs",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/2611406abhishek/Hotel-Hub",
    },
    {
      name: "WatchOut",
      description:
        "WatchOut is a revolutionary online streaming platform designed to provide users with an unparalleled entertainment experience and a platform for all your entertainment needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs/mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/2611406abhishek/Netflix",
    },
    {
      name: "ShapeUp",
      description:
        "ShapeUp is a comprehensive online platform dedicated to promoting fitness and health by providing them with the guidance needed to lead a healthy lifestyle.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidApi",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/2611406abhishek/SHAPEUP",
    },
  ];
  export { services, technologies, experiences, testimonials, projects };