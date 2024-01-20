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
    threejs,
    digitalmain,
    kylas,
    persistent,
    volkswagen,
    github,
    leetcode,
    linkedin,
    assistant,
    imdb,
    ecommerce,
  } from "../assets";
  
  export const links = [
    {
      title:'github',
      icon:github,
      url:'https://github.com/govind-bit'
    },
    {
      title:'leetcode',
      icon:leetcode,
      url:'https://leetcode.com/govindgggmajage/'
    },
    {
      title:'linkedin',
      icon:linkedin,
      url:'https://www.linkedin.com/in/govind-majage/'
    },
  ]
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
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Digitalmain",
      icon: digitalmain,
      iconBg: "#383E56",
      date: "Jan 2022 - Aug 2022",
      points: [
        "Developing and delivering Responsive, user friendly and interactive react components for their product Vizerto.",
        "Research, evaluate, propose and select specific UX technologies/reusable libraries/open source frameworks that are best suited for supporting specific product features",
        "Learnt how to build websites using MERN Stack.",
        "Design of reusable services and complete documentation.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Persistent Systems",
      icon: persistent,
      iconBg: "#E6DEDD",
      date: "May 2022 - June 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Engineer Intern",
      company_name: "Kylas CRM",
      icon: kylas,
      iconBg: "#383E56",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Developed and delivered Responsive, user friendly and interactive components for their product.",
        "Built Gmail extension for their product using ReactJS and InboxSDK and deployed it on google web store",
        "Built react components with proprer testcases and contributed to their big repositories.",
        "Built Gmail Addon for their CRM Product using Google Appscript and InboxSDK.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Volkswagen",
      icon: volkswagen,
      iconBg: "#383E56",
      date: "Dec 2023 - Current",
      points: [
        "Developing and maintaining web applications using various technologies.",
        "Learned many important computer fundamentals like software development,Operating systems,Databases,Computer networks,etc.",
        "Created a full stack web application with crud operations and proper coding standards.",
        "Collaberate with great engineers around world and work in large teams on large codebases",
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
      name: "IMDB Movie Rating Predictor",
      description:
        "Website that predicts IMDB rating of upcoming movie based on prediction of ML model trained on IMDB dataset. Developed IMDB data scraper using Python, ML model using random forest algorithm and REST API using Flask framwork. Developed complete interactive, responsive and user-friendly interface in ReactJS.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/govind-bit?tab=repositories",
      image: imdb,
    },
    {
      name: "Travelling Assistant",
      description:
        "In this Full stack website I have used map from mapbox. Users can login or register in the website and then add their reviews about places they have visited or read reviews of other users. Whenever user double clicks on any location in map a popup will appear and user can then add their reviews about that tourism place. A pin will be visible in the map and when user clicks it he can read reviews about that place.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/govind-bit?tab=repositories",
      image: assistant,
    },
    {
      name: "Electronics Store E-commerce",
      description:
        "An E-commerce website to display products for a Electronics equipment shop. Developed and delivered complete interactive, responsive and user-friendly interface. Website where you can store details of all your books, all the details are stored in local storage. CRUD operations performed on book details which are stored in local storage.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/govind-bit?tab=repositories",
      image: ecommerce,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };