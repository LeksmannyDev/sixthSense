import React from "react";
import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
