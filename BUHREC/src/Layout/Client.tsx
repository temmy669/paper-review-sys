import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";
const Client = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Client;
