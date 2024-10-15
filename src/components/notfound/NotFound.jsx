import React from "react";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-background mt-16 text-foreground flex flex-col items-center justify-center">
      <div className="mb-28 animate-bounce flex flex-col items-center">
        <TbFaceIdError size={60} />
        <h1 className="text-[90px] font-semibold text-center h-32">
          Error: 404
        </h1>
      </div>
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-center mb-8 max-w-md px-4">
        The page you are looking for might have been removed or its name
        changed. Please check the URL and try again.
      </p>
      <Link
        to="/"
        className="text-primary-foreground px-6 py-3 bg-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-300/80 hover:text-[#6D2C95]"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
