import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllProductPage from "./Pages/AllProductsPage/AllProductPage";
import BlogsMainPage from "./Pages/Blogs/BlogsMainPage";
import ForumMainPage from "./Pages/Forums/ForumMainPage";
import Home from "./Pages/Home/Home";
import MobileNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileNavigation";
import MobileTopNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileTopNavigation";
import NavigationBar from "./Shared/NavigationBars/NavigationBar";
import Footer from "./Shared/Footer/Footer";

function App() {
  
  return (
    <>
      <NavigationBar />
      <MobileTopNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/blogs" element={<BlogsMainPage />} />
        <Route path="/forum" element={<ForumMainPage />} />
      </Routes>
      <Footer/>
      <MobileNavigation />
    </>
  );
}

export default App;
