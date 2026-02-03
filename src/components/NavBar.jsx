import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const NavBar = () => {
  return (
    <>
      <div className="navbar h-[8vh] shadow-sm md:px-4 lg:px-4 bg-gray-800 text-gray-100  ">
        <div className="navbar-start">
          <a
            className="btn btn-ghost text-lg md:text-xl lg:text-xl flex justify-between gap-2"
            href="#"
          >
            <img className="w-8 h-8" src={logo} alt={'logo'} /> Reddit Post
            Summarizer
          </a>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Shreyanshs0ni/reddit-post-summarizer"
            target="_blank"
            className="btn"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
