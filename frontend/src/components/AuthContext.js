import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  //const location = useLocation();

  useEffect(() => {
    if (token) {
      if((token===undefined)||(token===null)){
        localStorage.removeItem("token");  
      }
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  //console.log(location);
  if (!token) return <Navigate to="/admin/login" replace />;

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
