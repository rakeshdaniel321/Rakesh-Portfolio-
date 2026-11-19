export const EMAIL = "rakeshdaniel072@gmail.com";
export const GITHUB = "https://github.com/rakeshdaniel321";

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
    title: "College Website Clone",
    tag: "Web Clone",
    desc: "How I Cloned My College Website (Sri Sankara Bhagavathi Arts & Science College) from Scratch!",
    stack: ["html", "css", "js", "Vercel"],
    live: "https://college-website-clone-blue.vercel.app/",
    repo: "https://gitlab.com/payilagam-group8990334/college_website_clone.git",
    image: "/Images/projects/college-clone.png",
  },
  {
    title: "Flipkart clone",
    tag: "Web Clone",
    desc: "How I Built a Full Flipkart Page Clone From Scratch Using My Own Code",
    stack: ["html", "CSS", "js"],
    live: "https://flipkart-rakesh.vercel.app/",
    repo: "https://gitlab.com/payilagam-group8990334/flipkart.git",
    image: "/Images/projects/flipkart-clone.png",
  },
  {
    // REPLACE THIS with your real third project
    title: "React E-Commerce Web Application",
    tag: "E-Commerce ",
    desc: "A uilt a responsive e-commerce app using React.js, React Router DOM, Redux Toolkit,  Hooks, and Props. Implemented product listing, product details, add-to-cart, cart management, and total price calculation with global state management.",
    stack: ["html", "css", "Reactjs","vercel"],
    live: "https://react-basic-ecommerce-olive.vercel.app/",
    repo: "https://github.com/rakeshdaniel321/React_basic_ecommerce.git",
    image: "/Images/projects/ecommerce.png" ,
  },
];
