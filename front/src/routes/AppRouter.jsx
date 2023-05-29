import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import ShopPage from "../pages/ShopPage/ShopPage";
import CartPage from "../pages/CartPage/CartPage";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
            <Header />
            <Outlet />
          </React.Fragment>
        }
      >
        <Route path="/" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
