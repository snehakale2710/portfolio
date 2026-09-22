import sentimentImg from "../assets/sentiment_analyzer.jpg";
import styleHub from "../assets/style_hub.jpg";
import magazine from "../assets/magazine.jpg";
import rlp from "../assets/RLP.jpg";
import r from "../assets/registration.jpg";
import WeatherAPI from "../assets/weather.jpg";

const projects = [
  {
    title: "Hybrid Sentiment Analyzer",
    image: sentimentImg,
    description:
      "An intelligent application that analyzes text and identifies positive, negative, or neutral sentiment.",
    features: [
      "Text sentiment analysis",
      "Sentiment classification",
      "Data visualization",
      "Interactive analysis",
    ],
    technologies: ["Python", "NLP", "Machine Learning", "Pandas"],
    github: "https://github.com/snehakale2710/Sentiment_Analyzer.git",
    live: "https://sentiment-analyzer-jnl8.vercel.app",
  },

  {
    title: "STYLE HUB - E-Commerce Website",
    image: styleHub,
    description:
      "A modern full-stack fashion e-commerce website offering a smooth and user-friendly online shopping experience.",
    features: [
      "Product browsing",
      "Category filtering",
      "Wishlist management",
      "Shopping cart",
      "Checkout and payment",
      "User authentication",
    ],
    technologies: ["React", "JavaScript", "CSS", "Python", "Flask", "MongoDB"],
    github: "https://github.com/snehakale2710/myntra_clone.git",
    live: "https://myntra-clone-tau-gilt.vercel.app/",
  },

  {
    title: "Visionary Times",
    image: magazine,
    description:
      "A modern magazine website showcasing business, technology, entrepreneurs, and innovation stories.",
    features: [
      "Modern magazine layout",
      "Hero slider",
      "Article sections",
      "Multi-page navigation",
      "Responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/snehakale2710/javascript_tutorial/tree/main/day9",
    live: "https://javascript-tutorial-beige.vercel.app",
  },

  {
    title: "Responsive Watch Landing Page",
    image: rlp,
    description:
      "A stylish and responsive landing page designed to showcase a watch product with a clean and modern interface.",
    features: [
      "Responsive design",
      "Modern UI",
      "Watch showcase",
      "Smooth navigation",
      "Mobile-friendly layout",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/snehakale2710/Responsive-Landing-Page.git",
    live: "https://responsive-landing-page-nine-rho.vercel.app/",
  },

  {
    title: "Registration Form",
    image: r,
    description:
      "A simple and responsive registration form designed to collect and validate user information through a clean interface.",
    features: [
      "User registration",
      "Form validation",
      "Input fields",
      "Error handling",
      "Responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/snehakale2710/registration-form.git",
    live: "https://registration-form-xi-orcin.vercel.app/",
  },

  {
    title: "Weather API",
    image: WeatherAPI,
    description:
      "A weather application that uses an API to display current weather information based on the selected location.",
    features: [
      "City search",
      "Weather information",
      "API integration",
      "Dynamic data display",
      "Responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: "https://github.com/snehakale2710/weather-app.git",
    live: "https://weather-app-snowy-alpha-35.vercel.app/",
  },
];

export default projects;
