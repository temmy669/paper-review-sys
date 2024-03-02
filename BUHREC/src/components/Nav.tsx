import Button from "./Button";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
  return (
    <>
      <nav className="flex flex-row justify-between px-24 pt-4 pb-10 items-center text-button">
        <p className="text-darkBlue font-bold font-Buhrec text-3xl">BUHREC</p>
        <div className="flex flex-row justify-between gap-20 items-center ">
          <ul className="flex flex-row justify-between gap-10">
            {links.map((link) => (
              <li>
                <NavLink
                  to={link.to}
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
          <Button name="Login" isLight={false} />

          <Button name="Register" isLight={false} />
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Nav;
