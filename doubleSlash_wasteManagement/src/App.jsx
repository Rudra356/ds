import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

import WasteForm from "./components/WasteForm";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Features />
      <WasteForm />
      <MapComponent/>
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
