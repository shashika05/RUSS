import React from "react";
import { Link } from "react-router-dom";

import { MdOutlineMail, MdLocationPin } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import logo from "../../assets/logo-only.png";

export default function Footer() {
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <hr className="w-5/6 h-[3px] bg-[#6D2C95]" />
      </div>
      <div className="w-full h-auto md:flex mx-2 mt-2">
        <div className="md:w-1/2">
          <div className="w-auto h-auto flex flex-col items-center">
            <div className="flex gap-1">
              <img className="w-16 h-16" src={logo} alt="RUREClogo" />
              <div>
                <h1 className="text-2xl font-semibold text-[#6D2C95] ">
                  Ruhuna Undergraduate
                </h1>
                <h1 className="text-2xl font-semibold text-[#6D2C95]">
                  Science Symposium
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-5 text-[#333333]">
              <div>
                <p className="text-sm ml-6">
                  Please send us your ideas or suggestions! Any feedback would
                  be appreciated.
                </p>
              </div>
              <div className="ml-8 flex items-center">
                <MdLocationPin className="text-2xl" />
                <p className="text-sm ml-1">
                  Faculty of Science, University of Ruhuna, Matara, Srilanka
                  81000
                </p>
              </div>
              <div className="ml-8 flex items-center">
                <MdOutlineMail className="text-2xl" />
                <a
                  target="_blank"
                  href="mailto:russ2025@sci.ruh.ac.lk"
                  className="text-sm ml-1 underline"
                >
                  russ2025@sci.ruh.ac.lk
                </a>
              </div>
            </div>
            {/* <div className="flex gap-4 mb-4">
              <a
                target="_blank"
                href="https://www.youtube.com/c/RuhunaScienceResearchCircle"
              >
                <FiYoutube className="text-2xl" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/RuhunaScienceResearchCircle/"
              >
                <FiFacebook className="text-2xl" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/RUSS">
                <FiLinkedin className="text-2xl" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="md:w-1/2 mr-4 flex md:border-l-[3px] md:border-[#6D2C95] text-[#333333]">
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-bold mb-2">Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/programme">Symposium</Link>
              <Link to="/team#contact-info">Contact Us</Link>
              <Link to="/downloads">Downloads</Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-1 text-sm">
              <h3 className="font-bold mb-2">Popular Links</h3>
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
          {new Date().getFullYear()} © Faculty of Science, University of Ruhuna,
          Matara.
        </p>
      </div>
    </div>
  );
}
