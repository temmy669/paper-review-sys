import Button from "./Button";

const CallToAction: React.FC = () => {
  return (
    <div className="px-20 text-white pb-20">
      <div className="bg-darkBlue flex flex-col justify-center items-center w-full py-24 rounded-md">
        <div className="flex flex-col justify-center items-center leading-7 font-semibold text-2xl">
          <p>Your Path to Exclusive and</p>
          <p>Accurate Research Begins Here!</p>
        </div>
        <div className="pt-14">
          <Button name="Work with us" isLight={true} isAbsolute={false} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
