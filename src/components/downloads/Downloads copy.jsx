import React, { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const SymposiumDownloads = () => {
  // Document details
  const documents = [
    {
      name: "Abstract Template",
      link: "../../../public/files/Abstract_template_RUSS25.docx",
    },
    {
      name: "Author Declaration Form",
      link: "../../../public/files/Author_declaration_form_RUSS2025.docx",
    },
    {
      name: "Author Information Form",
      link: "../../../public/files/Author_Information_form_RUSS25.docx",
    },
    {
      name: "Author Instructions",
      link: "../../../public/files/Author_Instructions_RUSS2025.docx",
    },
    {
      name: "Event Flyer",
      link: "../../../public/files/ristcon_2025.pdf",
    },
    {
      name: "Registration Form",
      link: "../../../public/files/Registration_form_RUSS2025.docx",
    },
  ];

  // State to handle document viewing
  const [selectedDoc, setSelectedDoc] = useState(null);

  // Function to view a selected document
  const handleViewDocument = (docLink) => {
    const docType = docLink.split(".").pop();
    if (docType === "docx" || docType === "pdf") {
      setSelectedDoc([{ uri: docLink, type: "docx" }]);
    } else {
      alert("Only DOCX and PDF formats can be viewed.");
    }
  };

  return (
    <div className="min-h-[68vh] bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Symposium Downloads
        </h1>

        {/* List of Downloadable Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white shadow-lg h-40 rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold mb-4">{doc.name}</h2>
              <div className="flex space-x-4">
                <a
                  href={doc.link}
                  className="w-1/2 text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
                  download
                >
                  Download
                </a>
                <button
                  onClick={() => handleViewDocument(doc.link)}
                  className="w-1/2 text-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 ease-in-out"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Document Viewer Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
              >
                Close
              </button>
              <DocViewer
                documents={selectedDoc}
                pluginRenderers={DocViewerRenderers}
                className=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymposiumDownloads;
