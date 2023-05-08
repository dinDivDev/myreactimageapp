import React from "react";
import ImageComponent from "../imageComponent/ImageComponent";
import "./header.css";

const showMessage = () => {
  return alert("Working on Sign In page");
};

const Header = (props) => {
  return (
    <div className="main_container">
      <ul className="flex_box_container">
        <li>
          <a {...props}>AboutUs</a>
        </li>
        <li>
          <a {...props}>ContactUs</a>
        </li>
        <li>
          <a {...props}>CatalogRequest</a>
        </li>
        <li>
          <a {...props}>Home</a>
        </li>
        <li>
          <a {...props}>WorldService</a>
        </li>
        <li>
          <a {...props} onClick={showMessage}>
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
