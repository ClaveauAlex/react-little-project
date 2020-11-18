import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';

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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} /> 
      <InfoSection {...homeObjThree} />  
    </>
  );
}

export default Home;
