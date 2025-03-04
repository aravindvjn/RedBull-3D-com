import React, { Suspense } from "react";
import ModelViewer from "../car/model-viewer";
import HeroText from "./hero-text";
import NavBar from "../common/nav-bar";

const HomeHero = () => {
  return (
    <div className=" h-screen hero-section relative">
      <NavBar />
      <HeroText />
      <Suspense>
        <ModelViewer />
      </Suspense>
    </div>
  );
};

export default HomeHero;
