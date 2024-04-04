import { AuthLayout } from "../../Layout";
import AdminLoginForm from "./AdminLoginForm";

const AdminLogin: React.FC = () => {
  //   const [toggle, setToggle] = useState<boolean>(true);

  //   const setToLogin = () => {
  //     setToggle(true);
  //   };

  //   const setToRegister = () => {
  //     setToggle(false);
  //   };
  return (
    <div>
      <AuthLayout />
      <div className="flex flex-col top-1/3 pl-56 w-[60%] pt-[6%]">
        <div className="flex gap-60">
          <div className="flex flex-col pb-5">
            <h2
              className="text-3xl 
               
               font-bold cursor-pointer"
            >
              Login
            </h2>
            <span className={`h-1  bg-lightBlue mt-2 w-14`}></span>
          </div>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
