import { Form, Link } from "react-router-dom";
import { Button } from "../../components";
import useAuth from "../../utils/hooks/useAuth";
import { eyeClosed, eyeOpen } from "../../assets";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const { login } = useAuth();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [maxDate, setMaxDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const toggleVisibility = () => {
    console.log(isPasswordVisible);

    setPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const maxYear = currentYear - 18;
    const minYear = currentYear - 65;
    const maxDate = `${maxYear}-01-01`;
    const minDate = `${minYear}-01-01`;
    setMaxDate(maxDate);
    setMinDate(minDate);
  }, []);

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
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          className="w-3/4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="secondEmail">Secondary Email Address</label>
        <input
          type="secondEmail"
          name="secondEmail"
          id="secondEmail"
          placeholder="Enter email"
          className="w-3/4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Degree">Degree Type</label>
        <select
          name="Degree"
          id="Degree"
          className="w-3/4 px-3 block py-2 border-ash rounded-lg border"
        >
          <option value="" selected hidden className="">
            Select Degree Type
          </option>
          <option value="">Undergraduate</option>
          <option value="">PG/MSC/PHD</option>
          <option value="">Independent</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="program">Program Discipline</label>
        <select
          name="discipline"
          id="discipline"
          className="w-3/4 px-3 block py-2 border-ash rounded-lg border"
        >
          <option value="" hidden className="">
            Select Discipline
          </option>
          <option value="">Compuiting and Engineering Sciences</option>
          <option value="">Environmaental Sciences</option>
          <option value="">Basic Sciences</option>
          <option value="">Health</option>
          <option value="">Social Sciences</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          className="w-3/4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date">Date of Birth</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Select your date of birth"
          className="w-3/4"
          min={minDate}
          max={maxDate}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="peer" className=" basis-full">
          Be invited for peer review?
        </label>
        <input type="checkbox" name="peer" id="peer" />
      </div>
      <div className="flex ">
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

export default RegisterForm;
