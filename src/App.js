import React, { useState } from "react";
import Contact from "./componen/Contact";
import Hero from "./componen/Hero";
import Navbar from "./componen/Navbar";
import Programming from "./componen/Programming";
import Card from "./componen/Card";
import Footer from "./componen/Footer";

const App = () => {
  const [tNav, setNav] = useState(false);

  const tmNav = () => {
    setNav(!tNav);
  };
  return (
    <div>
      <Navbar tambahNav={tNav}></Navbar>
      <Hero onTambahNav={tmNav}></Hero>
      <Programming></Programming>
      <Contact></Contact>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
};

export default App;
