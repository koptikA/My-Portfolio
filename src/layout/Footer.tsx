import {FC} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
  return (
    <footer className="flex w-full flex-col md:flex-row justify-center py-[40px] gap-4 md:justify-between flex-wrap  min-h-[200px]   px-sides bg-black items-center ">
      <div className="flex items-center md:w-auto  flex-wrap   justify-center text-white gap-2">
        <Link to="/" className="font-cinzel ">
          {" "}
          HOME
        </Link>
        <Link to="/projects" className="font-cinzel ">
          {" "}
          PROJECT
        </Link>
        <Link to="/about" className="font-cinzel ">
          {" "}
          ABOUT
        </Link>
        <Link to="/contact" className="font-cinzel ">
          {" "}
          CONTACT
        </Link>
      </div>
      <div className="flex flex-col align-center md:w-auto    gap-4">
        
        {/* <a className="button text-center" href="mailto:alenakopsik@gmail.com">
        alenakopsik@gmail.com
        </a> */}

        <a className="button text-center" href="tel:+375 29 3394 628">
          +375 29 3394 628
        </a>
      </div>
      <ul className="wrapper pt-0 md:w-auto ">
        <li className="icon linkedin">
          <span className="tooltip">Linkedin</span>
          <a
            href="https://www.linkedin.com/in/alena-koptsik-14b757224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="icon behance">
          <span className="tooltip">Behance</span>
          <a
            href="https://www.behance.net/helenkoptik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>{" "}
        </li>
        <li className="icon instagram">
          <span className="tooltip">Github</span>
          <a
            href="https://github.com/koptikA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
