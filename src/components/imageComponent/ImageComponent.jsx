import React from "react";
import "./image.style.css";

const rotate = document.getElementById("reactPic");

const clickOnPicture = () => {
  rotate.toggleClass("img_container");
};

const ImageComponent = (props) => {
  return (
    <div>
      <img {...props} onClick={clickOnPicture} />
    </div>
  );
};

export default ImageComponent;
