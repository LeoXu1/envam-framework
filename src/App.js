import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./App.css";

import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState("No country selected");
  return (
    <div className="base">
      <div className="container">
        <h2>Environmental Awareness Model</h2>
        <div className="form">
          <label>Select data:</label>
          <select>
            <option>CO2 emissions</option>
            <option>Greenhouse gas emissions</option>
          </select>
        </div>
        <div className="form">
          <label>Select year:</label>
          <select>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
        <h3>Filters</h3>
        {selected !== "No country selected" ? (
          <div className="form">
            <h4>Country: {selected}</h4>
            <button onClick={() => setSelected("No country selected")}>Clear selection</button>
          </div>
        ) : (
          <div className="form">
            <h4>Country: {selected}</h4>
          </div>
        )}
      </div>
      <div className="map">
        <MapChart selected={selected} setSelected={setSelected} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default App;
