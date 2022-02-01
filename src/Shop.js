const Shop = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
      <h3>{props.location}</h3>
    </div>
  );
};

export default Shop;
