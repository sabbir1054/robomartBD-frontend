import { Route, Routes } from "react-router-dom";
import AllProductPage from "./Pages/AllProductsPage/AllProductPage";
import BlogsMainPage from "./Pages/Blogs/BlogsMainPage";
import ForumMainPage from "./Pages/Forums/ForumMainPage";
import Home from "./Pages/Home/Home";
import NavigationBar from "./Shared/NavigationBars/NavigationBar";
import { useEffect, useState } from "react";

function App() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
     function handleResize() {
       setWindowWidth(window.innerWidth);
     }

     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, []);
  
  console.log(windowWidth);
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/blogs" element={<BlogsMainPage />} />
        <Route path="/forum" element={<ForumMainPage />} />
      </Routes>
    </>
  );
}

export default App;
