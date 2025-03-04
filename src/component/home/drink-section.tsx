import React from "react";
import DrinkCanvasViewer from "../drink/canvas-viewe";
import DrinkContent from "../drink/content";

const DrinkSection = () => {
  return (
    <div id="drink" className="h-screen bg-[#1F3D7A]">

      <DrinkContent/>
      <DrinkCanvasViewer />
      
    </div>
  );
};

export default DrinkSection;
