import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Store from "../Pages/Store";

import Navigation from "./Navigation";
import SummaryPage from "../Cart/SummaryPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const HeaderNav = (props) => {
  return (
    <BrowserRouter state={() => props.changestate}>
      <div>
        <Navigation props />
        <Routes>
          <Route path="/Home" exact element={<Home />}></Route>

          <Route path="/Store" exact element={<Store />}></Route>

          <Route path="/About" exact element={<About />}></Route>
          <Route path ="/Cart" exact element={<SummaryPage/>}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default HeaderNav;
