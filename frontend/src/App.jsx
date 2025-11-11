// import React, { useContext } from "react";
// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { userDataContext } from "./context/UserContext";
// import Login from "./features/customer/components/auth/Login";
// import Registration from "./features/customer/components/auth/Registration";
// import Home from "./features/customer/components/home/Home";
// import Product from "./features/customer/components/home/Product";
// import Ai from "./features/customer/common/Ai";
// import Nav from "./features/customer/common/Nav";
// import Contact from "./features/customer/components/contact/Contact";
// import NotFound from "./features/customer/common/NotFound";
// import Collection from "./features/customer/components/collection/Collection";
// import ProductDetail from "./features/customer/components/collection/ProductDetails";
// import About from "./features/customer/components/about/About";
// import Cart from "./features/customer/components/cart/Cart";
// import PlaceOrder from "./features/customer/components/orders/PlaceOrder";
// import Order from "./features/customer/components/orders/Orders";

// const App = () => {
//   let { userData } = useContext(userDataContext);
//   let location = useLocation();

//   return (
//     <>
//       {userData && <Nav />}
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             userData ? <Navigate to={location.state?.from || "/"} /> : <Login />
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             userData ? (
//               <Navigate to={location.state?.from || "/"} />
//             ) : (
//               <Registration />
//             )
//           }
//         />
//         <Route
//           path="/"
//           element={
//             userData ? (
//               <Home />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             userData ? (
//               <About />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/collection"
//           element={
//             userData ? (
//               <Collection />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/product"
//           element={
//             userData ? (
//               <Product />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/contact"
//           element={
//             userData ? (
//               <Contact />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/productdetail/:productId"
//           element={
//             userData ? (
//               <ProductDetail />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/cart"
//           element={
//             userData ? (
//               <Cart />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/placeorder"
//           element={
//             userData ? (
//               <PlaceOrder />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route
//           path="/order"
//           element={
//             userData ? (
//               <Order />
//             ) : (
//               <Navigate to="/login" state={{ from: location.path }} />
//             )
//           }
//         />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Ai />
//     </>
//   );
// };

// export default App;

import React from "react";
import CustomerRoutes from "./features/customer/routes/CustomerRoutes";
import CustomToast from "./common/CustomToast";

const App = () => {
  return (
    <div>
      <CustomerRoutes />
       <CustomToast />
    </div>
  );
};

export default App;
