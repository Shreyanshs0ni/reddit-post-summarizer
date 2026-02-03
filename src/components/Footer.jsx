import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-gray-800 text-gray-100 p-4 absolute bottom-0">
        <aside className=" items-center justify-between flex lg:grid-cols-3 md:grid-cols-3 w-full">
          <div className=" text-lg md:text-xl lg:text-xl font-bold flex items-center gap-2">
            <img className="w-8 h-8" src={logo} alt={'logo'} /> Reddit Post
            Summarizer
          </div>
          <p className="hidden md:block lg:block">
            Shreyansh Soni © {new Date().getFullYear()} - All right reserved
          </p>

          <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:place-self-center md:justify-self-end">
            <a
              href="https://www.instagram.com/shreyanshs0ni/"
              target="_blank"
              className="btn"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-soni-b2aa5b275/"
              target="_blank"
              className="btn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-xl" />
            </a>
            <a
              href="https://github.com/Shreyanshs0ni"
              target="_blank"
              className="btn"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-xl" />
            </a>
          </div>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
