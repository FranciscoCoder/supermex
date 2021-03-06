import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import globalUrl from "./Utils";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if(token){
      if((token===undefined)||(token===null)){
        localStorage.removeItem("token");
      }
      else{
        fetch(`${globalUrl}/api/verify_token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          if((data.code===401)||(data.result==="ko")){
            localStorage.removeItem("token");
          }
          else{
            localStorage.setItem("token", localStorage.getItem("token"));
          }
        }).catch((error) => {
          localStorage.removeItem("token");
        });
      }
    }else{
      localStorage.removeItem("token");
    }
    
  }, [token]);
  
  if (!token) return <Navigate to="/admin/login" replace />;

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
