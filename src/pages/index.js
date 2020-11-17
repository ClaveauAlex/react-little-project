import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
}

export default Home;
