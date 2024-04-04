import { useContext } from "react";
import { LogRegToggleContext } from "../context/LogRegToggleContext";

const useToggle = () => {
  const { toggle, setToLogin, setToRegister } = useContext(LogRegToggleContext);
  return { toggle, setToLogin, setToRegister };
};

export default useToggle;
