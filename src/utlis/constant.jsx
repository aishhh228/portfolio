import project1 from '../images/EWeb.jpg'
import project2 from '../images/Netflix.jpg'
import project3 from '../images/bgImage.jpg'
import project4 from '../images/FoodApp.jpg'


export const ABOUT_ME = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Angular, Node.js and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
      year: "2022 - Present",
      role: "Full Stack Developer",
      company: "Accenture",
      description: `Developing and maintaining web applications using JavaScript, React.js. Implemented RESTful APIs and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Javascript", "React.js", "AzureDevops", "Redux"],
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
    technologies: ["HTML", "CSS", "React", "firebase"],
  },
  {
    title: "Netflix-GPT",
    image: project2,
    description:
    "An AI-powered application that enhances the Netflix experience by providing personalized movie and TV show recommendations in multiple languages. It supports multi-language queries and delivers tailored content suggestions.",
    technologies: ["HTML", "Tailwind CSS", "Firebase", "React", "Redux"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Food-Ordering App",
    image: project4,
    description:
    "A user-friendly platform for browsing, ordering, and managing food deliveries, featuring an intuitive interface.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+91 9307917117",
  email: "aish.sagavakar5@gmail.com",
};