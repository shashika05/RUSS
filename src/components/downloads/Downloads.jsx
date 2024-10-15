import React from "react";
import { BsDownload } from "react-icons/bs";

//animations
import LazyShow from "../animations/LazyShow";

const Downloads = () => {
  document.title = "RUSS 2025 | Downloads";
  window.scrollTo(0, 0);
  const documents = [
    {
      name: "Abstract Template",
      link: "/assets/files/Abstract_template_RUSS25.docx",
    },
    {
      name: "Author Declaration Form",
      link: "/assets/files/Author_declaration_form_RUSS2025.docx",
    },
    {
      name: "Author Information Form",
      link: "/assets/files/Author_Information_form_RUSS25.docx",
    },
    {
      name: "Author Instructions",
      link: "/assets/files/Author_Instructions_RUSS2025.docx",
    },
    {
      name: "Event Flyer",
      link: "/assets/files/ristcon_2025.pdf",
    },
    {
      name: "Registration Form",
      link: "/assets/files/Registration_form_RUSS2025.docx",
    },
  ];
  const onDownloadClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  return (
    <LazyShow>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-col mb-8">
            <h1 className="text-4xl font-bold text-center">Downloads</h1>
            <BsDownload size={40} />
          </div>
          {/* List of Downloadable Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white h-40 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
              >
                <h2 className="text-xl font-semibold mb-4">{doc.name}</h2>
                <a
                  href={doc.link}
                  className="inline-block w-full text-center py-2 mt-2 px-4 bg-[#6D2C95] text-white rounded-md hover:bg-[#6D2C95]/80 transition duration-200 ease-in-out"
                  onClick={(e) => onDownloadClick(e, doc.link)}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LazyShow>
  );
};

export default Downloads;
