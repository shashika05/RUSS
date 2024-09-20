import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import logo from "../../assets/RUHREClogo.png";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-center">
        <hr className="w-5/6 h-[3px] bg-[#6D2C95]" />
      </div>
      <div className="w-full h-auto md:flex">
        <div className="md:w-1/2 m-5">
          <div className="w-auto h-auto flex flex-col items-center">
            <div className="flex gap-1">
              <img className="w-16 h-16" src={logo} alt="RUREClogo" />
              <h1 className="text-6xl font-bold text-[#6D2C95]">RUSREC</h1>
            </div>
            <div className="flex flex-col gap-2 my-5 text-[#333333]">
              <div>
                <p className="text-lg">
                  Please send us your ideas or suggestions! Any feedback would
                  be appreciated.
                </p>
              </div>
              <div className="flex">
                <CiLocationOn className="text-2xl" />
                <p className="text-lg">
                  <b>RUSREC</b>, Faculty of Science, University of Ruhuna,
                  Matara, Srilanka 81000
                </p>
              </div>
              <div className="flex items-center">
                <MdOutlineMail className="text-2xl" />
                <a
                  target="_blank"
                  href="rusrecscifac@gmail.com"
                  className="text-lg underline"
                >
                  rusrecscifac@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.youtube.com/c/RuhunaScienceResearchCircle"
              >
                <FiYoutube className="text-5xl" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/RuhunaScienceResearchCircle/"
              >
                <FiFacebook className="text-5xl" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/rusrec">
                <FiLinkedin className="text-5xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex m-5 md:border-l-[3px] md:border-[#6D2C95] text-[#333333]">
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <a href="">Home</a>
              <a href="">Past Symposia</a>
              <a href="">Other Projects</a>
              <a href="">Meet The Team</a>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold mb-2">Popular Links</h3>
              <a target="_blank" href="https://www.ruh.ac.lk/index.php/en/ ">
                University of Ruhuna
              </a>
              <a
                target="_blank"
                href="https://alpha.ruh.ac.lk/FacultyofScience/"
              >
                Faculty of Science, UOR
              </a>
              <a target="_blank" href="https://www.lib.ruh.ac.lk/">
                UOR Library
              </a>
              <a target="_blank" href="https://www.researchgate.net/">
                ResearchGate®
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 p-2">
        <p className="text-center text-[#333333]">
          &copy;Copyright <b>2024-2033 RUSREC</b> - All Right Reserved
        </p>
      </div>
    </div>
  );
}
