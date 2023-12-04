import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AllBlogsPage from "./Blogs/AllBlogs/AllBlogsPage";
import AllProductPage from "./Pages/AllProductsPage/AllProductPage";
import AuthPages from "./Pages/AuthPages/AuthPages";
import ForgetPassword from "./Pages/AuthPages/ForgetPassword";
import GoogleAuthLink from "./Pages/AuthPages/GoogleAuthLink";
import ProvideNewPassForget from "./Pages/AuthPages/ProvideNewPassForget";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import AddBlogsPage from "./Pages/Dashboard/Admin/AddBlogs/AddBlogsPAge";
import AddProducts from "./Pages/Dashboard/Admin/AddProducts/AddProducts";
import AdminDashboard from "./Pages/Dashboard/Admin/Dashboard/AdminDashboard";
import OrderManagement from "./Pages/Dashboard/Admin/OrderManagement/OrderManagement";
import OrderSummaryPrint from "./Pages/Dashboard/Admin/OrderSummaryPrint/OrderSummaryPrint";
import AdminProfile from "./Pages/Dashboard/Admin/Profile/AdminProfile";
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
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import HowToPlaceOrder from "./Pages/HowToPlaceOrder/HowToPlaceOrder";
import PrivacyPolicy from "./Pages/Policies/PrivacyPolicy";
import ReturnPolicy from "./Pages/Policies/ReturnPolicy";
import WarrantyPolicy from "./Pages/Policies/WarrantyPolicy";

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
        <Route path="/auth/forget_password" element={<ForgetPassword />} />
        <Route
          path="/api/renew_password/:email/:code"
          element={<ProvideNewPassForget />}
        />
        <Route path="/login" element={<AuthPages />} />
        <Route path="/register" element={<AuthPages />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/googleAuth/:link" element={<GoogleAuthLink />} />
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
        {/* Dashboard sections */}
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
        <Route
          path="/dashboard/portal_admin/order_history/:orderId"
          element={<SingleOrderDetailsPage />}
        />
        <Route
          path="/dashboard/portal_admin/order_summary/:orderId"
          element={<OrderSummaryPrint />}
        />
        <Route
          path="/dashboard/portal_admin/profile/"
          element={<AdminProfile />}
        />

        <Route
          path="/dashboard/portal_admin/dashboard/"
          element={<AdminDashboard />}
        />
        <Route
          path="/dashboard/portal_admin/order_management/"
          element={<OrderManagement />}
        />

        {/* Tutorials and Blogs */}

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
          path="/blogs/category/:categoryId/:categoryName"
          element={<SingleCategoryAllTutorial />}
        />
        <Route
          path="/tutorials/:tutorialId/:tutorialName"
          element={<SIngleTutorialPage />}
        />
        <Route
          path="/blogs/:tutorialId/:tutorialName"
          element={<SIngleTutorialPage />}
        />

        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route
          path="/product/:productId/:productName"
          element={<ProductDetailsPage />}
        />
        <Route path="/forum" element={<ForumMainPage />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/how_place_order" element={<HowToPlaceOrder />} />
        <Route path="/terms" element={<PrivacyPolicy />} />
        <Route path="/terms/#return" element={<PrivacyPolicy />} />
        <Route path="/warranty_policy" element={<WarrantyPolicy />} />
      </Routes>
      <Footer />
      <MobileNavigation />
    </>
  );
}

export default App;
