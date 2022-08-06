import styles from "./Body.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Register from "../../Pages/Register/Register.tsx";
import Login from "../../Pages/Login/Login.tsx";
import Home from "../../Pages/Home/Home.tsx";
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'

function Body() {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Body;
