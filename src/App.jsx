import { useState } from "react";
import {SketchPicker} from "react-color";
import "./App.css";

export default function App() {
  const [currentColor, setCurrentColor] = useState("#D0021B");
  const appStyle = {
    height: window.innerHeight,
    color: "white",
    backgroundColor: currentColor.hex,
    transition: "ease all 300ms"
  };

  const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };
  return (
    <div className="App" style={appStyle}>
      <h1>Basic Color Picker using ReactJS </h1>

      <SketchPicker className="pickercss"
        color={currentColor}
        onChangeComplete={handleChangeComplete}
      />

      <h1>Color Code: {currentColor.hex} </h1>
    </div>
  );
}
