import React from "react";
import styleDashboard from "../../Dashboard.module.css";

export default function NoConexion() {
  
  return (
    <div className={styleDashboard.bienvenida}>Problemas técnico con el servidor. Contacte con el administrador.</div>
  );
}