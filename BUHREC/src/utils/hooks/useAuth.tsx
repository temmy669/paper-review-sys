import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { authenticated, login, logout } = useContext(AuthContext);
  return { authenticated, login, logout };
};

export default useAuth;
