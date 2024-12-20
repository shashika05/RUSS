import React from "react";

import HeroSlider from "./HeroSlider";
import PastSymp from "./About";
import Timeline from "./TimeLine";

//Animations
import LazyShow from "../animations/LazyShow";
import Brick from "../sponsor-brick/Brick";

export default function Home() {
  document.title = "RUSS 2025 | Home";
  window.scrollTo(0, 0);
  return (
    <div>
      <HeroSlider />
      <LazyShow>
        <PastSymp />
      </LazyShow>
      <LazyShow>
        <Timeline />
      </LazyShow>
      {/* <LazyShow>
        <Brick />
      </LazyShow> */}
    </div>
  );
}
