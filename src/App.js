import React from "react";
import Navbat from "./components/Home";
import Home from "./components/Escola";
import SobreMim from "./components/SobreMim";
import "./index.css";

export default function App() {
  return(
    <div className="font-sans">

      <Navbar />
      <Home />
      <Escola />
      <SobreMim />
      </div>
  );
}