import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Creative from "./components/Creative";
import Cards from "./components/Cards";
import Know from "./components/Know";
import Workflow from "./components/Workflow";
import Intelligence from "./components/Intelligence";
import Customers from "./components/Customers";
import Alanso from "./components/Alanso";
import Plartforms from "./components/Plartforms";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./style.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Creative />
      <Know />
      <Workflow />
      <Intelligence />
      <Alanso />
      <Customers />
      <Plartforms />
      <Footer />
    </div>
  );
}
