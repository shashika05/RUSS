import React from "react";

import speaker1 from "../assets/speaker1.jpeg";
import speaker2 from "../assets/speaker2.jpeg";

const speakerCardClasses =
  "flex flex-row sm:flex-col bg-slate-300 md:w-[600px] p-4 rounded-lg shadow-md mb-8";
const textClasses = "text-muted-foreground";

const SpeakerCard = ({
  imgSrc,
  imgAlt,
  speakerType,
  speakerName,
  profession,
  organization,
  location,
}) => {
  return (
    <div className={speakerCardClasses}>
      <div className="flex-[0.4]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-lg mb-4 h-64 w-48 object-cover"
        />
      </div>
      <div className="flex-[0.6] pl-4">
        <h3 className="text-lg font-semibold">{speakerType}</h3>
        <h4 className="text-xl font-bold">{speakerName}</h4>
        <p className={textClasses}>{profession}</p>
        <p className={textClasses}>{organization}</p>
        <p className={textClasses}>{location}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <div className="p-6 bg-background">
      <h2 className="text-3xl text-center font-bold mb-4">
        Conference Speakers
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-around mb-6">
        <SpeakerCard
          imgSrc={speaker1}
          imgAlt="Prof. N. T. Perera"
          speakerType="Keynote Speaker"
          speakerName="Prof. N. T. Perera"
          profession="Department of Chemistry"
          organization="Faculty of Applied Science"
          location="University of Sri Jayewardenepura"
        />
        <SpeakerCard
          imgSrc={speaker2}
          imgAlt="Prof. Inoka C. Perera"
          speakerType="Plenary Speaker"
          speakerName="Prof. Inoka C. Perera"
          profession="Department of Zoology & Environmental Sciences"
          organization="Faculty of Science"
          location="University of Colombo"
        />
      </div>
    </div>
  );
};

export default Speakers;
