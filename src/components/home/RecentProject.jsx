import img2 from "/src/assets/Container.png";

const RecentProject = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 ">
      <div className="flex flex-col md:flex-row mb-20">
        <div className="basis-1/2">
          <div className=" w-full h-full">
            <img
              src={img2}
              alt={`Slide x + 1}`}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="basis-1/2 items-center place-content-center">
          <div>
            <h1 className=" font-semibold text-3xl md:text-5xl my-10">
              Recent Projects
            </h1>
            <p className="text-textcolor">
              RUSREC provides a collaborative environment for idea exchange
              across all disciplines of materials science through its meetings,
              community services and other programs designed to foster
              networking and cooperation.
            </p>
            <a
              href="/"
              className="bg-buttonbg w-fit  flex items-center gap-1 hover:gap-4 uppercase text-white hover:text-black py-2 px-8 rounded-lg hover:bg-buttonhover transition-all duration-300 mt-4"
            >
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-14">
        <h1 className=" font-semibold text-3xl md:text-5xl my-10">
          1st Ruhuna International Undergraduate Research Symposium 2022
          (RIURES&apos;22)
        </h1>
        <p className="text-textcolor mb-6">
          The 1st Ruhuna International Undergraduate Research Symposium 2022
          (RIURES&apos;22) was held as a hybrid event on 2nd November 2022 at
          the Senate Room of the University of Ruhuna under the theme
          &apos;Towards Broadening Horizons&apos;. Through the provision of a
          global forum for the exchange and dissemination of knowledge,
          experiences, and research discoveries on a diverse range, the
          symposium aimed to bring up undergraduates from local and foreign
          universities. It gave all undergraduates the chance to contribute and
          communicate research findings, ideas, and trends with the larger
          academic community.
        </p>
        <a
          href="https://www.sci.ruh.ac.lk/rusrec/symposia/riures22.html"
          className="text-textcolor underline"
        >
          Click here to read more about the symposium.
        </a>
      </div>
    </div>
  );
};

export default RecentProject;
