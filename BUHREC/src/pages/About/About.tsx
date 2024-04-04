import { LandingPage } from "../../assets";
import { CallToAction } from "../../components";
import { slideProps } from "./Slide";
import Slider from "./Slider";

const About: React.FC = () => {
  const slides: slideProps[] = [
    {
      heading: "HOW WE STARTED",
      body: "Our mission is to enhance and uphold the quality of researches emanating from Babcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inadebcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inademic inquiry and innovation, contributing significantly to the global academic community.",
    },
    {
      heading: "OUR GOALS",
      body: "Our mission is to enhance and uphold the quality of researches emanating from Babcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inadebcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inademic inquiry and innovation, contributing significantly to the global academic community.",
    },
    {
      heading: "VALUES",
      body: "Our mission is to enhance and uphold the quality of researches emanating from Babcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inadebcock University, ensuring they meet the utmost standards. We are dedicated to fostering an environment of excellence inademic inquiry and innovation, contributing significantly to the global academic community.",
    },
  ];

  const operations: string[] = [
    "All students are expected to submit their research proposals and requests for ethical clearance, preferably during the first semester, and always well ahead of their pre-field presentation.",
    "Supervisors are ensure that students obtain ethical clearance certificates before being allowed to do their pre field presentation.",
    "Supervisors are to partner with BUHREC in monitoring the research as it goes on till completion",
  ];
  return (
    <div className="relative">
      <img src={LandingPage} alt="landingPage" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0000FF99] to-[#5858dd99] opacity-60 "></div>
      <div className="absolute -translate-y-56 translate-x-16 text-5xl text-landing font-Montserrat font-bold leading-snug">
        <h1>ABOUT US</h1>
      </div>
      <Slider slides={slides} />

      <div className="flex flex-row pt-10">
        <div className="basis-1/2 bg-darkBlue text-white pr-32 py-20 pl-20">
          <h3 className="text-4xl">OUR MISSION</h3>
          <p className="pt-4">
            Our mission is to enhance and uphold the quality of researches
            emanating from Babcock University, ensuring they meet the utmost
            standards. We are dedicated to fostering an environment of
            excellence inademic inquiry and innovation, contributing
            significantly to the global academic community.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse pb-14">
        <div className="basis-1/2 bg-darkBlue text-white pr-32 py-20 pl-20">
          <h3 className="text-4xl">OUR VISION</h3>
          <p className="pt-4">
            Our mission is to enhance and uphold the quality of researches
            emanating from Babcock University, ensuring they meet the utmost
            standards. We are dedicated to fostering an environment of
            excellence inademic inquiry and innovation, contributing
            significantly to the global academic community.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between px-28 pb-28 pt-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">HOW WE OPERATE</h2>
          <span className="h-1 bg-lightBlue mt-2 w-14"></span>
        </div>
        {operations.map((operation, index) => (
          <div
            key={index}
            className="flex justify-items-start items-center gap-20 py-10 px-20"
          >
            <div
              className={`w-16 h-16 rounded-[50%] text-2xl leading-10 ring-4 ${
                index == 2 ? null : "px-6"
              } ring-lightButton text-white text-center pt-3 bg-darkBlue `}
            >
              {index + 1}
            </div>
            <span className="text-left font-Montserrat">{operation}</span>
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  );
};

export default About;
