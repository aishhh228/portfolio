import project1 from '../images/EWeb.jpg'
import project2 from '../images/Netflix.jpg'
import project3 from '../images/bgImage.jpg'
import project4 from '../images/FoodApp.jpg'


export const ABOUT_ME = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like HTML5, CSS3, React, Redux as well as back-end technologies like Node.js, mySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`

export const EXPERIENCES = [
    {
      year: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Accenture",
      description: `Developing and maintaining web applications using JavaScript, React.js. Implemented RESTful APIs and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Javascript", "React", "Redux", "HTML", "CSS"],
    },
    {
      year: "2021 - 2022",
      role: "Frontend Developer",
      company: "Accenture",
      description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance.`,
      technologies: ["HTML", "CSS", "mySQL"],
    },
   
  ];
  

  
export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
  {
    title: "Netflix-GPT",
    image: project2,
    description:
    "An AI-powered application that enhances the Netflix experience by providing personalized movie and TV show recommendations in multiple languages. It supports multi-language queries and delivers tailored content suggestions.",
    technologies: [ "React", "Redux","Tailwind CSS", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Food-Ordering App",
    image: project4,
    description:
    "A user-friendly platform for browsing, ordering, and managing food deliveries, featuring an intuitive interface.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  email: "aish.sagavakar5@gmail.com",
};