import React from "react";

const Shop = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.category),
    React.createElement("h3", {}, props.location),
  ]);
};

export default Shop;
