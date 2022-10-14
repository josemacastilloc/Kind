import React, { useState } from "react";
import MyDropzone from "./Dropzone";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <div className="main-container">
      <Navbar clicked={clicked} handleClick={handleClick} />
      <div style={clicked ? {visibility: "hidden" } : {visibility: "visible"}}>
      <MyDropzone />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
