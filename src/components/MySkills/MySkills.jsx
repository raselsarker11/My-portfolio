import Underline from "../Underline";
import htmlLogo from "../../assets/logo/html_logo.png";
import cssLogo from "../../assets/logo/css_logo.png";
import javascriptLogo from "../../assets/logo/javascript_logo.png";
import cLogo from "../../assets/logo/C_logo.png";
import cplusplusLogo from "../../assets/logo/C++.png";
import pythonLogo from "../../assets/logo/Python.jpg";
import bootstrapLogo from "../../assets/logo/bootstrap_logo.png";
import tailwindLogo from "../../assets/logo/tailwind_logo.png";
import djangoLogo from "../../assets/logo/django.png";
import restapiLogo from "../../assets/logo/rest_api.png";
// import awsLogo from "../../assets/logo/aws.png";
import cloudLogo from "../../assets/logo/cloud.jpg";
import mqlLogo from "../../assets/logo/mysql.jpg";
import sqliteLogo from "../../assets/logo/sqlite.jpg";
import postgresql from "../../assets/logo/postgresql.jpg";
import reactLogo from "../../assets/logo/react.jpeg";
import "aos/dist/aos.css";
import Aos from "aos";
// ..
Aos.init({
  duration: 1000,
  easing: "ease in out",
});
const skills = [
  {
    image: htmlLogo,
    title: "HTML5",
  },
  {
    image: cssLogo,
    title: "CSS3",
  },
  {
    image: javascriptLogo,
    title: "JavaScript",
  },
  {
    image: cLogo,
    title: "C",
  },
  {
    image: cplusplusLogo,
    title: "C++",
  },
  {
    image: pythonLogo,
    title: "Python",
  },
  {
    image: bootstrapLogo,
    title: "Bootstrap5",
  },
  {
    image: tailwindLogo,
    title: "Tailwind CSS",
  },
  {
    image: djangoLogo,
    title: "Django",
  },
  {
    image: restapiLogo,
    title: "RestAPIs",
  },
  {
    image: reactLogo,
    title: "React.js",
  },
  {
    image: cloudLogo,
    title: "Cloud Computing",
  },
  {
    image: mqlLogo,
    title: "MySQL",
  },
  {
    image: sqliteLogo,
    title: "Sqlite",
  },
  {
    image: postgresql,
    title: "PostgreSQL",
  },
];

const MySkills = () => {
  return (
    <div id="skills" className="my-20" data-aos="fade-up">
      <h1 className="text-center text-5xl font-bold ">My Skills</h1>
      <Underline />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills &&
          skills?.map((skill, index) => (
            <div
              key={index}
              className="flex gap-2 items-center border border-primary hover:-translate-y-2 duration-300 hover:bg-primary px-5 py-3"
            >
              <img className="w-12" src={skill?.image} alt="" />
              <h3 className="md:text-xl font-bold text-white">
                {skill?.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MySkills;
