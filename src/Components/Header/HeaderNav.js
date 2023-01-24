import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Store from "../Pages/Store";

import Navigation from "./Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const HeaderNav = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/Home" exact element={<Home />}></Route>

          <Route path="/Store" exact element={<Store />}>
        
          </Route>

          <Route path="/About" exact element={<About />}>
        
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default HeaderNav;
