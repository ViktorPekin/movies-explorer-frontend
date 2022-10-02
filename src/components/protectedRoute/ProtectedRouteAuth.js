import { Navigate } from "react-router-dom";

const ProtectedRouteAuth = ({ children, loggedIn }) => {
  return loggedIn ? <Navigate to="/"/> : children ;
};

export default ProtectedRouteAuth;
