import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AllBlogsPage from "./Blogs/AllBlogs/AllBlogsPage";
import AllProductPage from "./Pages/AllProductsPage/AllProductPage";
import AuthPages from "./Pages/AuthPages/AuthPages";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import AddBlogsPage from "./Pages/Dashboard/Admin/AddBlogs/AddBlogsPAge";
import AddProducts from "./Pages/Dashboard/Admin/AddProducts/AddProducts";
import OrderHistory from "./Pages/Dashboard/Customer/OrderHistory/OrderHistory";
import SingleOrderDetailsPage from "./Pages/Dashboard/Customer/OrderHistory/SingleOrderDetailsPage";
import Profile from "./Pages/Dashboard/Customer/Profile/Profile";
import ForumMainPage from "./Pages/Forums/ForumMainPage";
import Home from "./Pages/Home/Home";
import Notfound from "./Pages/NotFound/Notfound";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ProductSearch from "./Pages/ProductSearchPage/ProductSearch";
import ShoppingCartPage from "./Pages/ShoppingCart/ShoppingCartPage";
import SingleCategoryProducts from "./Pages/SingleCategoryProducts/SingleCategoryProducts";
import SubCategoryProducts from "./Pages/SingleSubCategoryProduct/SubCategoryProducts";
import AllTutorialPage from "./Pages/Tutorials/AllTutorials/AllTutorialPage";
import SingleCategoryAllTutorial from "./Pages/Tutorials/AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";
import SingleTagAllTutorial from "./Pages/Tutorials/AllTutorials/Components/SingleTagAllTutorial/SingleTagAllTutorial";
import SIngleTutorialPage from "./Pages/Tutorials/SingleTutorial/SIngleTutorialPage";
import Footer from "./Shared/Footer/Footer";
import MobileNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileNavigation";
import MobileTopNavigation from "./Shared/NavigationBars/MobileNavigationBar/MobileTopNavigation";
import NavigationBar from "./Shared/NavigationBars/NavigationBar";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <NavigationBar />
      <MobileTopNavigation />
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<AuthPages />} />
        <Route path="/register" element={<AuthPages />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<Notfound />} />
        <Route
          path="/products/search=/:searchTerm?"
          element={<ProductSearch />}
        />
        <Route
          path="/products/categories/:categoryId/:categoryName"
          element={<SingleCategoryProducts />}
        />
        <Route
          path="/products/scategories/:subCategoryId/:subCategoryName"
          element={<SubCategoryProducts />}
        />
        <Route
          path="/dashboard/portal-admin/addBlogs"
          element={<AddBlogsPage />}
        />
        <Route
          path="/dashboard/portal-admin/addProducts"
          element={<AddProducts />}
        />
        <Route path="/dashboard/user/profile" element={<Profile />} />
        <Route
          path="/dashboard/user/order_history"
          element={<OrderHistory />}
        />
        <Route
          path="/dashboard/user/order_history/:orderId"
          element={<SingleOrderDetailsPage />}
        />
        <Route path="/tutorials" element={<AllTutorialPage />} />
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route
          path="/tutorials/tag/:tagId/:tagName"
          element={<SingleTagAllTutorial />}
        />
        <Route
          path="/tutorials/category/:categoryId/:categoryName"
          element={<SingleCategoryAllTutorial />}
        />
        <Route
          path="/tutorials/:tutorialId/:tutorialName"
          element={<SIngleTutorialPage />}
        />
        <Route path="/forum" element={<ForumMainPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route
          path="/product/:productId/:productName"
          element={<ProductDetailsPage />}
        />
      </Routes>
      <Footer />
      <MobileNavigation />
    </>
  );
}

export default App;
