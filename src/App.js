import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Forms } from "./components/Forms";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;
