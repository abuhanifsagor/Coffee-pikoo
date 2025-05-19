import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const coffeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeData)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
