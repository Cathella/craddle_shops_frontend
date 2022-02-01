import React from "react";
import ReactDOM from "react-dom";
import Shop from "./Shop";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Craddle Shops"),
    React.createElement(Shop, {
      name: "Tami's collection",
      category: "Kid's Clothes",
      location: "Kireka - Today",
    }),
    React.createElement(Shop, {
      name: "Two steps",
      category: "Kid's Clothes",
      location: "Namugongo",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
