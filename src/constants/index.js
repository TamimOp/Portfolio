import {
  backend,
  react,
  JSD,
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
  fiverr,
  upwork,
  freelancer,
  brainwave,
  hoobank,
  restaurant,
  nextjs,
  linkedin,
  instagram,
  twitter,
  facebook,
  github,
  WebDevXio,
  Hilink,
  GreenCart,
  SaaS,
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
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "JavaScript Expert",
    icon: JSD,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    icon: nextjs,
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
    title: "React.js Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Leading the development of scalable and responsive web applications using React.js, ensuring high performance and seamless user experiences.",
      "Implementing robust front-end architectures and state management solutions with Redux for complex applications.",
      "Collaborating closely with UX/UI designers to translate wireframes and prototypes into polished React components and interactive features.",
      "Driving innovation by exploring and implementing new tools and libraries within the React ecosystem to enhance productivity and maintainability.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "As a dynamic Front-end Developer, I spearhead the creation of captivating user interfaces and responsive web applications.",
      "Armed with a robust skill set in HTML, CSS, and JavaScript, I adeptly implement innovative solutions using frameworks like React.js and Vue.js.",
      "I lead projects from inception to deployment, optimizing performance and user experience with meticulous attention to detail.",
      "Collaborating closely with cross-functional teams, I translate complex requirements into intuitive designs that drive user engagement and business success. ",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining Ecommerce store using Shopify,Shogun,Pagefly and other related technologies.",
      "Implementing custom solutions on Shopify and leveraging Shogun and Pagefly to maximize store performance and scalability.",
      "Enhancing ecommerce functionality through strategic integration of Shopify apps and themes, boosting site usability and customer engagement.",
      "Collaborating closely with clients to craft tailored ecommerce solutions that achieve business objectives and surpass customer expectations.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tamim proved me wrong.",
    name: "jrgenfredriksen",
    designation: "CFO",
    company: "LOCTOTE",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tamim does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Immediately understood the project and delivered exactly what was requested. Easy to communicate and prompt to reply. Highly recommended",
    name: "yasalpaca",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brainwave",
    description:
      "An open AI chat app website where upto 100 million people can explore the possibilities of AI chatting with Brainwave! ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    Deploy: "https://tamimop.github.io/Brainwave_Project/",
    source_code_link: "https://github.com/TamimOp/Brainwave_Project",
  },
  {
    name: "HooBank",
    description:
      "The next generation modern banking web app with eye catching design with 3800+ active users and $230M+ transaction!",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    Deploy: "https://tamimop.github.io/Bank_Modern_App/",
    source_code_link: "https://github.com/TamimOp/Bank_Modern_App",
  },
  {
    name: "Gericht Restaurant",
    description:
      "A Fine dine restaurant's conspicuous web application to serve millions of customers!",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    Deploy: "https://tamimop.github.io/Gerich_Restaurant/",
    source_code_link: "https://github.com/TamimOp/Gerich_Restaurant",
  },
  {
    name: "WebDevXio",
    description:
      "An Expert Web Design and Development Agency Achieving Results. Specialize in creating stunning, high-performing websites that elevate your brand and drive measurable results. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: WebDevXio,
    Deploy: "https://web-dev-xio.vercel.app/",
    source_code_link: "https://github.com/TamimOp/WebDevXio",
  },
  {
    name: "Hilink",
    description:
      "Hilink is a modern, user-centric travel website designed to inspire and simplify travel planning. Built with a responsive layout and seamless navigation, Hilink helps users explore destinations, book tours, and find travel inspiration with ease. ",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Hilink,
    Deploy: "https://rococo-twilight-2b9202.netlify.app/",
    source_code_link: "https://github.com/TamimOp/Travel_Website",
  },
  {
    name: "GreenCart",
    description:
      "An Smart Online Grocery Solution.GreenCart is a clean and efficient web application designed to simplify the online grocery shopping experience. It offers a user-friendly interface, organized product categories, and a seamless cart and checkout process—making grocery shopping faster and more convenient.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: GreenCart,
    Deploy: "https://green-cart-psi-two.vercel.app/",
    source_code_link: "https://github.com/TamimOp/GreenCart",
  },
  {
    name: "SaaS Landing Page",
    description:
      "This is a sleek and responsive landing page designed for a SaaS product, focused on driving user engagement and conversions. It combines modern UI design with strategic layout elements to effectively communicate product value and capture user interest.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: SaaS,
    Deploy: "https://saas-landingpage-website.netlify.app/",
    source_code_link: "https://github.com/TamimOp/saas_landing_page",
  },
];
const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/tamim-shad-anik-0a2a55293/",
  },
  {
    id: "1",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/TamimOp",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/ig_tamimop/",
  },
  {
    id: "3",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/tamimshadanik",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/Tamimshadaioush22/",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
