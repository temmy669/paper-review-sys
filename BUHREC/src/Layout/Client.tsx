import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";
const Client: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Client;
