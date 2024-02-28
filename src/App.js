import React from "react";
import { Routes, Route } from "react-router-dom";

import MainContainer from "./Pages/MainContainer";
import Hero from "./Pages/Hero";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import ConnectForm from "./Pages/ConnectForm";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="home" element={<Hero />}></Route>
          <Route path="" element={<Hero />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="connect" element={<ConnectForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
