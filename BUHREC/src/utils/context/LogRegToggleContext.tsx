import { createContext, ReactNode, useState } from "react";

interface LogRegToggleContextProps {
  toggle: boolean;
  setToLogin: () => void;
  setToRegister: () => void;
}

interface Props {
  children: ReactNode;
}

export const LogRegToggleContext = createContext<
  LogRegToggleContextProps | undefined
>(undefined);

export const LogRegToggleProvider: React.FC<Props> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const setToLogin = () => {
    setToggle(true);
  };

  const setToRegister = () => {
    setToggle(false);
  };

  return (
    <LogRegToggleContext.Provider value={{ toggle, setToLogin, setToRegister }}>
      {children}
    </LogRegToggleContext.Provider>
  );
};
