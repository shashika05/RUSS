import HeroSlider from "./HeroSlider";
import PastSymp from "./PastSymp";
import RecentProject from "./RecentProject";

import procdeeding from "../../assets/proceeding.png";
import yt from "../../assets/yt.png";
import album from "../../assets/album.png";
import ProjectCard from "./ProjectCard";

const Projects = [
  {
    title: "Proceedings of RIURES'22",
    description:
      "Proceedings Book of the 1st Ruhuna International Undergraduate Research Symposium is now available as an e-book.",
    img: procdeeding,
    link: "https://www.sci.ruh.ac.lk/rusrec/proceedings/riures22/index.html",
    linktext: "View the E-Book ->",
  },
  {
    title: "Inauguration - Webcast",
    description:
      "Now you can watch the recorded live stream of the inauguration ceremony of RIURES'22.",
    img: yt,
    link: "https://www.youtube.com/watch?v=IvhFX79_jHU",
    linktext: "Watch on Youtube ->",
  },
  {
    title: "Photo Gallery ",
    description:
      "Full photo coverage of the RIURESS'22 is now avaliable on Facebook®.",
    img: album,
    link: "https://www.sci.ruh.ac.lk/rusrec/proceedings/riures22/index.html",
    linktext: "See full album on Facebook ->",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <PastSymp />
      <RecentProject />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-32 mb-24 ">
        {Projects.map((project, index) => (
          <ProjectCard key={index} values={project} />
        ))}
      </div>
    </div>
  );
}
