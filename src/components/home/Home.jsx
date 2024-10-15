import React from "react";

import HeroSlider from "./HeroSlider";
import PastSymp from "./About";
import Timeline from "./TimeLine";

//Animations
import LazyShow from "../animations/LazyShow";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <LazyShow duration={1}>
        <PastSymp />
      </LazyShow>
      <LazyShow duration={1}>
        <Timeline />
      </LazyShow>
    </div>
  );
}
