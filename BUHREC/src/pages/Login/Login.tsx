import { useState } from "react";
import LoginForm from "./LoginForm";
import { AuthLayout } from "../../Layout";
import RegisterForm from "./RegisterForm";

const Login: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const setToLogin = () => {
    setToggle(true);
  };

  const setToRegister = () => {
    setToggle(false);
  };
  return (
    <div>
      <AuthLayout />
      <div className="flex flex-col top-1/3 pl-56 w-[60%] pt-[6%]">
        <div className="flex gap-60">
          <div className="flex flex-col pb-5">
            <h2
              className={`text-3xl ${
                toggle ? null : "text-[#5A5B5D9C]"
              } font-bold cursor-pointer`}
              onClick={setToLogin}
            >
              Login
            </h2>
            <span
              className={`h-1 ${toggle ? "bg-lightBlue" : null}  mt-2 w-14`}
            ></span>
          </div>
          <div className="flex flex-col pb-5">
            <h2
              className={`text-3xl font-bold ${
                !toggle ? null : "text-[#5A5B5D9C]"
              } cursor-pointer`}
              onClick={setToRegister}
            >
              Register
            </h2>
            <span
              className={`h-1 ${!toggle ? "bg-lightBlue" : null}  mt-2 w-14`}
            ></span>
          </div>
        </div>
        {toggle ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Login;
