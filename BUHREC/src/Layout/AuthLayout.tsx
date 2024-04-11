import { circles } from "../assets";

const AuthLayout: React.FC = () => {
  return (
    <div className="fixed right-0 h-screen">
      <h1 className="text-darkBlue font-bold font-Buhrec text-3xl absolute top-12 right-1/4">
        BUHREC
      </h1>
      <img src={circles} alt="cask" className="h-screen" />
    </div>
  );
};

export default AuthLayout;
