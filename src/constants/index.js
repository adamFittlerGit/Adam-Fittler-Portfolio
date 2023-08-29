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
      title: "Full Stack Engineer",
      icon: web,
    },
    {
      title: "Cyber Secuirty Analyst",
      icon: backend,
    },
    {
      title: "ML/AI Engineer",
      icon: mobile,
    },
    {
      title: "Unreal Engine Developer",
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
      date: "March 2020 - April 2021",
      points: [
        "Utilising wordpress to make UI and UX upgrades, integrating mail poet and jotforms.",
        "Data entry of stock market equities, wrote a web scraping script in python to automate this.",
        "Providing general IT support and assisting in system troubleshooting.",
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
      name: "Power Link",
      description:
        "This app allows for powerlifting coaches and athletes to communicate effecictely and easily in one place.  Allowing coaches to send their athletes their programs and form advice as well as allowing athletes to easily upload their technique videos and chat with their coaches. Im also working on adding a game fearture.",
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
      image: tesla,
      source_code_link: "https://github.com/",
    },
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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Usum",
      description:
        "A clean user interface that allows the user to interact with and use the summarizer AI API provided by Rapid API. The application allows the user to input a link to an article then it uses the Summarizer API to return the summarized article.  I developed this application in order to help me complete my weekly university readings while still having time to work on my own projects. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/",
    },
    {
      name: "Escape Earth",
      description:
        "Earth has been deemed uninhabitable, your mission is to travel among the stars and find a new planet and make it habitable to support life! This is a small open source farming simulation game that allows users to create their farm, plant crops, crow them and defend them from the new hostile world that you find youself in.  Created in an open source group.",
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
      image: tesla,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pytorch Project",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      image: tesla,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };