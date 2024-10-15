import React from "react";
import { Link } from "react-router-dom";

import img1 from "/src/assets/hero-bg-2.jpg";
import img2 from "/src/assets/hero-bg-3.jpg";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="mx-auto text-center items-center">
        <h1 className="font-semibold text-3xl md:text-5xl my-10">
          Ruhuna Undergraduate Science <br /> Symposium
        </h1>
        <p className="text-textcolor">
          RUSS 2025 is organized by the Faculty of Science, University of
          Ruhuna. This aims to provide a premier multidisciplinary forum for
          undergraduate researchers to present their research findings,
          innovations, practical challenges encountered and the solutions
          adopted in the fields of Science & Technology.
        </p>
        <Link
          to="/programme"
          className="bg-buttonbg w-fit mx-auto flex items-center gap-1 hover:gap-4 uppercase text-white hover:text-black py-2 px-8 rounded-lg hover:bg-buttonhover transition-all duration-300 mt-4"
        >
          More About Symposium
        </Link>
        <div className="flex flex-row gap-4 md:gap-10 mt-6 mb-24">
          <div className=" w-full h-full ">
            <img
              src={img1}
              alt={`Slide x + 1}`}
              className="object-cover rounded-2xl"
            />
          </div>

          <div className=" w-full h-full">
            <img
              src={img2}
              alt={`Slide x + 1}`}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
