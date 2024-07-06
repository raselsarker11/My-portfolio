// import Underline from "../Underline";
import photo from "../../assets/Rasel.jpg";
import Resume from "../../assets/Rasel-Sarker.pdf";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease in out", // default easing for AOS animations
});
const About = () => {
  return (
    <div id="about me" className=" py-20 w-full">

      <div className="md:flex  w-full  gap-10">
        <div className="md:w-1/2" data-aos="fade-right">
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="w-full mt-5 md:mt-0" data-aos="fade-top">
          <h1 className="text-5xl font-bold mb-3">About Me</h1>

          <h2 className="text-2xl font-bold mb-3 ">Backend Developer(python/Django)</h2>
          <p className="text-justify">
          Hello, I'm Rasel Sarker, an undergraduate 4th years student at the National University of Bangladesh and a passionate backend developer specializing in Python and Django. I excel in problem-solving and have experience in Python, Django, REST APIs, React.js, C, C++, DSA, problem-solving, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap5, MySQL, SQLite, PostgreSQL, Git, and GitHub. I've completed over 20 projects, including four full-stack applications. I'm eager to dive into Machine Learning and Data Science. My goal is to deliver outstanding project experiences with clean, reusable code. I am self-motivated, quick to adapt to new technologies, and confident I can make a significant impact on your team.
          </p>
          <button className="btn btn-primary mr-5 mt-5 text-white font-normal rounded-sm">
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
