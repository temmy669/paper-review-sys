import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const links: link[] = [
    { name: "Home", to: "/" },
    { name: "Submit a Proposal", to: "Submit" },
    { name: "About", to: "About" },
    { name: "Researcher", to: "Researcher" },
    { name: "Admin", to: "Admin" },
  ];

  interface link {
    name: string;
    to: string;
  }

  const items: string[] = ["Reviewer", "Researcher", "Student"];

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
    console.log(open);
  };

  return (
    <>
      <nav className="flex flex-row justify-between px-24 pt-4 pb-10 items-center text-button">
        <p className="text-darkBlue font-bold font-Buhrec text-3xl">BUHREC</p>
        <div className="flex flex-row justify-between gap-20 items-center ">
          <ul className="flex flex-row justify-between gap-10">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  key={index}
                  style={({ isActive }) => ({
                    color: isActive ? "#04385B" : "#045286",
                    fontWeight: isActive ? "700" : "420",
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button name="Login" isLight={false} isAbsolute={false} />

          <div className="relative inline-block">
            <button
              type="button"
              className={`px-5 py-1 h-9 text-[13px] rounded-sm
              text-white bg-button
            font-Montserrat hover:bg-darkBlue`}
              onClick={toggleDropdown}
            >
              Register
            </button>
            {isOpen && (
              <div className="absolute top-14 left-0 z-10 w-[150%] overflow-hidden rounded-xl bg-white shadow-md">
                <ul className="py-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="block px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <NavLink to={item}>{item}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Nav;
