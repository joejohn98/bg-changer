import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  return (
    <div>
      <h2>BG Changer</h2>
      <div
        style={{
          backgroundColor: color,
          width: "100%",
          height: "400px",
          borderRadius: "10px",
          margin: "auto",
          border: "1.5px solid black",
        }}
      >
        <select
          name="bg-changer"
          id="bg-changer"
          onChange={(e) => handleColorChange(e)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="coral">Coral</option>
          <option value="pink">Pink</option>
        </select>
      </div>
    </div>
  );
};

export default BgChanger;
