import { LandingPage } from "../../assets";
import SubmitForm from "./SubmitForm";

const Submit: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img src={LandingPage} alt="landingPage" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0000FF99] to-[#5858dd99] opacity-60 "></div>
        <div className="absolute -translate-y-56 translate-x-16 text-5xl text-landing font-Montserrat font-bold leading-snug">
          <h1>
            SUBMIT FOR <br /> REVIEW
          </h1>
        </div>
      </div>

      <SubmitForm />
    </>
  );
};

export default Submit;
