import { Form, Link } from "react-router-dom";
import { Button } from "../../components";
import useAuth from "../../utils/hooks/useAuth";

const AdminLoginForm: React.FC = () => {
  const { login } = useAuth();
  return (
    <Form
      method="post"
      action=""
      className="flex flex-col gap-9 w-[100%] font-Montserrat"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="Username">UserName</label>
        <input
          type="text"
          name="Username"
          id="Username"
          placeholder="Enter Username"
          className="w-3/4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Admin">Admin Type</label>
        <select
          name="Admin"
          id="Admin"
          className="w-3/4 px-3 block py-2 border-ash rounded-lg border"
        >
          <option value="" selected hidden className="">
            Select Admin Type
          </option>
          <option value="">Chief Admin</option>
          <option value="">Assistant Admin</option>
          <option value="">Authorised Staff</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Enter Password"
          className="w-3/4"
        />
        <p className="text-button font-semibold cursor-pointer">
          Forgot password?
        </p>
      </div>

      <div className="flex gap-44">
        <Link to="/" onClick={login}>
          <Button isAbsolute={false} isLight={false} name="Login" />
        </Link>
      </div>
    </Form>
  );
};

export default AdminLoginForm;
