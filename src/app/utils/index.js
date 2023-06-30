import TMDB from "../../../public/tmdb.png";
import Ecommerce from "../../../public/ecommerce.png";
import LinkBase from "../../../public/linkbase.png";

export const projectList = [
  {
    title: "TMDB",
    subTitle: "Entertainment",
    description:
      "Website to browse Movies and TV Series by many categories and create a Favorites list",
    image: TMDB,
    technologies: [
      "ReactJS",
      "Redux",
      "CSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/garcelomarcia/TMDB",
    live: "https://tmdb-front-garcelomarcia.vercel.app/",
    demoAccount: {
      username: "demo",
      password: "password",
    },
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
  {
    title: "Custom T-Shirts",
    subTitle: "E-commerce",
    description:
      "This Website is an E-Commerce site with a full customer experience, including registering users, browsing & customizing products, adding products to cart and checking out.",
    image: Ecommerce,
    technologies: [
      "ReactJS",
      "Redux",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/julian-rinaudo/ecommerce",
    live: "http://www.google.com/",
    demoAccount: {
      username: "demo@example.com",
      password: "Demo1234$",
    },
    live_btn: "Live Demo",
    source_btn: "Source Code",
  },
  {
    title: "LinkBase",
    subTitle: "Social Media",
    description:
      "LinkBase is a A React-Native application developed for Net Global that provides a platform for businesses' employees to create reviews on other businesses. The application is designed to streamline the review process and make it easy for users to share their experiences with other businesses.",
    image: LinkBase,
    technologies: [
      "React Native",
      "Redux",
      "Nativebase",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    github: "https://github.com/LinkBase2-0",
    live: "https://tmdb-back-w5b3.onrender.com/api/videos/linkbase",
    demoAccount: null,
    live_btn: "Video Sample",
    source_btn: "Source Code",
  },
];

export const text = {
  english: {
    title: "Fullstack Javascript Developer",
    description:
      "Freelancer providing Fullstack Development services for Web and Mobile Applications. Scroll down to get to know me and what I've been working on!",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    resume: "Resume",
    about_me:
      "As an industrial engineer with a manufacturing background, I have always been passionate about solving complex problems and optimizing processes. Recently, I have expanded my skillset by completing a fullstack JavaScript coding bootcamp and honing my programming skills. I am excited to take on new challenges and use my diverse background to contribute to a dynamic team as a developer. With my strong foundation in engineering and newfound coding abilities, I am conﬁdent that I can bring a unique perspective and innovative solutions to any project.",
  },

  spanish: {
    title: "Desarrollador Fullstack en Javascript",
    description:
      "Proveo desarrollos Fullstack en Web y de Aplicaciones. Dale hacia abajo para conocer más sobre mí, mis habilidades y los proyectos que he desarrollado!",
    about: "Sobre mí",
    skills: "Habilidades",
    portfolio: "Portafolio",
    resume: "Currículum",
    about_me:
      "Como ingeniero industrial con experiencia en manufactura, siempre me ha apasionado resolver problemas complejos y optimizar procesos. Recientemente, he ampliado mis habilidades al completar un bootcamp de programación fullstack en JavaScript y perfeccionar mis habilidades de programación. Estoy emocionado de enfrentar nuevos desafíos y utilizar mi experiencia diversa para contribuir a un equipo dinámico como desarrollador. Con mi sólida base en ingeniería y mis habilidades recién adquiridas en programación, tengo confianza en que puedo aportar una perspectiva única y soluciones innovadoras a cualquier proyecto.",
  },
};
