import React from "react";
import ReactDOM from "react-dom";
import Shop from "./Shop";

const App = () => {
  return (
    <div>
      <h1>Craddle Shops</h1>
      <Shop name="Tami's collection" category="Kid's wear" location="Namugongo" />
      <Shop name="Two Steps" category="Kid's foot wear" location="Kireka" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
