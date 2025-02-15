import React, { useEffect } from "react";
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
  useEffect(() => {
    // RC disable
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Shortcut disable
    const disableInspectElement = (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          (event.key === "u" ||
            event.key === "U" ||
            event.key === "i" ||
            event.key === "I" ||
            event.key === "j" ||
            event.key === "J" ||
            event.key === "s" ||
            event.key === "S"))
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableInspectElement);

    // Cleanup Event Listeners on Component Unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableInspectElement);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Features />
      <WasteForm />
      <MapComponent />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
