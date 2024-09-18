import { useState, useEffect } from "react";

import { IoIosArrowForward } from "react-icons/io";

import img1 from "../../assets/hero-bg-1.jpg";
import img2 from "../../assets/hero-bg-2.jpg";
import img3 from "../../assets/hero-bg-3.jpg";
import img4 from "../../assets/hero-bg-4.jpg";

const HeroSlider = () => {
  const slides = [
    {
      image: img1, // replace with your image paths
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
    // Add more slides as needed
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
    <div className="max-w-full mx-auto relative h-[600px] mb-20 ">
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
              Ruhuna Science <br />
              <span className="block mt-4">Research Circle</span>
            </h1>
            <p className="my-4 w-[30%]">
              A nonprofit organization with a strong research base across a
              spectrum of academic disciplines engaging in research at national
              and international levels.
            </p>
            <a
              href="/contact-us"
              className="bg-[#DD5757] flex items-center gap-1 hover:gap-4 uppercase text-black hover:text-white py-2 px-8 rounded-lg hover:bg-[#e94040] transition-all duration-300 mt-4"
            >
              calling for abstracts
              <IoIosArrowForward className="text-button-text text-xl  " />
            </a>
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
