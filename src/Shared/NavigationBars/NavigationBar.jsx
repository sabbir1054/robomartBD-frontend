import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MobileTopNavigation from "./MobileNavigationBar/MobileTopNavigation";
import CommonNavigation from "./CommonNavigationBar/CommonNavigation";
import HeroNavigation from "./HeroNavigationBar/HeroNavigation";

const NavigationBar = () => {
  const location = useLocation();
  const [normalNavigation, setNormalNavigation] = useState(false);
  if (
    location.pathname.includes("blogs") ||
    location.pathname.includes("forum")
  ) {
    return <CommonNavigation />;
  } else {
    return <HeroNavigation />;
  }
 
};

export default NavigationBar;
