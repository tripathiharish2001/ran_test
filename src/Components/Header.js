import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");

  const handleClick = (e) => {
    console.log(e.target.innerText.toLowerCase());
    setActive(e.target.innerText.toLowerCase());
    navigate(e.target.innerText.toLowerCase());
  };

  const navigate = useNavigate();
  return (
    <div className="header-container">
      <h3 className="hc-logo">LOGO</h3>
      <div className="hc-links">
        <p className={active === "home" ? "active" : ""} onClick={handleClick}>
          Home
        </p>
        <p
          className={active === "services" ? "active" : ""}
          onClick={handleClick}
        >
          Services
        </p>
        <p className={active === "blogs" ? "active" : ""} onClick={handleClick}>
          Blogs
        </p>
        <p
          className={active === "connect" ? "active" : ""}
          onClick={handleClick}
        >
          Connect
        </p>
      </div>
    </div>
  );
};

export default Header;
