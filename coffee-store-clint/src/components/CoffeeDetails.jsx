import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeData = useLoaderData();
  const { name, price, category, details, photoURL, taste } = coffeData;
  console.log(coffeData);
  return (
    <div>
      <h1>this is coffee Details</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <p>Taste: {taste}</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CoffeeDetails;
