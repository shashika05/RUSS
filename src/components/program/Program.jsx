import React from "react";
import { IoIosCall } from "react-icons/io";

import LazyShow from "../animations/LazyShow";

const Program = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 text-gray-800">
      {/* Header Section */}
      <LazyShow>
        <header className="bg-purple-600 py-12 text-center text-white">
          <h1 className="text-4xl font-bold uppercase">
            1st Ruhuna Undergraduate Science Symposium 2025
          </h1>
          <p className="mt-4 text-lg italic">
            "Researches for Shaping the Future"
          </p>
          <p className="mt-2 text-lg">23rd January 2025</p>
        </header>
      </LazyShow>

      {/* Call for Abstracts Section */}
      <LazyShow>
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            Calling for Abstracts
          </h2>
          <p className="text-lg mb-6">
            Submit your abstract for this exciting symposium!
          </p>
          <div className="bg-yellow-100 shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto">
            <p className="text-lg font-semibold">
              Deadline for Submission of Abstracts:{" "}
              <span className="font-bold">12th November 2024</span>
            </p>
            <p className="mt-2 text-lg">
              Notification of Acceptance:{" "}
              <span className="font-bold">12th December 2024</span>
            </p>
            <p className="mt-2 text-lg">
              Conference Date:{" "}
              <span className="font-bold">23rd January 2025</span>
            </p>
          </div>
        </section>
      </LazyShow>

      {/* Key Areas Section */}
      <LazyShow>
        <section className="py-12 bg-purple-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-8">
              Key Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Biological Science",
              "Marine & Environment",
              "Chemistry",
              "Physics, Material Science & Technology",
              "Mathematics & Statistics",
              "Computer Science",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white shadow-lg mx-6 rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-purple-600">
                  {area}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-700">
            Best poster and oral presentation prizes for each key area will be
            awarded!
          </p>
        </section>
      </LazyShow>

      {/* Submission Details Section */}
      <LazyShow>
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            Submission of Papers
          </h2>
          <p className="text-lg mb-6">
            Papers must be submitted to{" "}
            <span className="font-bold text-indigo-600">
              russ2025@ruh.ac.lk
            </span>
          </p>
          <div className="bg-yellow-100 shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto">
            <p className="text-lg font-semibold">
              Registration Fee:{" "}
              <span className="font-bold">Rs.500 per Participant</span>
            </p>
            <p className="mt-2">
              All submissions will be reviewed before acceptance. Accepted
              abstracts will be published in the proceedings.
            </p>
          </div>
        </section>
      </LazyShow>

      {/* Contact Details Section */}
      <LazyShow>
        <section className="py-12 bg-purple-50 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
            {[
              { name: "Mr. Kavinda", phone: "+94 (77) 455 3193" },
              { name: "Ms. Rasindi", phone: "+94 (70) 3487764" },
              { name: "Ms. Dinelka", phone: "+94 (76) 209 5652" },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-purple-600">
                  {contact.name}
                </h3>
                <div className="mt-2 flex flex-row items-center justify-center">
                  <IoIosCall />
                  <a
                    href={"tel:" + contact.phone}
                    className="text-lg text-gray-700 text-center hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </LazyShow>
    </div>
  );
};

export default Program;
