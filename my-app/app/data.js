export const EMAIL = "yourmail@example.com";
export const GITHUB = "https://github.com/your-username";

export const services = [
  "Web Apps",
  "E-commerce",
  "Booking Systems",
  "Security Application",
  "Login System",
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Java",
      "JDBC",
    ],
  },
  {
    group: "Database & Cloud",
    items: ["Firebase", "MySql", "PostgreSql", "MongoDB", "Vercel"],
  },
  { group: "Tech & Tools", items: ["Postman", "MsOffice", "Git & GitHub"] },
];

export const allSkills = skills.flatMap((g) => g.items);

export const details = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Location", value: "Chennai, India" },
  { label: "Availability", value: "Open for freelance work" },
  { label: "Languages", value: "Tamil, English" },
];

// image: put screenshots in /public/projects/ and use "/projects/shop.png"
export const projects = [
  {
    title: "Pradeep Mobile",
    tag: "E-commerce",
    desc: "Real-time mobile shop with product catalogue, cart, login and live order tracking, built as a small-business demo store.",
    stack: ["React", "Firebase", "Razorpay", "Vercel"],
    live: "https://your-shop.vercel.app",
    repo: "https://github.com/your-username/pradeep-mobile",
    image: null,
  },
  {
    title: "The Rakesh Daniel Times",
    tag: "Portfolio",
    desc: "This newspaper-themed portfolio: Next.js App Router, Tailwind, smooth scroll and CSS-only fire effects.",
    stack: ["Next.js", "Tailwind CSS", "Lenis"],
    live: "https://your-portfolio.vercel.app",
    repo: "https://github.com/your-username/rakesh-portfolio",
    image: null,
  },
  {
    // REPLACE THIS with your real third project
    title: "Secure Login System",
    tag: "Security",
    desc: "Authentication flow with protected routes, hashed passwords and session handling.",
    stack: ["Node.js", "Express", "MongoDB"],
    live: "https://your-login-demo.vercel.app",
    repo: "https://github.com/your-username/login-system",
    image: null,
  },
];
