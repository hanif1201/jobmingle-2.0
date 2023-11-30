import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__button">
        <button className="footer__section__button">
          Download
          <FaGooglePlay className="googleplay" />
          <AiOutlineApple className="Appleplay" />
        </button>
        <div className="social__buttons">
          <FiFacebook className="footer__icon" />
          <CiTwitter className="footer__icon" />
          <FaInstagram className="footer__icon" />
          <FaLinkedinIn className="footer__icon" />
        </div>
      </div>

      <div className="footer__link 001">
        <h1 className="link__header">Links</h1>
        <div className="link__div">
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
        </div>
      </div>

      <div className="footer__link 001">
        <h1 className="link__header">Links</h1>
        <div className="link__div">
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
        </div>
      </div>

      <div className="footer__link 001">
        <h1 className="link__header">Links</h1>
        <div className="link__div">
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
