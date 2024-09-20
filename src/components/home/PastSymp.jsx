import React from "react";

const PastSymp = () => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="mx-auto text-center items-center">
        <h1 className=" font-semibold text-3xl md:text-5xl my-10">
          The Undergraduate Research <br /> Symposium
        </h1>
        <p className="text-textcolor">
          The Undergraduate Research Symposium of the University of Ruhuna is a
          unique event in the calendar of the university. The Annual Research
          Symposium was initiated as a regular event in 2016. The goal of RUSREC
          2018 was to bring leading academics, researchers and scholars to
          exchange and share their experience and research results on all
          spheres to a common platform. The 1st Undergraduate National Research
          Symposium in commemoration of the 40th Anniversary of the University
          of Ruhuna. (3rd Undergraduate Research Symposium 2018) was open for
          all undergraduates of state universities. Mainly aiming to disseminate
          new knowledge acquired through research conducted by the academic
          communities of the universities.
        </p>
        <a
          href="/contact-us"
          className="bg-buttonbg w-fit mx-auto flex items-center gap-1 hover:gap-4 uppercase text-white hover:text-black py-2 px-8 rounded-lg hover:bg-buttonhover transition-all duration-300 mt-4"
        >
          See All Past Symposium
        </a>
        <div className="flex flex-row gap-4 md:gap-10 mt-6 mb-14">
          <div className=" w-full h-full ">
            <img
              src={`/src/assets/hero-bg-3.jpg`}
              alt={`Slide x + 1}`}
              className="object-cover rounded-2xl"
            />
          </div>

          <div className=" w-full h-full">
            <img
              src={`/src/assets/hero-bg-2.jpg`}
              alt={`Slide x + 1}`}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastSymp;
