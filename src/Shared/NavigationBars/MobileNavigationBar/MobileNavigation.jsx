import HomeIcon from "@mui/icons-material/Home";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import StoreIcon from "@mui/icons-material/Store";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (link) => {
    navigate(`${link}`);
  };

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
        elevation={3}
        className="mobile-bottom-navigation"
      >
        <BottomNavigation
          style={{ backgroundColor: "var(--primaryColor)" }}
          showLabels
        >
          <BottomNavigationAction
            onClick={() => handleNavigation("/")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              transition: "all 0.1s ease-in-out",
              border: location?.pathname === "/" ? "1px solid #e2e2e2" : "",
              backgroundColor: location?.pathname === "/" ? "black" : "",
              borderRadius: location?.pathname === "/" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleNavigation("/products")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border:
                location?.pathname === "/products" ? "1px solid #e2e2e2" : "",
              backgroundColor:
                location?.pathname === "/products" ? "black" : "",
              borderRadius: location?.pathname === "/products" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Shop"
            icon={<StoreIcon />}
          />

          <BottomNavigationAction
            onClick={() => handleNavigation("/tutorials")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border:
                location?.pathname === "/tutorials" ? "1px solid #e2e2e2" : "",
              backgroundColor:
                location?.pathname === "/tutorials" ? "black" : "",
              borderRadius: location?.pathname === "/tutorials" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Tutorial"
            icon={<PlayLessonIcon />}
          />

          <BottomNavigationAction
            onClick={() => handleNavigation("/blogs")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border:
                location?.pathname === "/blogs" ? "1px solid #e2e2e2" : "",
              backgroundColor: location?.pathname === "/blogs" ? "black" : "",
              borderRadius: location?.pathname === "/blogs" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Blogs"
            icon={<RssFeedSharpIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default MobileNavigation;
