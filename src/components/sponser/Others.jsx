import sponsor1logo from "../../assets/natures_secret_logo.jpg";

import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Others = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl font-semibold mb-6">Other Sponsors</h1>
      <div>
        <img
          src={sponsor1logo}
          alt="Sponsor Logo"
          className="w-64 h-40 object-cover rounded-lg"
        />
        <p></p>
      </div>
      <p className="mt-8">
        Want to be a sponsor,{" "}
        <Link
          to="/team#contact-info"
          className="font-semibold hover:underline hover:text-[#6D2C95]"
        >
          Contact us
        </Link>{" "}
        for more info{" "}
      </p>
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
  );
};

export default Others;
