import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./compos/Header.jsx";
import Merchandises from "./compos/Merchandises.jsx";
import Footer from "./compos/Footer.jsx";

function Layout() {
  return (
    <div>
      <div className="flex flex-col" style={{ paddingBottom: "250px" }}>
        <Header />
        <Routes className="flex-grow">
          <Route path="/" element={<App />} />
          <Route path={"/weapon/:wv_id/:wd_id"} element={<Merchandises />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
