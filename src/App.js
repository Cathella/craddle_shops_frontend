const Shop = (props) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.category),
      React.createElement("h3", {}, props.location),
    ]
  )
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Craddle Shops"),
    React.createElement(Shop, { name: "Tami's collection", category: "Kid's Clothes", location: "Kireka"}),
    React.createElement(Shop, { name: "Next steps", category: "Kid's Clothes", location: "Namugongo"}),
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));