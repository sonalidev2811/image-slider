import React from "react";
import ImageSlider from "./Components/ImageSlider";
import ImageData from "./Components/ImageData";

const App = () => {
  return (
    <div className="App">
      <ImageSlider slides={ImageData} />
    </div>
  );
};

export default App;
