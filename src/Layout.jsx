import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


export default function Layout({ openCartModal, cartItemsCount }) {
  return (
    <div className="layout-container">
      <Header openCartModal={openCartModal} cartItemsCount={cartItemsCount} />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
