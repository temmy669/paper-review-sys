import { LandingPage } from "../../assets";
import { CallToAction } from "../../components";

import HomeCard, { HomeCardProps } from "./HomeCard";

const Home: React.FC = () => {
  const homecards: HomeCardProps[] = [
    {
      heading: "Streamlined Proposal Submission",
      text: "Our platform simplifies research proposal submissions with a user-friendly interface. It streamlines the process by organizing information, providing real-time feedback, and ensuring submissions meet all criteria, allowing researchers to focus on the quality of their proposals.",
      img: LandingPage,
      isReversed: false,
    },
    {
      heading: "Streamlined Proposal Submission",
      text: "Our platform simplifies research proposal submissions with a user-friendly interface. It streamlines the process by organizing information, providing real-time feedback, and ensuring submissions meet all criteria, allowing researchers to focus on the quality of their proposals.",
      img: LandingPage,
      isReversed: true,
    },
  ];
  return (
    <>
      <div className="relative">
        <img src={LandingPage} alt="landingPage" />
        <div className="absolute -translate-y-56 translate-x-16 text-5xl text-landing font-Montserrat font-bold leading-snug">
          <h1>Welcome to</h1> <h1> BUHREC</h1>
        </div>
      </div>
      <div className="pt-24 flex flex-col items-center pb-24">
        <h2 className="font-Montserrat text-darkBlue font-bold text-2xl ">
          SUBMIT PROPOSALS LIKE NEVER BEFORE
        </h2>
      </div>
      <div className="flex flex-col gap-32 pb-20">
        {homecards.map(({ img, text, heading, isReversed }, index) => (
          <HomeCard
            heading={heading}
            img={img}
            key={index}
            text={text}
            isReversed={isReversed}
          />
        ))}
      </div>
      <CallToAction />
      <div className="flex flex-col gap-32 pb-24">
        {homecards.map(({ img, text, heading, isReversed }, index) => (
          <HomeCard
            heading={heading}
            img={img}
            text={text}
            isReversed={isReversed}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
