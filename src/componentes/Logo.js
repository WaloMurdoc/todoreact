import React from "react";
import "../stylesheets/Logo.css";

function Logo({ dirLogo }) {
  return (
    <div className="walo-logo-contenedor">
      <img className="walo-logo" src={dirLogo} alt="Logo de WaloDev" />
    </div>
  );
}

export default Logo;
