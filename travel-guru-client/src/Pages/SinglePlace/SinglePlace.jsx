import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";

const SinglePlace = () => {
  const singlePlace = useLoaderData();
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className=" flex items-center h-[calc(100vh-68.19px)]">
        <div className="w-1/2 text-white">
          <h1 className="text-6xl tracking-wide mb-2">{singlePlace.name}</h1>
          <p><small>{singlePlace.description}</small></p>
        </div>
        <div className="w-1/3 mx-auto bg-white p-4 rounded-md">
          <label htmlFor="origin">Origin</label>
          <input className="block w-full py-1 px-2 bg-gray-200 rounded-md" type="text" id="origin" placeholder="Enter Origin"/>
          <label htmlFor="destination">Destination</label>
          <input className="block bg-gray-200 w-full py-1 px-2 rounded-md" type="text" id="destination" placeholder="Enter Destination"/>
          <button className="bg-amber-600 w-full py-1 my-2 rounded-md">Start Booking</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlace;
