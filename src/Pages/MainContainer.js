import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const MainContainer = () => {
  console.log(Outlet);
  return (
    <div>
      <div className={"main-container"}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
