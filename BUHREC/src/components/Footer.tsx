import { Facebook, Twitter, Instagram } from "../assets";
const Footer: React.FC = () => {
  return (
    <footer className="h-[300px] w-full flex flex-row  bg-lightBlue pt-16 pb-20 px-64 justify-between">
      <div className="flex flex-col-reverse font-Buhrec font-bold text-darkBlue text-lg">
        BUHREC
      </div>
      <div className="">
        <ul className="list-none font-Montserrat">
          <li className="mb-5 cursor-pointer">Home</li>
          <li className="mb-5 cursor-pointer">About</li>
          <li className="mb-5 cursor-pointer">Contact Us</li>
          <li className="mb-5 cursor-pointer">Help</li>
        </ul>
      </div>
      <div>
        <ul className="list-none font-Montserrat">
          <li className="mb-5 cursor-pointer">Admin</li>
          <li className="mb-5 cursor-pointer">Researcher</li>
          <li className="mb-5 cursor-pointer">Reviewer</li>
          <li className="mb-5 cursor-pointer">Student</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row gap-16 mb-11 w-20">
          <img src={Facebook} className="w-5 cursor-pointer" alt="Facebook" />
          <img src={Twitter} className="w-5 cursor-pointer" alt="Twitter" />
          <img src={Instagram} className="w-5 cursor-pointer" alt="Instagram" />
        </div>
        <p className="font-semibold text-sm font-Montserrat">© BUHREC 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
