import Header from "./components/headerComponent/Header";
import ImageComponent from "./components/imageComponent/ImageComponent";
import reactImage from "./components/imageComponent/reactImage.jpeg";
import "./App.css";

const elementData = {
  className: "main_header",
  href: "#",
};

const imgData = {
  // src: { reactImage },
  id: "reactPic",
  width: 100,
  className: "img_container",
  href: "#",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header {...elementData} />
        <ImageComponent
          src={reactImage}
          {...imgData}
          onClick="rotateMe(this);"
        />
      </header>
    </div>
  );
}

export default App;
