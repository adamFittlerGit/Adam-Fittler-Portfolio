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
    starbucks,
    tesla,
    carrent,
    jobit,
    rheinmetall,
    escape_earth,
    oasis_brain,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Deep Learning",
      icon: web,
    },
    {
      title: "Fullstack Web ",
      icon: backend,
    },
    {
      title: "Cybersecurity",
      icon: mobile,
    },
    {
      title: "Game Dev",
      icon: creator,
    }
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
      title: "Web Design and Data Entry",
      company_name: "Grow Your Wealth",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - November 2023",
      points: [
        "Utilising wordpress to make UI and UX upgrades, integrating mail poet and jotforms.",
        "Data entry of stock market equities, wrote a web scraping script in python to automate this.",
        "Providing general IT support and assisting in system troubleshooting.",
      ],
    },
    {
      title: "Defense Software Intern",
      company_name: "Rheinmetall Australia",
      icon: rheinmetall,
      iconBg: "#383E56",
      date: "November 2023 - Feburary 2024",
      points: [
        "Integration of different software technologies for the purpose of system emulation.",
        "Mapping of exisiting software architecture and understanding system protocols.",
        "Use of the jira software for sprint planning and running sprints as a scrum master.",
      ],
    }
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
      name: "Filmpire",
      description:
        "A web application that is the lovechild of Netflix and IMDb, Filmpire allows users to browse movies using a visually stunning UI that is fully responsive.  The application also leverages the alan AI, to allow user to search using voice commands.  I really enjoyed building this application and learn a ton throught the development process. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cryptoket",
      description:
        "This application harnesses the very latest software technologies to create a marketplace for buying and selling NFTs, it also comes with fun and exciting minigames that users can play.  It is a great project that allowed me to further develop my software skills and take the next step into more complex development environments.  ",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Escape Earth",
      description:
        "Earth has been deemed uninhabitable, your mission is to travel among the stars and find a new planet and make it habitable to support life! This is a small open source farming simulation game that allows users to create their farm, plant crops, crow them and defend them from the new hostile world that you find youself in.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "libgdx",
          color: "green-text-gradient",
        },
        {
          name: "git workflows",
          color: "pink-text-gradient",
        },
      ],
      image: escape_earth,
      source_code_link: "https://github.com/UQcsse3200/2023-studio-1",
    },
    {
      name: "StyleGAN2 Oasis Brain Generation",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: oasis_brain,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    },
    {
      name: "Comp4702 Project",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    },
    {
      name: "COMS4507 Project",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    },
    {
      name: "DECO3801 Project",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    },
    {
      name: "Thesis Project",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    },
    {
      name: "Design Portfolio",
      description:
        "This project utilises the StyleGAN2 research paper to fully recreate the model and use it in order to be able to generate synthetic brain scan images learnt from the oasis brain dataset.  The inclusion of the style vectors allow for the model to reproduce images with different amounts of brain images featured.  Thus, showing the power of the updated models style vector. You cna learn more in the read me. ",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cuda",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/adamFittlerUQ/PatternAnalysis-2023/tree/topic-recognition/recognition/OASIS-Style-GAN2-s4696807",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };