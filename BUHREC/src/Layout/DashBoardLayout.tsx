import { NavLink, Outlet } from "react-router-dom";
import { bookOpen, logoutimg, pending, profile, uplaod } from "../assets";
import useAuth from "../utils/hooks/useAuth";

const DashBoardLayout: React.FC = () => {
  const links: link[] = [
    { name: "Upload", to: "/DashBoard/Upload" },
    { name: "Past Submissions", to: "/DashBoard/PastSubmissions" },
    { name: "Pending Submissions", to: "/DashBoard/Pending" },
  ];

  interface link {
    name: string;
    to: string;
  }

  const { logout } = useAuth();
  return (
    <div className="">
      <div className="flex flex-row justify-normal ">
        <aside className="basis-[20%] flex flex-col  items-center justify-around h-screen">
          <div className="flex flex-col justify-center items-center">
            <img
              src={profile}
              width={90}
              alt="Profile Picture"
              className="cursor-pointer rounded-full"
            />
            <p className="text-sm cursor-pointer pt-3">View Profile</p>
          </div>

          <div className="pb-16">
            <ul className=" flex flex-col gap-4">
              <li className="">
                <NavLink
                  to={links[0].to}
                  style={({ isActive }) => ({
                    color: isActive ? "#04385B" : "#045286",
                    fontWeight: isActive ? "700" : "420",
                  })}
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <img src={uplaod} width={20} alt="Upload" />
                  {links[0].name}
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to={links[1].to}
                  style={({ isActive }) => ({
                    color: isActive ? "#04385B" : "#045286",
                    fontWeight: isActive ? "700" : "420",
                  })}
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <img src={bookOpen} width={20} alt="Past" /> {links[1].name}
                </NavLink>
              </li>
              <li className="flex flex-row gap-2 cursor-pointer">
                <NavLink
                  to={links[2].to}
                  style={({ isActive }) => ({
                    color: isActive ? "#04385B" : "#045286",
                    fontWeight: isActive ? "700" : "420",
                  })}
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <img src={pending} width={20} alt="Past" /> {links[2].name}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-2 cursor-pointer" onClick={logout}>
            <img src={logoutimg} width={20} alt="Logout" />
            Logout
          </div>
        </aside>
        <main className="flex flex-col basis-[85%]">
          <div className="basis-[20%] text-2xl pl-20 pt-9 pb-9 font-semibold flex items-center">
            <span className="text-welcome mr-3">Welcome, </span> Dr. Adetunji
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
