import React from "react";
import ModelViewer from "../canvas/model-viewer";
import HeroText from "./hero-text";
import NavBar from "../common/nav-bar";

const HomeHero = () => {
  return (
    <div className="h-screen hero-section relative">
      <NavBar />
      <HeroText />
      <ModelViewer />
    </div>
  );
};

export default HomeHero;
