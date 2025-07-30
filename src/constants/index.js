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
  upes,
  niyamsewa,
  invoicewala,
  bus,
  socis,
  icon,
  nextjs,
  argenie,
  python,
  aws,
  elephant
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
    title: "Frontend Engineer (React/Next.js)",
    icon: web,
  },
  {
    title: "AI Engineer – Fullstack Focus",
    icon: mobile,
  },
  {
    title: "Cloud Solutions Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon:  aws,
  },
];

const experiences = [
    {
    title: "Software Development Intern",
    company_name: "AR Genie",
    icon: argenie,
    iconBg: "#000000",
    date: "June 2025 - Present",
    points: [
      "Developed real-time video calling features using WebRTC and integrated MQTT for device communication.",
      "Implemented scalable state management with Zustand and form validation with Zod, ensuring robust UX flows.",
      "Utilized ReactJS and Next.js to build dynamic, SEO-friendly interfaces aligned with design specifications.",
      "Worked on complex UI interactions and device management panels for an augmented reality support system.",
      "Collaborated with cross-functional teams to design and deploy secure user authentication systems and session handling.",
    ],
  },

  {
    title: "Fullstack Developer",
    company_name: "University of Petroleum and Energy Studies",
    icon: upes,
    iconBg: "#ffffff",
    date: "September 2023 - September 2024",
    points: [
      "Spearheaded the development of a Faculty Portal for the University of Petroleum and Energy Studies, employing Node.js for backend functionalities.",
      "Engineered dynamic and responsive user interfaces for the Faculty Portal using React.js, enhancing user engagement and experience.",
      "Designed and developed robust APIs and backend services to manage faculty profiles, course materials, schedules, and announcements.",
      "Played a pivotal role in the creation of a University Transportation Tracking System, employing Node.js and React.js for efficient route tracking and scheduling.",
      "Implemented advanced features such as live tracking, route optimization, and user-friendly interfaces to streamline the transportation experience for students.",
    ],
  },

];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Niyamsewa",
    designation: "",
    company: "Niyamsewa",
    image: icon,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Invoicewala",
    designation: "",
    company: "Invoicewala",
    image: icon,
  },
  {
    testimonial:
      "Your commitment to these projects and your collaboration with the university community are examplary. It is through the efforts of individuals like you that UPES continues to advance and deliver quality education and services to our stakeholders",
    name: "Dr. Saurabh Shanu",
    designation: "Assistant professor ",
    company: "UPES",
    image: icon,
  },
];

const projects = [
  {
    name: "Niyamsewa",
    description:
      "Developed the official website for Niyamsewa, an NGO dedicated to supporting underserved communities in Vrindavan, using React and TailwindCSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: niyamsewa,
    source_code_link: "https://www.niyamsewa.com/",
  },
  {
    name: "InvoiceWala",
    description:
      "A modern e-invoicing platform that enables businesses to generate and share invoices directly via WhatsApp, promoting efficient and eco-friendly billing practices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: invoicewala,
    source_code_link: "https://invoicewala.in/",
  },
  {
    name: "UPES Transportation Tracker",
    description:
      "Developed a live bus tracking system for UPES students using React.js and Node.js, featuring route optimization and real-time location updates.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
    ],
    image: bus,
    source_code_link: "https://github.com/",
  },

  {
    name: "AR Genie Support Platform",
    description:
      "Engineered a remote support system with AR-based video calls, device control via MQTT, and scalable frontend using Zustand, Zod, and React Hook Form.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "webrtc", color: "green-text-gradient" },
      { name: "zustand", color: "pink-text-gradient" },
    ],
    image: argenie,
    source_code_link: "https://github.com/",
  },
  {
    name: "Human-Elephant Conflict Predictor",
    description:
      "A GIS and ML-powered application predicting potential human-elephant conflict zones in Nagaland using terrain, village proximity, and movement data.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machinelearning", color: "green-text-gradient" },
      { name: "gis", color: "pink-text-gradient" },
    ],
    image: elephant,
    source_code_link: "https://github.com/",
  },
  {
    name: "SRE Portal - Exam Deck Management System",
    description:
      "Built a portal for UPES Student Records & Examination Department to create, manage, and track exam decks with QR generation, evaluator tracking, PDF/CSV exports, and email notifications.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "antdesign", color: "pink-text-gradient" },
    ],
    image: socis,
    source_code_link: "https://github.com/",
  },
  {
    name: "School of Computer Science Information Systems (SOCIS)",
    description:
      "Designed and developed the SOCIS official site showcasing faculty, research, and departmental resources using Next.js and Supabase.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: socis,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };
