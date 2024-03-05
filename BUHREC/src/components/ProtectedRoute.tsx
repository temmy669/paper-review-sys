import { useNavigate } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated == false) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  return children;
};

export default ProtectedRoute;
