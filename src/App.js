import React from "react";
import propTypes from "prop-types"; //mandatory naming 'propTypes' to react recognize it

function Food({ name, price, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>price is {price} won! </h3>
      <h3>rating is {rating}/5 </h3>
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    price: 3000,
    rating: 5,
  },
  {
    id: 2,
    name: "bibimbap",
    price: 2000,
    rating: 4.3,
  },
  {
    id: 3,
    name: "galbi",
    price: 5000,
    rating: 4.2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          price={dish.price}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
