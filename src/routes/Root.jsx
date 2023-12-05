import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Root = () => {
  const isAuthenticated = useSelector((state) => state.user.user?.accessToken);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Root;
