import { useState, useEffect } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

import img1 from "../../assets/hero-bg-1.jpg";
import img2 from "../../assets/hero-bg-2.jpg";
import img3 from "../../assets/hero-bg-3.jpg";
import img4 from "../../assets/hero-bg-4.jpg";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const slides = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-full mx-auto relative h-[500px] md:h-[600px] mb-20 ">
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0">
          {slides?.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full ">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover  w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col absolute inset-0 bg-black bg-opacity-40 px-4 md:px-8 md:justify-between">
          <div className="flex flex-col justify-center items-center text-white text-center md:mt-20 mt-10 ">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl uppercase  mb-4">
              1<sup>st</sup> Ruhuna Undergraduate <br />
              <span className="block mt-4">Science Symposium</span>
            </h1>
            <p className="my-4 w-full md:w-[30%] text-xl">
              &quot;Research for shaping the future&quot;
            </p>

            <div className="flex flex-row items-center">
              <SlCalender />{" "}
              <p className="ml-2">
                {" "}
                Date: 23<sup>rd</sup> January 2025
              </p>
            </div>
            <div className="flex flex-row">
              <IoLocationOutline className="mt-1" />{" "}
              <p className="ml-2">
                {" "}
                Location: Faculty of Science, University of Ruhuna
              </p>
            </div>
            <Link
              to="/programme"
              className="bg-buttonbg flex items-center gap-1 hover:gap-4 uppercase text-white hover:text-black py-2 px-8 rounded-lg hover:bg-buttonhover transition-all duration-300 mt-4"
            >
              More About Symposium
              <IoIosArrowForward className="text-button-text text-xl  " />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {slides?.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 cursor-pointer ${
              index === currentIndex ? "bg-gray-600" : "bg-gray-300"
            } rounded-full transition-colors duration-300`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
