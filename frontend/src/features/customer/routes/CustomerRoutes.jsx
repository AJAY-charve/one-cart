import React, { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { userDataContext } from "../../../context/UserContext";
import Nav from "../common/Nav";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Home from "../components/home/Home";
import Product from "../components/home/Product";
import Ai from "../common/Ai";
import Contact from "../components/contact/Contact";
import NotFound from "../common/NotFound";
import Collection from "../components/collection/Collection";
import ProductDetail from "../components/collection/ProductDetails";
import About from "../components/about/About";
import Cart from "../components/cart/Cart";
import PlaceOrder from "../components/orders/PlaceOrder";
import Order from "../components/orders/Orders";
import CustomerLayout from "../layout/CustomerLayout";
import Footer from "../common/Footer";

const CustomerRoutes = () => {
  let { userData } = useContext(userDataContext);
  let location = useLocation();

  return (
    <>
      {userData && <Nav />}
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route
            path="/login"
            element={
              userData ? (
                <Navigate to={location.state?.from || "/"} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/signup"
            element={
              userData ? (
                <Navigate to={location.state?.from || "/"} />
              ) : (
                <Registration />
              )
            }
          />
          <Route
            path="/"
            element={
              userData ? (
                <Home />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/about"
            element={
              userData ? (
                <About />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/collection"
            element={
              userData ? (
                <Collection />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/product"
            element={
              userData ? (
                <Product />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/contact"
            element={
              userData ? (
                <Contact />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/productdetail/:productId"
            element={
              userData ? (
                <ProductDetail />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/cart"
            element={
              userData ? (
                <Cart />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/placeorder"
            element={
              userData ? (
                <PlaceOrder />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route
            path="/order"
            element={
              userData ? (
                <Order />
              ) : (
                <Navigate to="/login" state={{ from: location.path }} />
              )
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Ai /> */}
      {userData && <Footer />}
    </>
  );
};

export default CustomerRoutes;
