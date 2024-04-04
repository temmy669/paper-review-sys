import { Form, Link } from "react-router-dom";
import { Button } from "../../components";
import useAuth from "../../utils/hooks/useAuth";
import { eyeClosed, eyeOpen } from "../../assets";
import { useState } from "react";

const RegisterFormForResearcher = () => {
  const { login } = useAuth();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    console.log(isPasswordVisible);

    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <Form
      method="post"
      action=""
      className="flex flex-col gap-5 pb-8 w-[100%] font-Montserrat"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="FullName">FullName</label>
        <input
          type="text"
          name="FullName"
          id="FullName"
          placeholder="Enter Full Name"
          className="w-3/4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Membership">Membership Type</label>
        <select
          name="Membership"
          id="Membership"
          className="w-3/4 px-3 block py-2 border-ash rounded-lg border"
        >
          <option value="" selected hidden className="">
            Select Membership Type
          </option>
          <option value="">Home Member</option>
          <option value="">External Member</option>
          <option value="">Invited</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="Country">Country Domicile</label>
        <input
          type="text"
          name="Country"
          id="Country"
          placeholder="Enter Countnry Domicile"
          className="w-3/4"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-2">
          <label htmlFor="Institution">Institution Name</label>
          <div className="relative">
            <input
              type="text"
              name="Institution"
              id="Institution"
              placeholder="Enter Institution"
              className="w-3/4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Years">Years of Reviewing</label>
          <input
            type="number"
            name="Years"
            min={0}
            max={30}
            id="Years"
            placeholder="Years of Reviewing"
            className="w-3/4"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="w-3/4"
            />
            <img
              className="absolute left-36 cursor-pointer top-3 w-3 h-3"
              src={isPasswordVisible ? eyeOpen : eyeClosed}
              alt="visible"
              onClick={toggleVisibility}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            className="w-3/4"
          />
        </div>
      </div>

      <div className="flex gap-44">
        <Link to="/" onClick={login}>
          <Button isAbsolute={false} isLight={false} name="Register" />
        </Link>
      </div>
    </Form>
  );
};

export default RegisterFormForResearcher;
