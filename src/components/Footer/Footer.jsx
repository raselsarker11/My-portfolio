import { Link } from "react-scroll";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div>
      <div className="justify-between mb-3 text-white md:flex ">
        <div>
          <h1 className="text-3xl font-bold text-white">Rasel sarker</h1>
          <h3 className="mt-3 text-xl">Backend Developer(Python/Django)</h3>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary ">Quick Links</h3>
          <ul>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="home">Home</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="about me">About Me</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="skills">My Skills</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="projects">My Projects</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">Services</h3>
          <ul>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link>Backend Development</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link>Full Stack Development</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-lg font-bold text-primary">Contact</h3>
          <p>(+880)  1581 528651</p>
          <p>(+880)  1332 721933</p>
          <p className="cursor-pointer hover:underline">
            {" "}
            raselsarkercse@gmail.com
          </p>
          <p className="mb-3">Bangladesh, Dhaka</p>
          <SocialLinks />
        </div>
      </div>
      <hr className="bg-primary border-primary " />
      <div>
        <p className="py-5 text-sm text-center text-white">
          Copyright © 2024 - All right reserved by Rasel sarker
        </p>
      </div>
    </div>
  );
};

export default Footer;
