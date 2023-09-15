import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CommonNavigation from "./CommonNavigationBar/CommonNavigation";
import HeroNavigation from "./HeroNavigationBar/HeroNavigation";

const NavigationBar = () => {
  const location = useLocation();

  const [normalNavigation, setNormalNavigation] = useState(false);

  return (
    <>
      <div className="desktop-navigation">
        {location.pathname.includes("tutorials") ||
        location.pathname.includes("forum") ? (
          <CommonNavigation />
        ) : (
          <HeroNavigation />
        )}
      </div>
    </>
  );
};

export default NavigationBar;
