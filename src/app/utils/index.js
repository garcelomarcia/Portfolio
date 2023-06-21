import TMDB from "../../../public/tmdb.png";
import Ecommerce from "../../../public/ecommerce.png";
import LinkBase from "../../../public/linkbase.png";
const projectList = [
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
    live: "http://www.google.com/",
    demoAccount: {
      username: "demo@example.com",
      password: "Demo1234$",
    },
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
    live: "http://www.google.com/",
    demoAccount: {
      username: "demo@example.com",
      password: "Demo1234$",
    },
  },
];

export default projectList;
