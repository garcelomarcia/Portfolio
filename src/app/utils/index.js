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
    live: "https://dms.licdn.com/playlist/vid/D4E05AQFYg7KLuUGVjw/mp4-720p-30fp-crf28/0/1681499893886?e=1687993200&v=beta&t=6hHEmlmvLn5bjfUEmkifrOQs5yQFUJ3fA9UQavSrJ9A",
    demoAccount: null,
    live_btn: "Video Sample",
    source_btn: "Source Code",
  },
];

export default projectList;
