import { createContext, useState } from "react";

interface AuthContextProps {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  // const navigate = useNavigate();

  const login = () => {
    setAuthenticated(true);
    // navigate("/DashBoard/Upload");
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
