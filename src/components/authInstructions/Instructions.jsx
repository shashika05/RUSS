import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// animations
import LazyShow from "../animations/LazyShow";

const Instructions = () => {
  document.title = "RUSS 2025 | Author Instructions";
  window.scrollTo(0, 0);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <LazyShow>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Instructions to Authors
        </h1>

        {/* Eligibility Section */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("eligibility")}
          >
            Eligibility
            <span>{openSection === "eligibility" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "eligibility"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <p className="text-gray-700 pl-4 pb-4">
              Undergraduate-level research projects, Mini research projects, or
              Community projects conducted during the last two years
              (2022-2024).
            </p>
          </Transition>
        </div>

        {/* Submission Guidelines */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("submissionGuidelines")}
          >
            Submission Guidelines
            <span>{openSection === "submissionGuidelines" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "submissionGuidelines"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <div className="pl-4 pb-4 space-y-2">
              <p>
                1. Authors should submit the Author Information Form together
                with the manuscript.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Abstract & Extended Abstract should be submitted in two
                  separate files.
                </li>
                <li>
                  Abstracts & Extended Abstracts can be submitted via Email:{" "}
                  <a
                    href="mailto:russ2025@sci.ruh.ac.lk"
                    className="text-blue-600"
                  >
                    russ2025@sci.ruh.ac.lk
                  </a>
                  .
                </li>
                <li>
                  Maximum number of text pages in the Extended Abstract is four
                  (04) pages, with one column.
                </li>
              </ul>
            </div>
          </Transition>
        </div>

        {/* Abstract Section */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("abstract")}
          >
            Abstract
            <span>{openSection === "abstract" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "abstract"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <div className="pl-4 pb-4">
              <p>
                The following sections should be included in the{" "}
                <strong>Abstract:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Title & affiliations</li>
                <li>Maximum of 250 words</li>
                <li>No citations</li>
                <li>Font: Times New Roman, 12, line spacing 1.5</li>
              </ul>
            </div>
          </Transition>
        </div>

        {/* Extended Abstract Section */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("extendedAbstract")}
          >
            Extended Abstract
            <span>{openSection === "extendedAbstract" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "extendedAbstract"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <div className="pl-4 pb-4">
              <p>
                The following sections should be included in the{" "}
                <strong>Extended Abstract:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Title</li>
                <li>Abstract</li>
                <li>Introduction</li>
                <li>Materials & Methods</li>
                <li>Results and Discussion</li>
                <li>Conclusions</li>
                <li>References: Maximum of 8 citations</li>
              </ul>
              <p className="text-gray-700">
                <strong>Note:</strong> No author names should be included in the
                extended abstract.
              </p>
            </div>
          </Transition>
        </div>

        {/* Presentation Guidelines Section */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("presentationGuidelines")}
          >
            Guidelines for ORAL and POSTER PRESENTATIONS
            <span>{openSection === "presentationGuidelines" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "presentationGuidelines"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <div className="pl-4 pb-4 space-y-2">
              <h3 className="font-semibold">Oral Presentations</h3>
              <ul className="list-disc pl-6">
                <li>
                  Duration is strictly limited to 15 minutes (10 minutes for
                  presentation and 5 minutes for discussion).
                </li>
              </ul>

              <h3 className="font-semibold">Poster Presentation</h3>
              <ul className="list-disc pl-6">
                <li>
                  Poster should be digitally printed with dimensions 120cm x
                  90cm (4 x 3 ft).
                </li>
                <li>Orientation should be portrait.</li>
              </ul>
            </div>
          </Transition>
        </div>

        {/* Registration Section */}
        <div className="border-b mb-4">
          <h2
            className="text-lg font-semibold cursor-pointer flex justify-between items-center py-3"
            onClick={() => toggleSection("registration")}
          >
            Registration
            <span>{openSection === "registration" ? "-" : "+"}</span>
          </h2>
          <Transition
            show={openSection === "registration"}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="max-h-0 opacity-0"
            enterTo="max-h-screen opacity-100"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="max-h-screen opacity-100"
            leaveTo="max-h-0 opacity-0"
          >
            <div className="pl-4 pb-4 space-y-2">
              <ul className="list-disc pl-6">
                <li>
                  Submit the Registration Form, Author Declaration Form, and
                  Bank Receipt to confirm payment of fees.
                </li>
                <li>
                  Deadline for Registration: <strong>January 14, 2025</strong>
                </li>
                <li>Registration Fee: Rs.500.00 per Participant</li>
              </ul>
            </div>
          </Transition>
        </div>

        {/* Submission Email */}
        <div className="text-center mt-6">
          <a
            href="/assets/files/Author_Instructions_RUSS2025.docx"
            className="text-sm text-[#6d2c95] hover:underline"
            download
          >
            Download author instructions
          </a>
          <p className="text-sm text-gray-500">
            Email for submissions:{" "}
            <a
              href="mailto:russ2025@sci.ruh.ac.lk"
              className="text-[#6d2c95] hover:underline"
            >
              russ2025@sci.ruh.ac.lk
            </a>
          </p>
        </div>
      </div>
    </LazyShow>
  );
};

export default Instructions;
