import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between mx-10 ">
      <div className="flex flex-row-reverse md:flex-col justify-between md:justify-start md:w-1/3">
        <button className="flex p-5 bg-yellow max-w-fit text-white text-xl font-bold rounded-lg">
          Download
          <FaGooglePlay className=" ml-2 text-2xl" />
          <AiOutlineApple className=" text-2xl" />
        </button>
        <div className="flex flex-row">
          <FiFacebook className="p-1 text-3xl bg-neutralgrey text-white rounded-lg m-1" />
          <CiTwitter className="p-1 text-3xl bg-neutralgrey text-white rounded-lg m-1" />
          <FaInstagram className="p-1 text-3xl bg-neutralgrey text-white rounded-lg m-1" />
          <FaLinkedinIn className="p-1 text-3xl bg-neutralgrey text-white rounded-lg m-1" />
        </div>
      </div>
      <div className="flex flex-row justify-around py-5 md:w-2/3">
        <div className="footer__link 001">
          <h1 className="text-2xl font-bold text-blue">Links</h1>
          <div className="flex flex-col">
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
          </div>
        </div>

        <div className="footer__link 001">
          <h1 className="text-2xl font-bold text-blue">Links</h1>
          <div className="flex flex-col">
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
          </div>
        </div>

        <div className="footer__link 001">
          <h1 className="text-2xl font-bold text-blue">Links</h1>
          <div className="flex flex-col">
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
            <a className="text-lg font-bold text-blue cursor-pointer ">Links</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
