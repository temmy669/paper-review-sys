import { NavLink, Outlet } from "react-router-dom";
import { employee, emptyProfile, homeImg, lightLogout } from "../assets";
import useAuth from "../utils/hooks/useAuth";

const ReviewerLayout: React.FC = () => {
  const links: link[] = [
    {
      name: "DashBoard",
      to: "/reviewer/",
      img: homeImg,
      alt: "Home Icon",
    },
    {
      name: "Previously Reviewed",
      to: "/Reviewer/previouslyReviewed",
      img: employee,
      alt: "Home Icon",
    },
  ];

  interface link {
    name: string;
    to: string;
    img: string;
    alt: string;
  }

  const { logout } = useAuth();

  return (
    <div>
      <div className="flex flex-row justify-normal">
        <aside className="basis-[15%] flex flex-col bg-button text-white items-center justify-around h-screen">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-Buhrec cursor-pointer text-[#80EADD]">
              BUHREC
            </h2>
          </div>

          <div className="">
            <ul className=" flex flex-col gap-11">
              {links.map((link, index) => (
                <li className="" key={index}>
                  <NavLink
                    to={link.to}
                    key={index}
                    style={({ isActive }) => ({
                      // color: isActive ? "#04385B" : "#04",
                      fontWeight: isActive ? "700" : "420",
                    })}
                    className="flex flex-row gap-2 cursor-pointer"
                  >
                    <img src={link.img} width={20} alt={link.alt} />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row gap-2 cursor-pointer" onClick={logout}>
            <img src={lightLogout} width={20} alt="Logout" />
            Logout
          </div>
        </aside>
        <div className="basis-[85%] px-8 flex flex-col gap-2 font-Raleway ">
          <div className="flex justify-between basis-[20%] pt-9 pb-9 font-semibold items-center">
            <span className="text-ash text-3xl">Research Works</span>
            <div className="text-right pr-16 flex gap-4">
              <span>
                Welcome back, admin
                <br />
                <span className="text-ash">Babcock University</span>
              </span>
              <div>
                <img src={emptyProfile} alt="profile" />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewerLayout;
