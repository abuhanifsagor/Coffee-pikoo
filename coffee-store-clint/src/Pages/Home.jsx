import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffeData = useLoaderData();
    console.log(coffeData);
 
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;