import React from "react";
import "./image.style.css";

const rotatePic = document.getElementById("reactPic");

const clickOnPicture = () => {
  return rotatePic.rotate();
};

// const FilterGroup = () => {
//   const [rotate, setRotate] = useState(false);

//   const handleRotate = () => setRotate(!rotate);

//   return (
//     <ExpandMoreIcon
//       className={"filters__chevron " + rotate ? "rotate" : null}
//       onClick={handleRotate}
//     />
//   );
// };

const ImageComponent = (props) => {
  return (
    <div>
      <img {...props} onClick={clickOnPicture} />
    </div>
  );
};

export default ImageComponent;
