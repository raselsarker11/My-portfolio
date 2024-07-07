import Underline from "../Underline";
import happyshoping from "../../assets/images/Happy-shoping_.png";
import authen from "../../assets/images/Authentication.png";
import portfolio from "../../assets/images/portfoliosite.png";
import Foodorder from '../../assets/images/Food-ordering-systems.png';
import { Link } from "react-router-dom";

const projects = [
  {
    bgImage: Foodorder,
    name: "Food-ordering-systems",
    description:
      "Simple authentication,authorization and user persistency.Anyone user can visit to this site and view the product items without login and give rating/review the project.An authenticated user can add products,delete products, and add reviews specific products..successfully payments.",
    liveSite: "",
    client: "https://github.com/raselsarker11/Bistro-Bliss-Restaurant-Clients",
    server:
      "https://github.com/raselsarker11/Bistro-Bliss-Restaurant-Clients",
    technologies: [
      "Python",
      "Django",
      "Django Rest APIS",
      "React.js",
      "CSS",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    bgImage: happyshoping,
    name: "Happy-shoping",
    description:
      "Simple authentication,authorization and user persistency.Anyone user can visit to this site and view the projects without login and give rating/review the project.An authenticated user can add projects,skills, write blogs, and update his profile..User Can review any service and see his/her review",
    liveSite: "https://raselsarker11.github.io/Happy-shoping/",
    client: "https://raselsarker11.github.io/Happy-shoping/",
    server:
      "https://smart-shoping-whb0.onrender.com",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Python",
      "Django",
      "Django Rest API",
      "SQLite",
    ],
  },
  {
    bgImage: portfolio,
    name: "Portfolio Builder",
    description:
      "seller can add book,update book.Users see top selling books ,add to cart and can order.Apply jwt based custom authentication,authorization and user persistence",
    liveSite: "https://portfoliosite-b78f.onrender.com",
    client: "https://github.com/raselsarker11/Portfolio-site",
    server: "https://github.com/raselsarker11/Portfolio-site",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "Python",
      "Django",
      "RestAPI",
      "SQLite3",
    ],
  },
  {
    bgImage: authen,
    name: "Django React authentication system",
    description:
      "Dashboard page where Admin can control all buyers and sellers user.firebase authentication      . Buyers also purchase products by Visa,MasterCard and other international payment cards.       Apply jsonwebtoken(jwt) for users information security purposes.",
    liveSite: "https://simple-authentications-system.vercel.app/",
    client: "https://github.com/raselsarker11/Simple-Authentications-system",
    server:
      "https://github.com/raselsarker11/Simple-Authentications-backend",
    technologies: [
      "Python",
      "Django",
      "Django Rest APIS",
      "React.js",
      "CSS",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
];
const MyProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <Underline />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects &&
          projects?.map((project, index) => (
            <div key={index} className="group relative">
              <div
                className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
                style={{ backgroundImage: `url(${project?.bgImage})` }}
              ></div>
              <div className="p-3 bg-secondary ">
                <h3 className="text-primary text-xl font-bold">
                  {project?.name}
                </h3>
                <p className="text-sm mb-3 ">{project?.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project &&
                    project?.technologies?.map((tech, index) => (
                      <p
                        key={index}
                        className="bg-primary text-xs px-3 py-1 rounded-full text-white "
                      >
                        {tech}
                      </p>
                    ))}
                </div>
                <hr className="my-2" />
                <div className="my-3 flex justify-between ">
                  <button className="btn btn-accent  text-white btn-sm">
                    <Link to={project?.liveSite} target="_blank">
                      Live site
                    </Link>
                  </button>
                  <button className="btn btn-accent text-white btn-sm">
                    <Link to={project?.client} target="_blank">
                      Client
                    </Link>
                  </button>
                  <button className="btn btn-accent text-white btn-sm">
                    <Link to={project?.server} target="_blank">
                      Server
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyProjects;
