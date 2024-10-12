import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaUserLarge } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Team = () => {
  document.title = "RUSS -2025 | Team";
  const committeeMembers = [
    {
      role: "Chairperson",
      name: "Dr. C. N. Ratnaweera",
      department: "Department of Chemistry",
    },
    {
      role: "Senior Treasurer",
      name: "Dr. (Mrs.) A. J. D. Perera",
      department: "Department of Botany",
    },
    { role: "President", name: "Mr. T. M. Kavinda" },
    {
      role: "Joint Secretary",
      name: "Miss. R. M. D. Nishani Bandara",
    },
    {
      role: "Joint Secretary",
      name: "Miss. R. K. A. I. Rasindi",
    },
    { role: "Junior Coordinator", name: "Mr. L. H. D. C. M. Hettiarachchi" },
    { role: "Vice President", name: "Mr. T. G. Y. D. Silva" },
    { role: "Junior Treasurer", name: "Mr. A. A. Pansilu" },
    { role: "Media Coordinator", name: "Mr. Supun Shaminda" },
    {
      role: "Junior Editor",
      name: "Mr. H. N. Devendra",
    },
    {
      role: "Junior Editor",
      name: "Mr. H. S. R. Yasas",
    },
    {
      role: "Junior Editor",
      name: "Mr. R. P. D. T. H. Rajapaksha",
    },
    {
      role: "Junior Editor",
      name: "Mr. M. K. Amadya",
    },
    {
      role: "Junior Editor",
      name: "Mr. Shanaka Karunathilaka",
    },
    {
      role: "Junior Editor",
      name: "Mr. Nimesh Rathnayaka",
    },
  ];

  const advisoryBoard = [
    { name: "Prof. K.N. Kumara", department: "Department of Chemistry" },
    {
      name: "Dr. (Mrs.) E.J.K.P. Nandani",
      department: "Department of Mathematics",
    },
    { name: "Mr. E.M.Ranathunga", department: "Department of Physics" },
    {
      name: "Mrs. T.D.G. Geethika",
      department: "Department of Computer Science",
    },
  ];

  const editorialBoard = [
    { name: "Prof. (Mrs) W.G.S.M. Kumari", department: "Department of Botany" },
    { name: "Prof. P.A. Jayantha", department: "Department of Mathematics" },
  ];

  const contactDetails = [
    {
      role: "Chairperson",
      name: "Dr. C. N. Rathnaweera",
      mobile: "+94 (71) 305 8518",
      email: "nadun@chem.ruh.ac.lk",
    },
    {
      role: "President",
      name: "Mr. T. M. Kavinda",
      mobile: "+94 (77) 455 3193",
    },
    {
      role: "Joint Secretary",
      name: "Miss. R. K. A. I. Rasindi",
      mobile: "+94 (70) 348 7764",
    },
    {
      role: "Joint Secretary",
      name: "Miss. R. M. D. Nishani Bandara",
      mobile: "+94 (76) 209 5652",
    },
  ];

  const renderCards = (data) =>
    data.map((item, index) => (
      <SwiperSlide key={index} className="flex justify-center m-2">
        <div className="flex flex-col bg-gray-100 h-64 w-64 shadow-md p-4 items-center justify-center rounded-xl max-w-xs text-center">
          <FaUserLarge color="#6D2C95" size={128} />
          <h3 className="font-semibold text-lg">{item.role || item.name}</h3>
          <p className="text-gray-600">{item.role == null ? "" : item.name}</p>
          {item.department && (
            <p className="text-gray-500">{item.department}</p>
          )}
          {item.mobile && (
            <div className="flex flex-row items-center">
              <IoIosCall />
              <a className="hover:text-[#6D2C95]" href={"tel:" + item.mobile}>
                {item.mobile}
              </a>
            </div>
          )}
          {item.email && (
            <div className="flex flex-row items-center">
              <IoIosMail />
              <a className="hover:text-[#6D2C95]" href={"mailto:" + item.email}>
                {item.email}
              </a>
            </div>
          )}
        </div>
      </SwiperSlide>
    ));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Meet the Team</h1>

      {/* Committee Members Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Committee Members</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          scrollbar={{ draggable: true }}
        >
          {renderCards(committeeMembers)}
        </Swiper>
      </section>

      {/* Advisory Board Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Advisory Board</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {renderCards(advisoryBoard)}
        </Swiper>
      </section>

      {/* Editorial Board Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Editorial Board</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {renderCards(editorialBoard)}
        </Swiper>
      </section>

      {/* Contact Details Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {renderCards(contactDetails)}
        </Swiper>
      </section>
    </div>
  );
};

export default Team;
