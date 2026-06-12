import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaLinkedinIn,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaServer,
  FaShieldHalved,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNpm,
  SiPostman,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const portfolioData = {
  personal: {
    name: "Bilal Khan Pathan",
    title: "MERN Stack Developer",
    subtitle: "MCA Student and Full-Stack Fresher",
    shortIntro:
      "I build modern, responsive web applications with React, Node.js, Express, MongoDB, JavaScript, and Tailwind CSS.",
    longIntro:
      "I am an adaptable MERN Stack fresher and MCA student focused on building clean, practical, and user-friendly digital experiences. I enjoy turning ideas into responsive interfaces, reliable APIs, and full-stack projects that are simple to use and easy to maintain.",
    objective:
      "Adaptable MERN Stack Developer passionate about building modern, user-friendly web applications. Skilled in RESTful APIs and database management, looking to contribute strong problem-solving abilities and a fast-learning mindset to an innovative tech team.",
    resumeLink: "/Bilal-Resume.pdf",
    availability: "Open to internships, junior developer roles, and freelance opportunities",
    location: "Ahmedabad, Gujarat",
    email: "bilal8511018651@gmail.com",
    phone: "+91 84878 79887",
  },
  heroStats: [
    { label: "Projects", value: "4+" },
    { label: "Core Stack", value: "MERN" },
    { label: "Focus", value: "Responsive UI" },
  ],
  heroHighlights: [
    "Clean React component architecture",
    "REST APIs with smooth frontend integration",
    "Mobile-first layouts using Tailwind CSS",
    "Ready for internship and junior roles",
  ],
  aboutPoints: [
    "MCA student building practical full-stack projects with a strong focus on frontend polish.",
    "Comfortable with component-driven development, reusable UI, and API integration.",
    "Interested in frontend engineering, backend logic, and learning production-ready workflows.",
  ],
  skills: [
    {
      title: "Frontend",
      icon: FaLaptopCode,
      description: "Interfaces, interactions, and responsive layouts.",
      items: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCode },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      title: "Backend",
      icon: FaServer,
      description: "APIs, server logic, and authentication.",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "JWT Auth", icon: FaShieldHalved },
      ],
    },
    {
      title: "Tools",
      icon: FaGitAlt,
      description: "Development workflow and delivery.",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "NPM", icon: SiNpm },
        { name: "Postman", icon: SiPostman },
        { name: "Netlify", icon: SiNetlify },
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      description: "Data modeling and storage.",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose ODM", icon: SiMongoose },
        { name: "MySQL", icon: SiMysql },
        { name: "REST APIs", icon: FaServer },
        { name: "Cloudinary", icon: FaDatabase },
      ],
    },
  ],
  projects: [
    {
      title: "Hospital Management System",
      description:
        "A full-stack hospital management platform with role-based admin, doctor, and patient panels, appointment workflows, prescriptions, billing, and report handling.",
      impact: [
        "Built a multi-role structure for a cleaner real-world workflow.",
        "Added responsive dashboards and reusable UI patterns.",
        "Integrated Multer and Cloudinary for medical report uploads.",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      github: "https://github.com/bilalkhan-mern/hospital-management-mern",
      live: "https://hospital-management-mern.netlify.app",
      featured: true,
    },
    {
      title: "Ecommerce Website",
      description:
        "A full-stack ecommerce application with user authentication, product management, shopping cart functionality, and responsive product browsing.",
      impact: [
        "Built a full MERN workflow for product discovery and checkout readiness.",
        "Designed responsive product layouts for a cleaner shopping experience.",
        "Implemented REST APIs for smooth frontend and backend communication.",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "MERN Authentication App",
      description:
        "A secure authentication app with JWT-based signup and login, protected routes, and MongoDB-backed user management.",
      impact: [
        "Focused on secure access and cleaner auth flow.",
        "Used reusable forms and protected UI routes.",
        "Demonstrates practical backend and frontend integration.",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/bilalkhan-mern/mern-auth-app",
      live: "",
      featured: false,
    },
    {
      title: "React Portfolio",
      description:
        "A responsive portfolio website showcasing skills, projects, resume access, and contact information with a polished UI.",
      impact: [
        "Built to be recruiter-friendly and easy to scan.",
        "Uses clean section flow and modern Tailwind styling.",
        "Shows my approach to responsive frontend design.",
      ],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/bilalkhan-mern/react-portfolio",
      live: "",
      featured: false,
    },
  ],
  contact: {
    email: "bilal8511018651@gmail.com",
    phone: "+91 84878 79887",
    location: "Ahmedabad, Gujarat",
    message:
      "I am open to internships, junior frontend roles, and full-stack opportunities where I can contribute and keep learning.",
    socials: [
      { label: "GitHub", href: "https://github.com/bilalkhan-mern", icon: FaGithub },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bilalkhan-pathan-7258a4252", icon: FaLinkedinIn },
      { label: "Email", href: "mailto:bilal8511018651@gmail.com", icon: FaEnvelope },
      { label: "Call", href: "tel:+918487879887", icon: FaPhone },
    ],
  },
  utilities: {
    arrowRight: FaArrowRight,
    externalLink: FaArrowUpRightFromSquare,
    download: FaDownload,
    envelope: FaEnvelope,
  },
};

export default portfolioData;
