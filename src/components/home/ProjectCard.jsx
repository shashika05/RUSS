const ProjectCard = (props) => {
  return (
    <div className="border-2 items-center group rounded-xl  text-center pb-7">
      <div className="w-full">
        <img
          src={props.values.img}
          alt=""
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="bg-buttonbg mx-auto items-center w-[15%] h-[4px] mt-6 transition-all duration-500 ease-in-out group-hover:w-[50%] rounded-3xl"></div>
      <h1 className=" font-semibold text-xl md:text-xl mt-8 mb-5">
        {props.values.title}
      </h1>
      <p className="text-textcolor mb-3">{props.values.description}</p>
      <a
        href={props.values.link}
        className="text-textcolor border-b-2 border-[#6D2C95] hover:text-[#6D2C95] transition-all duration-300 ease-in-out "
      >
        {props.values.linktext}
      </a>
    </div>
  );
};

export default ProjectCard;
