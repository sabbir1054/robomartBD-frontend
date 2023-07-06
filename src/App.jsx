import { Route, Routes } from "react-router-dom";
import AllProductPage from "./Pages/AllProductsPage/AllProductPage";
import BlogsMainPage from "./Pages/Blogs/BlogsMainPage";
import ForumMainPage from "./Pages/Forums/ForumMainPage";
import Home from "./Pages/Home/Home";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCartPage";
import Footer from "./Shared/Footer/Footer";
import MobileNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileNavigation";
import MobileTopNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileTopNavigation";
import NavigationBar from "./Shared/NavigationBars/NavigationBar";

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
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
      <MobileNavigation />
    </>
  );
}

export default App;
