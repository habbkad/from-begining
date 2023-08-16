import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home_page/Home";
import Form from "../pages/form_page/FormPage";
import NavBar from "../components/navbar/Navbar";
import Payment from "../pages/payment/Payment";
import Maps from "../pages/Maps/Maps";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
