import React, { useState, useEffect } from "react";
import SummaryPage from "../Cart/SummaryPage";
import HeaderNav from "../Header/HeaderNav";

const Maincompo = () => {
  const [isVisible, setVisible] = useState(false);

 
    return (
      <div className="container fluied">
      <HeaderNav changestate ={()=>setVisible(false)} /> 
    
      </div>
    );
 
};
export default Maincompo;
