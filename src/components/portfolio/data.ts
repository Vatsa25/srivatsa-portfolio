export const PROFILE = {
  name: "K. S. Srivatsa",
  role: "Associate IT Consultant",
  tagline: "Full-Stack Web Developer",
  location: "India",
  email: "srivatsa.ks@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resume: "/resume.pdf",
  experienceYears: "1+",
};

export const ABOUT =
  "Full-Stack Web Developer with 1+ year of experience building scalable, responsive web applications using React.js, Angular, Node.js, and Express.js. Skilled in RESTful API development, MySQL/PostgreSQL, Tailwind CSS, Bootstrap, MUI, AWS S3, Azure, Docker basics, and state management with Zustand & useContext. I build predictive monitoring dashboards, cloud-based solutions, and production-ready applications with a focus on clean code, performance, and user experience.";

export const STATS = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Shipped", value: 7, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React.js", "Angular", "Tailwind CSS", "Bootstrap", "Material UI"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  { category: "Cloud & DevOps", items: ["AWS S3", "Azure", "Docker Basics"] },
  { category: "Tools", items: ["Git", "GitHub", "GitLab", "Postman", "VS Code"] },
  { category: "Concepts", items: ["REST APIs", "Full-Stack", "Responsive Design", "SEO", "Auth & Authz", "State Management"] },
];

export const EXPERIENCE = [
  {
    role: "Associate IT Consultant",
    company: "Current Role",
    period: "July 2024 — Present",
    points: [
      "Develop full-stack web applications using React.js, Node.js, and Express.js",
      "Design and integrate RESTful APIs with MySQL and PostgreSQL",
      "Build responsive, accessible UI with Tailwind CSS and custom media queries",
      "Manage version control via Git, GitHub, and GitLab; test APIs with Postman",
      "Work on scalable monitoring and prediction applications",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Internship",
    period: "Jan 2024 — July 2024",
    points: [
      "Supported development of React-based web applications",
      "Implemented state management using Zustand and useContext",
      "Improved frontend performance and built reusable components",
      "Collaborated with backend teams on API integrations",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  features: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "PowerGen",
    subtitle: "Equipment Failure Prediction",
    description:
      "Equipment monitoring interface using historic and real-time operational data to avoid downtime. Interactive Highcharts dashboards with React Flow dependency visualization.",
    stack: ["React.js", "Tailwind CSS", "Highcharts", "React Flow"],
    features: ["Real-time monitoring", "Failure prediction", "Interactive graphs", "Dependency mapping", "Root cause analysis"],
  },
  {
    title: "Condenser",
    subtitle: "Predictive Monitoring System",
    description:
      "Predictive monitoring system that identifies anomalies and equipment failures before operational impact. Scalable global state with Zustand on an Azure-integrated architecture.",
    stack: ["React", "Node.js", "Tailwind CSS", "MUI", "Azure", "Zustand"],
    features: ["Predictive analytics", "Anomaly detection", "Responsive UI", "Zustand state", "Azure integration"],
  },
  {
    title: "Boiler",
    subtitle: "Equipment Failure Prediction",
    description:
      "Operational monitoring platform leveraging historic and real-time equipment data to detect and prevent failures before downtime occurs.",
    stack: ["React", "Node.js", "Tailwind CSS", "MUI", "Azure", "Zustand"],
    features: ["Performance monitoring", "Failure tracking", "Real-time insights", "Predictive maintenance"],
  },
  {
    title: "VMRDA Rental",
    subtitle: "Rental Management Platform",
    description:
      "Rental management application with role-based JWT authentication and a fully responsive Angular frontend with PrimeNG.",
    stack: ["Angular", "Node.js", "Express.js", "MySQL", "PrimeNG"],
    features: ["JWT Auth", "Role-based access", "CRUD operations", "Reactive forms", "Lazy loading"],
  },
  {
    title: "RK Makeup Studio",
    subtitle: "Portfolio Website",
    description:
      "Responsive portfolio website with SEO optimization, fast-loading pages, and direct WhatsApp contact integration.",
    stack: ["Angular", "Bootstrap"],
    features: ["Mobile-first", "SEO optimized", "Fast loading", "WhatsApp contact"],
  },
  {
    title: "CloudStorage",
    subtitle: "Cloud Image Upload System",
    description:
      "Backend APIs for image uploads with structured AWS S3 storage, validation, and metadata persistence.",
    stack: ["Node.js", "Express.js", "MySQL", "AWS S3"],
    features: ["S3 integration", "File validation", "Metadata storage", "Structured storage"],
  },
  {
    title: "E-Commerce App",
    subtitle: "Full-Stack Commerce Platform",
    description:
      "Scalable e-commerce application with user/admin roles, JWT authentication, inventory management, and a responsive UI.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "MUI", "Tailwind CSS"],
    features: ["JWT Auth", "Admin dashboard", "Product mgmt", "Order mgmt", "Formik + Yup", "WhatsApp support"],
  },
];

export const ACHIEVEMENTS = [
  { title: "Production Dashboards", desc: "Shipped predictive monitoring dashboards used to prevent downtime on industrial equipment." },
  { title: "Full-Stack Ownership", desc: "Owned features end-to-end — UI, REST APIs, database design, and Azure deployments." },
  { title: "Performance Focus", desc: "Improved frontend performance with reusable components, lazy loading, and clean state architecture." },
  { title: "Multi-Framework", desc: "Comfortable shipping in both React and Angular ecosystems with modern tooling." },
];
