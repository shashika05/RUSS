import React from "react";
import { MdOutlineMail, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Brick = ({ sponsers }) => {
  document.title = "Sponsor Wall";
  let newSponsers = [...Array(30 - sponsers.length).fill("available")]; // 25 regular available bricks];
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6">Sponsor Wall</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sponsers.map((index) => (
          <div
            key={index.id}
            className={`p-4 flex flex-col rounded-lg items-center justify-center min-w-40 min-h-24 text-white font-semibold text-center bg-[#6D2C95]`}
          >
            {/* Brick {index + 1} */}
            {index.name}
            <div className="text-s mt-2 flex flex-row">
              <MdLocationPin className="mt-1" />
              {index.location}
            </div>
          </div>
        ))}
        {newSponsers.map((status, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col rounded-lg items-center justify-center min-w-40 min-h-24 text-white font-semibold text-center ${
              status === "allocated" ? "bg-[#6D2C95]" : "bg-gray-500"
            }`}
          >
            {/* Brick {index + 1} */}
            {status == "allocated" ? "Name of Sponsor" : "Available"}
            <div className="text-xs mt-2">
              {status === "allocated" ? "Allocated" : ""}
            </div>
          </div>
        ))}
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

export default Brick;
